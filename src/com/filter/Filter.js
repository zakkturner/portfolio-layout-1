import React, { useRef } from "react";
import gsap, { Power3 } from "gsap";

export default function Filter({ setState, state }) {
  let category0 = useRef(null);

  let category1 = useRef(null);
  let category2 = useRef(null);
  let category3 = useRef(null);
  let category4 = useRef(null);
  let category5 = useRef(null);

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

  const onMouseEnter5 = () => {
    gsap.to(category5, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave5 = () => {
    gsap.to(category5, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };
  const handleClick = (e) => {
    let type = e.target.id;
    console.log(type);
    setState({
      filtered: type,
    });
  };

  return (
    <ul className="main__grid__links">
      <li className="main__grid__links--item">
        <a
          ref={(el) => {
            category0 = el;
          }}
          onMouseEnter={onMouseEnter0}
          onMouseLeave={onMouseLeave0}
          onClick={handleClick}
          id="All"
        >
          All
        </a>
      </li>
      <li className="main__grid__links--item">
        <a
          ref={(el) => {
            category1 = el;
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={handleClick}
          id="React"
        >
          React
        </a>
      </li>

      <li className="main__grid__links--item">
        <a
          ref={(el) => {
            category2 = el;
          }}
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          id="Vue"
          onClick={handleClick}
        >
          Vue
        </a>
      </li>
      <li className="main__grid__links--item">
        <a
          ref={(el) => {
            category3 = el;
          }}
          onMouseEnter={onMouseEnter3}
          onMouseLeave={onMouseLeave3}
          id="Shopify"
          onClick={handleClick}
        >
          Shopify
        </a>
      </li>
      <li className="main__grid__links--item">
        <a
          ref={(el) => {
            category4 = el;
          }}
          onMouseEnter={onMouseEnter4}
          onMouseLeave={onMouseLeave4}
          id="Javascript"
          onClick={handleClick}
        >
          Vanilla Javascript
        </a>
      </li>
      <li className="main__grid__links--item">
        <a
          ref={(el) => {
            category5 = el;
          }}
          onMouseEnter={onMouseEnter5}
          onMouseLeave={onMouseLeave5}
          id="Laravel"
          onClick={handleClick}
        >
          Laravel
        </a>
      </li>
    </ul>
  );
}
