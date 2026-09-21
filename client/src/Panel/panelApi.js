import axios from "axios";
import config from "../config.js";

const TOKEN_KEY = "kompart_panel_jwt";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

function isAuthEndpoint(url) {
  return Boolean(url?.startsWith("/api/auth/"));
}

const api = axios.create({ baseURL: config.api, withCredentials: true });

api.interceptors.request.use((req) => {
  const token = getToken();
  // A stale/expired token must never ride along on auth endpoints -- Strapi
  // rejects the whole request over a bad Authorization header before it
  // gets to check the credentials or refresh cookie in the body.
  if (token && !isAuthEndpoint(req.url)) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Access tokens expire after 10 minutes (this project's users-permissions
// session config). The refresh token itself lives in an httpOnly cookie, so
// this just needs to hit /api/auth/refresh with credentials and swap in the
// new access token. Concurrent 401s (e.g. the two parallel calls in
// listPosts()) share one in-flight refresh instead of racing each other.
let refreshPromise = null;

function refreshAccessToken() {
  if (!refreshPromise) {
    refreshPromise = api
      .post("/api/auth/refresh")
      .then(({ data }) => {
        setToken(data.jwt);
        return data.jwt;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }
  return refreshPromise;
}

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;
    if (err.response?.status === 401 && !original._retried && !isAuthEndpoint(original?.url)) {
      original._retried = true;
      try {
        await refreshAccessToken();
        return api(original);
      } catch {
        clearToken();
      }
    }
    throw err;
  }
);

export async function login(identifier, password) {
  const { data } = await api.post("/api/auth/local", { identifier, password });
  setToken(data.jwt);
  return data.user;
}

export async function fetchMe() {
  const { data } = await api.get("/api/users/me", { params: { populate: "role" } });
  return data;
}

export async function listPosts() {
  const [published, draft] = await Promise.all([
    api.get("/api/blog-posts", {
      params: { populate: "CoverImage", status: "published", sort: "updatedAt:desc" },
    }),
    api.get("/api/blog-posts", {
      params: { populate: "CoverImage", status: "draft", sort: "updatedAt:desc" },
    }),
  ]);

  // Strapi can stamp a draft row a moment after its published counterpart
  // even when nothing was actually edited (the mirrored row is written in
  // the same publish request); a few seconds of tolerance keeps that from
  // being mistaken for a real unsaved edit.
  const DRAFT_SYNC_TOLERANCE_MS = 5000;

  const byDocumentId = new Map();
  for (const post of published.data.data) {
    byDocumentId.set(post.documentId, { ...post, status: "published", hasDraft: false });
  }
  for (const post of draft.data.data) {
    const existing = byDocumentId.get(post.documentId);
    if (existing) {
      // A draft row exists alongside every published entry even when it was
      // never edited after publishing, so a draft row existing isn't itself
      // evidence of unsaved changes -- only a meaningfully newer draft is.
      const draftAge = new Date(post.updatedAt) - new Date(existing.updatedAt);
      existing.hasDraft = draftAge > DRAFT_SYNC_TOLERANCE_MS;
      if (existing.hasDraft) {
        // Reflect the draft's more recent edit time, not the last publish,
        // so the "unsaved changes" badge and the displayed date agree.
        existing.updatedAt = post.updatedAt;
      }
    } else {
      byDocumentId.set(post.documentId, { ...post, status: "draft", hasDraft: false });
    }
  }

  return Array.from(byDocumentId.values()).sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );
}

export async function getPost(documentId) {
  try {
    const { data } = await api.get(`/api/blog-posts/${documentId}`, {
      params: { populate: "CoverImage", status: "draft" },
    });
    return data.data;
  } catch (err) {
    if (err.response?.status === 404) {
      const { data } = await api.get(`/api/blog-posts/${documentId}`, {
        params: { populate: "CoverImage", status: "published" },
      });
      return data.data;
    }
    throw err;
  }
}

export async function uploadImage(file) {
  const form = new FormData();
  form.append("files", file);
  const { data } = await api.post("/api/upload", form);
  return data[0];
}

// Strapi's REST create/update default to `status=published` when the param is
// omitted, so a draft save must ask for "draft" explicitly.
export async function createPost(payload, publish) {
  const { data } = await api.post(
    "/api/blog-posts",
    { data: payload },
    { params: { status: publish ? "published" : "draft" } }
  );
  return data.data;
}

export async function updatePost(documentId, payload, publish) {
  const { data } = await api.put(
    `/api/blog-posts/${documentId}`,
    { data: payload },
    { params: { status: publish ? "published" : "draft" } }
  );
  return data.data;
}

export async function deletePost(documentId) {
  await api.delete(`/api/blog-posts/${documentId}`);
}
