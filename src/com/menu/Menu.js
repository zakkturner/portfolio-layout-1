import React, { useRef, useEffect } from "react";
import CustomLink from "../atoms/CustomLink/CustomLink";
import { Link } from "react-router-dom";
import "./Menu.scss";
import gsap, { Power3 } from "gsap/gsap-core";

export default function Menu({ menuState }) {
  let menu = useRef(null);

  useEffect(() => {
    if (menuState.active === true) {
      gsap.to(menu, {
        duration: 0.8,
        css: { transform: " translate(0, 0)" },
        ease: Power3,
      });
    }
  });
  return (
    <section
      className="menu"
      ref={(el) => {
        menu = el;
      }}
    >
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
