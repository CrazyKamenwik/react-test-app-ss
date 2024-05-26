import React from "react";
import styles from "../src/Button.module.css";

export default function Button({ buttonText, buttonType }) {
  return (
    <button
      className={`${
        buttonType === "banner" ? styles.bannerButton : styles.button
      }`}
    >
      {buttonText}
    </button>
  );
}
