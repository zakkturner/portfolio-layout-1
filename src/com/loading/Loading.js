import React, { useRef, useEffect } from "react";
import "./Loading.scss";
import gsap, { Linear, Power4, Power2 } from "gsap";

export default function Loading() {
  let background = useRef(null);
  let loader = useRef(null);
  let name = useRef(null);
  let container = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      container,
      { duration: 0.6, top: "100%", bottom: 0 },
      { top: 0, delay: 1, ease: Power4.easeInOut }
    );

    gsap.fromTo(
      name,
      { duration: 0.5, y: 40, opacity: 0, delay: 0.5 },
      { y: 0, opacity: 1, delay: 1.5, ease: Power2.easeOut }
    );
    gsap.fromTo(
      loader,
      { duration: 0.5, y: 40, opacity: 0, delay: 0.5 },
      { y: 0, opacity: 1, delay: 1.8, ease: Power2.easeOut }
    );
    gsap.to(loader, {
      duration: 2,
      rotation: "+=360",
      repeat: -1,
      ease: Linear.easeNone,
      transformOrigin: "50% 50%",
    });
    gsap.to(container, {
      duration: 0.6,
      top: "100%",
      ease: Power4.easeInOut,
      delay: 6.5,
    });
    gsap.to(name, {
      duration: 0.2,
      y: 40,
      opacity: 0,

      delay: 6,
    });

    gsap.to(loader, {
      duration: 0.2,
      y: 40,
      opacity: 0,

      delay: 5.9,
    });

    gsap.to(background, {
      duration: 0.8,
      delay: 6.9,
      //   y: "-100%",
      opacity: 0,
      ease: Power4.easeInOut,
    });
    gsap.to(background, {
      duration: 0.1,
      delay: 10,
      css: { display: "none" },
      ease: Power4.easeInOut,
    });
  });

  return (
    <section
      className="loading"
      ref={(el) => {
        background = el;
      }}
    >
      <div
        className="loading__container"
        ref={(el) => {
          container = el;
        }}
      >
        <div className="loading__container__inner">
          <h1
            ref={(el) => {
              name = el;
            }}
          >
            Welcome
          </h1>

          <div
            className="loading__container__inner_loader"
            ref={(el) => {
              loader = el;
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
