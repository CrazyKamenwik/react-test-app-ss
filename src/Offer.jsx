import React from "react";
import Button from "./Button";
import styles from "../src/Offer.module.css";

export default function Offer({ offerTitle, offerBody, backgroundImage }) {
  return (
    <div
      className={`offer-container ${styles.offerContainer}`}
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(15, 20, 32, 0.79) 100%
      ), url(${backgroundImage})`,
      }}
    >
      <div className={`offer-content ${styles.offerContent}`}>
        <span className={styles.offerTitle}>{offerTitle}</span>
        <span className={styles.offerDescription}>{offerBody}</span>
        <Button buttonText={"Learn more"} />
      </div>
    </div>
  );
}
