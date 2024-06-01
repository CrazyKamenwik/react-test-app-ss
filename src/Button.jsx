import React from "react";
import "../src/styles/Button.css";

export default function Button({ buttonText, buttonType, onPress }) {
  return (
    <button
      onClick={onPress}
      className={`button ${
        buttonType === "banner" ? "button--banner" : "button--default"
      }`}
    >
      {buttonText}
    </button>
  );
}
