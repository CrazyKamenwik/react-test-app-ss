import React from "react";
import earthImage from "../src/images/earth-and-rocket.png";
import "../src/styles/Banner.css";
import Button from "./Button";

export default function Banner() {
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
        <Button buttonText={"Learn more"} buttonType={"banner"} />
      </div>
      <img
        className="banner__earth"
        alt="Planet Earth picture"
        src={earthImage}
      ></img>
    </div>
  );
}
