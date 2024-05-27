import React, { useState } from "react";
import planetIcon from "../src/images/Planet-icon.svg";
import labelIcon from "../src/images/Page-label.svg";
import basketIcon from "../src/images/basket-icon.svg";
import burgerMenuIcon from "../src/images/burger-menu-button.svg";
import closeMenuIcon from "../src/images/close-menu-button.svg";
import "../src/styles/Header.css";
import useIsSmallScreen from "./hooks/useIsSmallScreen";

const UnwrappedLinks = () => {
  return (
    <div className="header__menu-links">
      <a className="header__link" href="#">
        Home
      </a>
      <a className="header__link" href="#">
        Products
      </a>
      <a className="header__link" href="#">
        <svg width="25" height="25" style={{ marginLeft: "5px" }}>
          <image
            width="24"
            height="27"
            href={basketIcon}
            className="header__link"
          ></image>
        </svg>
      </a>
    </div>
  );
};

const BurgerMenu = ({ isOpen, toggleMenu }) => (
  <div
    className={`header__burger-menu ${
      isOpen ? "header__burger-menu--open" : ""
    }`}
  >
    <div className="header__logo">
      <svg width="60" height="90">
        <image width="60" height="80" href={planetIcon}></image>
      </svg>
      <svg width="100" height="65" style={{ marginLeft: "5px" }}>
        <image width="100" height="80" href={labelIcon}></image>
      </svg>
    </div>

    <div className="header__menu-content">
      <a className="header__burger-link" href="#">
        Home
      </a>
      <a className="header__burger-link" href="#">
        Products
      </a>
      <a className="header__burger-link" href="#">
        Basket
        <svg width="5vh" height="5vh" style={{ marginLeft: "5px" }}>
          <image
            width="5vh"
            height="5vh"
            href={basketIcon}
            className="header__link"
          />
        </svg>
      </a>

      <div className="header__additional-links-container">
        <a className="header__additional-link" href="#">
          Contact us
        </a>
        <a className="header__additional-link" href="#">
          About us
        </a>
      </div>
    </div>
    <button className="header__close-button" onClick={toggleMenu}>
      <svg width="40" height="40">
        <image href={closeMenuIcon}></image>
      </svg>
    </button>
  </div>
);

export default function Header() {
  const isSmallScreen = useIsSmallScreen();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <a className="header__logo" href="#">
        <svg
          width={isSmallScreen ? "24" : "35"}
          height={isSmallScreen ? "24" : "35"}
        >
          <image
            width={isSmallScreen ? "24" : "35"}
            height={isSmallScreen ? "24" : "35"}
            href={planetIcon}
          ></image>
        </svg>
        <svg
          width={isSmallScreen ? "40" : "70"}
          height={isSmallScreen ? "25" : "35"}
        >
          <image
            width={isSmallScreen ? "40" : "63"}
            height={isSmallScreen ? "25" : "35"}
            href={labelIcon}
          ></image>
        </svg>
      </a>
      {isSmallScreen ? (
        <>
          <button className="header__burger-menu-button" onClick={toggleMenu}>
            <svg width="30" height="40" style={{ marginRight: "20px" }}>
              <image href={burgerMenuIcon} className="header__link"></image>
            </svg>
          </button>
          <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
        </>
      ) : (
        <UnwrappedLinks />
      )}
    </div>
  );
}
