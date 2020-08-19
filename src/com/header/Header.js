import React from "react";
import Nav from "../nav/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

export default function Header({
  title,
  subTitle,
  background,
  txtStyle,
  menuState,
  setMenuState,
}) {
  return (
    <header
      className="header"
      style={{ backgroundImage: "url(" + background + ")" }}
    >
      <div
        className="header__grid"
        style={txtStyle === "light" ? { color: "#FFF" } : { color: "#191a1d" }}
      >
        <Nav
          txtStyle={txtStyle}
          menuState={menuState}
          setMenuState={setMenuState}
        />
        <div className="header__grid__title">
          <h1>{title}</h1>
          <span>{subTitle}</span>
        </div>
        <div className="header__grid__arrow">
          <a href="#">
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>
      </div>
    </header>
  );
}
