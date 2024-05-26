import React, { useState } from "react";
import planetIcon from "../src/images/Planet-icon.svg";
import labelIcon from "../src/images/Page-label.svg";
import basketIcon from "../src/images/basket-icon.svg";
import burgerMenuIcon from "../src/images/burger-menu-button.svg";
import closeMenuIcon from "../src/images/close-menu-button.svg";
import styles from "../src/Header.module.css";
import useIsSmallScreen from "./hooks/useIsSmallScreen";

const UnwrappedLinks = () => {
  return (
    <div className={`menu-links ${styles.menuLinks}`}>
      <a className={`${styles.headerLink}`} href="#">
        Home
      </a>
      <a className={`${styles.headerLink}`} href="#">
        Products
      </a>
      <a className={`${styles.headerLink}`} href="#">
        <svg width="25" height="25" style={{ marginLeft: "5px" }}>
          <image
            width="24"
            height="27"
            href={basketIcon}
            className={`${styles.headerLink}`}
          ></image>
        </svg>
      </a>
    </div>
  );
};

const BurgerMenu = ({ isOpen, toggleMenu }) => (
  <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
    <div className="logo">
      <svg width="50" height="50">
        <image width="50" height="50" href={planetIcon}></image>
      </svg>
      <svg width="100" height="65" style={{ marginLeft: "5px" }}>
        <image width="100" height="80" href={labelIcon}></image>
      </svg>
    </div>

    <div className={styles.menuContent}>
      <a className={styles.burgerLink} href="#">
        Home
      </a>
      <a className={styles.burgerLink} href="#">
        Products
      </a>
      <a className={styles.burgerLink} href="#">
        Basket
        <svg width="5vh" height="5vh" style={{ marginLeft: "5px" }}>
          <image
            width="5vh"
            height="5vh"
            href={basketIcon}
            className={`${styles.headerLink}`}
          />
        </svg>
      </a>

      <div className={`additional-links ${styles.additionalLinksContainer}`}>
        <a className={styles.additionalLink} href="#">
          Contact us
        </a>
        <a className={styles.additionalLink} href="#">
          About us
        </a>
      </div>
    </div>
    <button className={styles.closeButton} onClick={toggleMenu}>
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
    <div className={styles.header}>
      <a className={styles.companyLogo} href="#">
        <svg width="35" height="35">
          <image width="35" height="35" href={planetIcon}></image>
        </svg>
        <svg width="70" height="35">
          <image width="63" height="35" href={labelIcon}></image>
        </svg>
      </a>
      {isSmallScreen ? (
        <>
          <button className={styles.burgerMenuButton} onClick={toggleMenu}>
            <svg width="30" height="40" style={{ marginRight: "20px" }}>
              <image
                href={burgerMenuIcon}
                className={`${styles.headerLink}`}
              ></image>
            </svg>
          </button>
          <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
        </>
      ) : (
        UnwrappedLinks()
      )}
    </div>
  );
}
