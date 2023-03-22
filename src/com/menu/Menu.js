import React, { useRef, useEffect } from "react";
import CustomLink from "../atoms/CustomLink/CustomLink";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Menu.scss";
import gsap, { Power3 } from "gsap/gsap-core";

export default function Menu({ menuState, setMenuState }) {
  let menu = useRef(null);

  useEffect(() => {
    if (menuState.active === true) {
      gsap.to(menu, {
        duration: 0.8,
        css: { transform: " translateX(0)" },
        ease: Power3,
      });
    } else if (menuState.active === false) {
      gsap.to(menu, {
        duration: 0.8,
        x: "100%",
        ease: Power3,
      });
    }
  });

  const handleClose = () => {
    setMenuState({
      active: false,
    });
    console.log(menuState.active);
  };

  return (
    <section
      className="menu"
      ref={(el) => {
        menu = el;
      }}
    >
      <div className="menu__exit">
        <button className="menu__exit_close" onClick={handleClose}>
          X
        </button>
      </div>
      <div className="menu__container">
        <ul className="menu__container__links">
          <li className="menu__container__links_item">
            <Link to="/" onClick={handleClose}>
              <CustomLink txtStyle="light" name="Home" />
            </Link>
          </li>
          <li className="menu__container__links_item">
            <HashLink to="/#portfolio" onClick={handleClose}>
              <CustomLink txtStyle="light" name="Portfolio" />
            </HashLink>
          </li>
          <li className="menu__container__links_item">
            <Link to="/contact" onClick={handleClose}>
              <CustomLink txtStyle="light" name="Contact" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
