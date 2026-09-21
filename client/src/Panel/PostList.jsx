import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PanelLayout from "./PanelLayout.jsx";
import ConfirmModal from "./ConfirmModal.jsx";
import { usePanelAuth } from "./usePanelAuth.js";
import { deletePost, listPosts } from "./panelApi.js";
import { formatDate } from "../Utils/formatDate";
import "./Panel.css";

const PostList = () => {
  const { user } = usePanelAuth();
  const canDelete = user?.role?.type === "blog_admin";
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  const load = () => {
    listPosts()
      .then(setPosts)
      .catch(() => setError("Nie udało się pobrać wpisów."));
  };

  useEffect(load, []);

  const confirmDelete = async () => {
    const { documentId } = pendingDelete;
    setDeletingId(documentId);
    try {
      await deletePost(documentId);
      setPosts((prev) => prev.filter((p) => p.documentId !== documentId));
    } catch {
      setError("Nie udało się usunąć wpisu.");
    } finally {
      setDeletingId(null);
      setPendingDelete(null);
    }
  };

  return (
    <PanelLayout>
      <div className="panelHeaderRow">
        <h2>Wpisy na blogu</h2>
        <Link to="/panel/new">
          <button type="button" className="panelPrimaryBtn">+ Nowy wpis</button>
        </Link>
      </div>

      {error && <div className="panelError">{error}</div>}

      {posts === null && !error && <p className="panelHint">Ładowanie...</p>}

      {posts && posts.length === 0 && (
        <div className="panelEmptyState">Brak wpisów. Utwórz pierwszy wpis na blogu.</div>
      )}

      {posts && posts.length > 0 && (
        <div className="panelPostList">
          {posts.map((post) => (
            <div className="panelPostRow" key={post.documentId}>
              <span className={`panelBadge ${post.status}`}>
                {post.status === "published" ? "Opublikowany" : "Szkic"}
              </span>
              <div className="panelPostInfo">
                <h3>{post.Title}</h3>
                <span className="panelPostMeta">
                  Zaktualizowano {formatDate(post.updatedAt)}
                  {post.hasDraft ? " · ma niezapisane zmiany" : ""}
                </span>
              </div>
              <div className="panelPostActions">
                <Link to={`/panel/edit/${post.documentId}`}>
                  <button type="button" className="panelSecondaryBtn">Edytuj</button>
                </Link>
                {canDelete && (
                  <button
                    type="button"
                    className="panelDangerBtn"
                    onClick={() =>
                      setPendingDelete({ documentId: post.documentId, title: post.Title })
                    }
                    disabled={deletingId === post.documentId}
                  >
                    Usuń
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {pendingDelete && (
        <ConfirmModal
          title="Usunąć wpis?"
          busy={deletingId === pendingDelete.documentId}
          onConfirm={confirmDelete}
          onCancel={() => setPendingDelete(null)}
        >
          Wpis <strong>{pendingDelete.title}</strong> zostanie trwale usunięty. Tej operacji
          nie można cofnąć.
        </ConfirmModal>
      )}
    </PanelLayout>
  );
};

export default PostList;
