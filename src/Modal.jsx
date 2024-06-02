import React from "react";
import "../src/styles/Modal.css";
import Button from "./Button";

export default function Modal({ onClose, title, description }) {
  const _handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal__overlay" onClick={_handleOverlayClick}>
      <div className="modal__content">
        <div className="modal__content-title">{title}</div>
        <div className="modal__content-description">{description}</div>
        <Button buttonText={"Got it!"} onPress={onClose} />
      </div>
    </div>
  );
}
