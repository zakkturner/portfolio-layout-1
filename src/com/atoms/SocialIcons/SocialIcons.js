import React, { useRef } from "react";

import "./SocialIcons";

import { gsap, Power3 } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons({ fa, txtStyle }) {
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
    <a
      href="https://www.linkedin.com/in/zachary-t-1aa273165/"
      ref={(el) => {
        link = el;
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={txtStyle === "light" ? { color: "#FFF" } : { color: "#191a1d" }}
    >
      <FontAwesomeIcon icon={fa} txtStyle="light" />
    </a>
  );
}
