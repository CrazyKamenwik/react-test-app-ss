import React from "react";
import earthImage from "../src/images/earth-and-rocket.png";
import styles from "../src/Banner.module.css";
import Button from "./Button";

export default function Banner() {
  return (
    <div className={`${styles.banner}`}>
      <div className={`${styles.bannerContent}`}>
        <h1 className={`${styles.contentHeader}`}>
          Discover the vast expanses of
          <span className={styles.highlightSpace}> space</span>
        </h1>
        <span className={`${styles.content}`}>
          Where the possibilities are
          <span className={styles.highlightEndless}> endless!</span>
        </span>
        <Button buttonText={"Learn more"} buttonType={"banner"} />
      </div>
      <img
        className={styles.earth}
        width="320"
        height="360"
        alt="Planet Earth picture"
        src={earthImage}
      ></img>
    </div>
  );
}
