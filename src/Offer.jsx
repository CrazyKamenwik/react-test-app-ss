import React from "react";
import Button from "./Button";
import "../src/styles/Offer.css";

export default function Offer({ offerTitle, offerBody, backgroundImage }) {
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
        <Button buttonText={"Learn more"} />
      </div>
    </div>
  );
}
