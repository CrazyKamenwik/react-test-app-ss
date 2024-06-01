import React, { useCallback, useState } from "react";
import earthImage from "../src/images/earth-and-rocket.png";
import "../src/styles/Banner.css";
import Button from "./Button";
import Modal from "./Modal";

export default function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const _handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const _handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__content-header">
          Discover the vast expanses of
          <span className="banner__highlight--space"> space</span>
        </h1>
        <span className="banner__content-text">
          Where the possibilities are
          <span className="banner__highlight--endless"> endless!</span>
        </span>
        <Button
          buttonText={"Learn more"}
          buttonType={"banner"}
          onPress={_handleOpenModal}
        />
      </div>
      <img className="banner__earth" src={earthImage}></img>
      {isModalOpen && (
        <Modal
          title="Discover the vast expanses of space WITH US!"
          description={`Let's explore space together! Join our space mission to Mars, Venus and Neptune! 👨‍🚀 👩‍🚀 🚀 👾`}
          onClose={_handleCloseModal}
        />
      )}
    </div>
  );
}
