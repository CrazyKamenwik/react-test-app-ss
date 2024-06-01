import React, { useCallback, useState } from "react";
import Button from "./Button";
import "../src/styles/Offer.css";
import Modal from "./Modal";

export default function Offer({ offerTitle, offerBody, backgroundImage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const _handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const _handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div
      className="offer-container"
      style={{
        backgroundImage: `linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(15, 20, 32, 0.79) 100%
        ), url(${backgroundImage})`,
      }}
    >
      <div className="offer-content">
        <span className="offer-title">{offerTitle}</span>
        <span className="offer-description">{offerBody}</span>
        <Button buttonText={"Learn more"} onPress={_handleOpenModal} />
      </div>
      {isModalOpen && (
        <Modal
          title={offerTitle}
          description={offerBody}
          onClose={_handleCloseModal}
        />
      )}
    </div>
  );
}
