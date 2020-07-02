import React from "react";
import Nav from "../nav/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__grid">
        <Nav />
        <div className="header__grid__title">
          <h1>Zach Turner</h1>
          <span>Front End Engineer</span>
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
