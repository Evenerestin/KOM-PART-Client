import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import BlogCoverPlaceholder from "../Components/BlogCoverPlaceholder.jsx";
import config from "../config.js";
import PanelLayout from "./PanelLayout.jsx";
import { createPost, getPost, updatePost, uploadImage } from "./panelApi.js";
import { slugify } from "./slugify.js";
import "./Panel.css";

const emptyForm = {
  Title: "",
  Slug: "",
  Excerpt: "",
  Content: "",
};

const PostForm = () => {
  const { documentId } = useParams();
  const isEditing = Boolean(documentId);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [slugTouched, setSlugTouched] = useState(false);
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [existingCoverUrl, setExistingCoverUrl] = useState(null);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isEditing) return;
    getPost(documentId)
      .then((post) => {
        setForm({
          Title: post.Title ?? "",
          Slug: post.Slug ?? "",
          Excerpt: post.Excerpt ?? "",
          Content: post.Content ?? "",
        });
        setSlugTouched(true);
        if (post.CoverImage?.url) {
          setExistingCoverUrl(`${config.api}${post.CoverImage.url}`);
        }
      })
      .catch(() => setError("Nie udało się wczytać wpisu."))
      .finally(() => setLoading(false));
  }, [documentId, isEditing]);

  const handleTitleChange = (value) => {
    setForm((prev) => ({
      ...prev,
      Title: value,
      Slug: slugTouched ? prev.Slug : slugify(value),
    }));
  };

  const handleCoverChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const buildPayload = async () => {
    const payload = {
      Title: form.Title,
      Slug: form.Slug || slugify(form.Title),
      Excerpt: form.Excerpt,
      Content: form.Content,
    };
    if (coverFile) {
      const uploaded = await uploadImage(coverFile);
      payload.CoverImage = uploaded.id;
    }
    return payload;
  };

  const handleSave = async (publish) => {
    setError(null);
    setSaving(true);
    try {
      const payload = await buildPayload();
      if (isEditing) {
        await updatePost(documentId, payload, publish);
      } else {
        await createPost(payload, publish);
      }
      navigate("/panel");
    } catch {
      setError("Nie udało się zapisać wpisu. Sprawdź, czy wszystkie wymagane pola są wypełnione.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <PanelLayout>
        <p className="panelHint">Ładowanie...</p>
      </PanelLayout>
    );
  }

  return (
    <PanelLayout>
      <div className="panelHeaderRow">
        <h2>{isEditing ? "Edytuj wpis" : "Nowy wpis"}</h2>
        <button type="button" className="panelSecondaryBtn" onClick={() => navigate("/panel")}>
          Anuluj
        </button>
      </div>

      <div className="panelFormCard">
        {error && <div className="panelError">{error}</div>}

        <div className="panelField">
          <label htmlFor="title">Tytuł</label>
          <input
            id="title"
            value={form.Title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
          />
        </div>

        <div className="panelField">
          <label htmlFor="slug">Slug (adres URL)</label>
          <input
            id="slug"
            value={form.Slug}
            onChange={(e) => {
              setSlugTouched(true);
              setForm((prev) => ({ ...prev, Slug: e.target.value }));
            }}
            required
          />
          <span className="panelHint">/blog/{form.Slug || "..."}</span>
        </div>

        <div className="panelField">
          <label htmlFor="excerpt">Zajawka</label>
          <textarea
            id="excerpt"
            rows={3}
            maxLength={300}
            value={form.Excerpt}
            onChange={(e) => setForm((prev) => ({ ...prev, Excerpt: e.target.value }))}
            required
          />
          <span className="panelHint">{form.Excerpt.length}/300 znaków</span>
        </div>

        <div className="panelField">
          <label htmlFor="content">Treść (Markdown)</label>
          <div className="panelMarkdownEditor" data-color-mode="light">
            <MDEditor
              id="content"
              value={form.Content}
              onChange={(value) => setForm((prev) => ({ ...prev, Content: value ?? "" }))}
              height={420}
              preview="live"
              textareaProps={{ required: true }}
            />
          </div>
        </div>

        <div className="panelField">
          <label htmlFor="cover">Zdjęcie okładkowe</label>
          {coverPreview || existingCoverUrl ? (
            <img className="panelCoverPreview" src={coverPreview ?? existingCoverUrl} alt="" />
          ) : (
            <div className="panelCoverPreview">
              <BlogCoverPlaceholder />
            </div>
          )}
          <div className="panelFilePicker">
            <input
              id="cover"
              className="panelFileInput"
              type="file"
              accept="image/*"
              onChange={handleCoverChange}
            />
            <label htmlFor="cover" className="panelFileButton">
              Wybierz plik
            </label>
            <span className="panelFileName">
              {coverFile ? coverFile.name : "Nie wybrano pliku"}
            </span>
          </div>
        </div>

        <div className="panelFormActions">
          <button
            type="button"
            className="panelSecondaryBtn"
            onClick={() => handleSave(false)}
            disabled={saving}
          >
            {saving ? "Zapisywanie..." : "Zapisz jako szkic"}
          </button>
          <button
            type="button"
            className="panelPrimaryBtn"
            onClick={() => handleSave(true)}
            disabled={saving}
          >
            {saving ? "Zapisywanie..." : "Opublikuj"}
          </button>
        </div>
      </div>
    </PanelLayout>
  );
};

export default PostForm;
