import React from "react";
import CustomLink from "../atoms/CustomLink/CustomLink";
import { Link } from "react-router-dom";
import "./Menu.scss";

export default function Menu() {
  return (
    <section className="menu">
      <div className="menu__exit">
        <button className="menu__exit_close">X</button>
      </div>
      <div className="menu__container">
        <ul className="menu__container__links">
          <li className="menu__container__links_item">
            <Link to="/">
              <CustomLink txtStyle="light" name="Home" />
            </Link>
          </li>
          <li className="menu__container__links_item">
            <Link to="/portfolio">
              <CustomLink txtStyle="light" name="Portfolio" />
            </Link>
          </li>
          <li className="menu__container__links_item">
            <Link to="/contact">
              <CustomLink txtStyle="light" name="Contact" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
