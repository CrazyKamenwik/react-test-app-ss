import React from "react";
import rocket from "../src/images/rocket.svg";
import styles from "../src/Footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <svg width="100" height="70">
        <image width="100" height="90" href={rocket}></image>
      </svg>
      <span className={`${styles.footerText}`}>Exciting space adventure!</span>
    </div>
  );
}
