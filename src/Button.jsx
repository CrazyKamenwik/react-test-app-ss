import React from "react";
import "../src/styles/Button.css";

export default function Button({ buttonText, buttonType }) {
  return (
    <button
      className={`button ${
        buttonType === "banner" ? "button--banner" : "button--default"
      }`}
    >
      {buttonText}
    </button>
  );
}
