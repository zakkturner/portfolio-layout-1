import React, { useRef } from "react";
import gsap, { Power3 } from "gsap";
export default function Filter() {
  let category0 = useRef(null);

  let category1 = useRef(null);
  let category2 = useRef(null);
  let category3 = useRef(null);
  let category4 = useRef(null);

  /*************

Link animations
******************/
  const onMouseEnter0 = () => {
    gsap.to(category0, {
      duration: 0.1,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave0 = () => {
    gsap.to(category0, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };
  // link 1 hover
  const onMouseEnter = () => {
    gsap.to(category1, {
      duration: 0.1,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave = () => {
    gsap.to(category1, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };
  // link 2 hover
  const onMouseEnter2 = () => {
    gsap.to(category2, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave2 = () => {
    gsap.to(category2, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };
  // link 3 hover
  const onMouseEnter3 = () => {
    gsap.to(category3, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave3 = () => {
    gsap.to(category3, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };
  // link 4 hover
  const onMouseEnter4 = () => {
    gsap.to(category4, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave4 = () => {
    gsap.to(category4, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };

  const reactFilter = () => [];

  return (
    <ul className="main__grid__links">
      <li className="main__grid__links--item">
        <a
          href="#"
          ref={(el) => {
            category0 = el;
          }}
          onMouseEnter={onMouseEnter0}
          onMouseLeave={onMouseLeave0}
        >
          All
        </a>
      </li>
      <li className="main__grid__links--item">
        <a
          href="#"
          ref={(el) => {
            category1 = el;
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          React
        </a>
      </li>

      <li className="main__grid__links--item">
        <a
          href="#"
          ref={(el) => {
            category2 = el;
          }}
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
        >
          Vue
        </a>
      </li>
      <li className="main__grid__links--item">
        <a
          href="#"
          ref={(el) => {
            category3 = el;
          }}
          onMouseEnter={onMouseEnter3}
          onMouseLeave={onMouseLeave3}
        >
          CMS Sites
        </a>
      </li>
      <li className="main__grid__links--item">
        <a
          href="#"
          ref={(el) => {
            category4 = el;
          }}
          onMouseEnter={onMouseEnter4}
          onMouseLeave={onMouseLeave4}
        >
          Animation
        </a>
      </li>
    </ul>
  );
}
