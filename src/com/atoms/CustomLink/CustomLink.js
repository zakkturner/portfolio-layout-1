import React, { useRef } from "react";

import "./CustomLink.scss";

import { gsap, Power3 } from "gsap";

export default function CustomLink({ txtStyle, name }) {
  let link = useRef(null);

  const onMouseEnter = () => {
    gsap.to(link, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave = () => {
    if (txtStyle === "light") {
      gsap.to(link, {
        duration: 0.4,
        css: { color: "#FFF" },
        ease: Power3,
      });
    } else {
      gsap.to(link, {
        duration: 0.4,
        css: { color: "#191a1d" },
        ease: Power3,
      });
    }
  };
  return (
    <button
      className="nav__grid__links-item"
      ref={(el) => {
        link = el;
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={txtStyle === "light" ? { color: "#FFF" } : { color: "#191a1d" }}
    >
      {name === "" ? "" : name}
    </button>
  );
}
