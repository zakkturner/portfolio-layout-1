import React, { useRef } from "react";
import { gsap, Power3, Power1 } from "gsap";

export default function Project({ projectTitle, cat, img }) {
  let item = useRef(null);
  let title = useRef(null);
  let span = useRef(null);

  const onProjectEnter1 = () => {
    gsap.to(item, {
      duration: 0.2,
      css: { opacity: 1 },
      ease: Power3,
    });
    gsap.from([title, span], {
      duration: 0.5,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: Power3,
    });
  };

  const onProjectLeave1 = () => {
    gsap.to(item, {
      duration: 0.2,
      opacity: 0,
      css: { opacity: 0 },

      ease: Power1,
    });
  };

  return (
    <div
      className="main__grid__project-grid__item"
      onMouseEnter={onProjectEnter1}
      onMouseLeave={onProjectLeave1}
      style={{
        background: `url("${img}") no-repeat center center `,
        backgroundSize: "contain",
        backgroundColor: "#eeeeee",
      }}
    >
      <div
        className="main__grid__project-grid__item__overlay"
        ref={(el) => {
          item = el;
        }}
      >
        <div className="main__grid__project-grid__item__overlay--container">
          <h3
            ref={(el) => {
              title = el;
            }}
          >
            {projectTitle}
          </h3>
          <span
            ref={(el) => {
              span = el;
            }}
          >
            {cat}
          </span>
        </div>
      </div>
    </div>
  );
}
