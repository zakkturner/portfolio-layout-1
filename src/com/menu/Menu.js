import React, { useRef, useEffect, useContext } from "react";
import CustomLink from "../atoms/CustomLink/CustomLink";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Menu.scss";
import gsap, { Power3 } from "gsap/gsap-core";
import { ModalContext, ModalDispatchContext } from "../../context/ModalContext";

// const modalActive = useContext(ModalContext);

export default function Menu({ menuState, setMenuState }) {
  let menu = useRef(null);
  const dispatch = useContext(ModalDispatchContext);

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
  const openModal = () => {
    dispatch({
      type: "opened",
    });
    handleClose();
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
            <HashLink to="#top" onClick={handleClose}>
              <CustomLink txtStyle="light" name="Home" />
            </HashLink>
          </li>
          <li className="menu__container__links_item">
            <HashLink to="/#portfolio" onClick={handleClose}>
              <CustomLink txtStyle="light" name="Portfolio" />
            </HashLink>
          </li>
          <li className="menu__container__links_item">
            <HashLink to="#about">
              <CustomLink txtStyle="light" name="About" />
            </HashLink>
          </li>
          <li className="menu__container__links_item">
            <button className="text-white" onClick={openModal}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
