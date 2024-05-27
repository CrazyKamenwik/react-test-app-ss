import React from "react";
import rocket from "../src/images/rocket.svg";
import "../src/styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <svg width="100" height="70">
        <image width="100" height="90" href={rocket}></image>
      </svg>
      <span className="footer__text">Exciting space adventure!</span>
    </div>
  );
}
