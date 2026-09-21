import { useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import "./Panel.css";

const ConfirmModal = ({
  title,
  children,
  confirmLabel,
  cancelLabel,
  busy,
  onConfirm,
  onCancel,
}) => {
  const cancelRef = useRef(null);

  useEffect(() => {
    cancelRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && !busy) onCancel();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [busy, onCancel]);

  return (
    <div
      className="panelModalOverlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !busy) onCancel();
      }}
    >
      <div
        className="panelModal"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="panelModalTitle"
      >
        <h3 id="panelModalTitle">{title}</h3>
        <div className="panelModalBody">{children}</div>
        <div className="panelModalActions">
          <button
            type="button"
            ref={cancelRef}
            className="panelSecondaryBtn"
            onClick={onCancel}
            disabled={busy}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className="panelModalConfirmBtn"
            onClick={onConfirm}
            disabled={busy}
          >
            {busy ? "Usuwanie..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmModal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  busy: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

ConfirmModal.defaultProps = {
  confirmLabel: "Usuń",
  cancelLabel: "Anuluj",
  busy: false,
};

export default ConfirmModal;
