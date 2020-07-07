import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { gsap, Power3 } from "gsap";

import "./Nav.scss";

export default function Nav({ txtStyle }) {
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let link4 = useRef(null);
  let link5 = useRef(null);
  let link6 = useRef(null);

  // link 1 hover
  const onMouseEnter = () => {
    gsap.to(link1, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave = () => {
    if (txtStyle === "light") {
      gsap.to(link1, {
        duration: 0.4,
        css: { color: "#FFF" },
        ease: Power3,
      });
    } else {
      gsap.to(link1, {
        duration: 0.4,
        css: { color: "#191a1d" },
        ease: Power3,
      });
    }
  };
  // link 2 hover
  const onMouseEnter2 = () => {
    gsap.to(link2, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave2 = () => {
    if (txtStyle === "light") {
      gsap.to(link2, {
        duration: 0.4,
        css: { color: "#FFF" },
        ease: Power3,
      });
    } else {
      gsap.to(link2, {
        duration: 0.4,
        css: { color: "#191a1d" },
        ease: Power3,
      });
    }
  };
  // link 3 hover
  const onMouseEnter3 = () => {
    gsap.to(link3, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave3 = () => {
    if (txtStyle === "light") {
      gsap.to(link3, {
        duration: 0.4,
        css: { color: "#FFF" },
        ease: Power3,
      });
    } else {
      gsap.to(link3, {
        duration: 0.4,
        css: { color: "#191a1d" },
        ease: Power3,
      });
    }
  };
  // link 4 hover
  const onMouseEnter4 = () => {
    gsap.to(link4, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave4 = () => {
    if (txtStyle === "light") {
      gsap.to(link4, {
        duration: 0.4,
        css: { color: "#FFF" },
        ease: Power3,
      });
    } else {
      gsap.to(link4, {
        duration: 0.4,
        css: { color: "#191a1d" },
        ease: Power3,
      });
    }
  };
  // link 5 hover
  const onMouseEnter5 = () => {
    gsap.to(link5, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave5 = () => {
    if (txtStyle === "light") {
      gsap.to(link5, {
        duration: 0.4,
        css: { color: "#FFF" },
        ease: Power3,
      });
    } else {
      gsap.to(link5, {
        duration: 0.4,
        css: { color: "#191a1d" },
        ease: Power3,
      });
    }
  };
  // link 6 hover
  const onMouseEnter6 = () => {
    gsap.to(link6, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave6 = () => {
    if (txtStyle === "light") {
      gsap.to(link6, {
        duration: 0.4,
        css: { color: "#FFF" },
        ease: Power3,
      });
    } else {
      gsap.to(link6, {
        duration: 0.4,
        css: { color: "#191a1d" },
        ease: Power3,
      });
    }
  };

  return (
    <nav className="nav">
      <div className="nav__grid">
        <h3 className="nav__grid__logo">ZT</h3>
        <div className="nav__grid__hamburgercontainer">
          <div className="nav__grid__hamburgercontainer__hamburger">
            <a>
              <div className="nav__grid__hamburgercontainer__hamburger--inner"></div>
            </a>
          </div>
        </div>
        <ul className="nav__grid__links">
          <li>
            <a
              href="#"
              className="nav__grid__links-item"
              ref={(el) => {
                link1 = el;
              }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              style={
                txtStyle === "light" ? { color: "#FFF" } : { color: "#191a1d" }
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav__grid__links-item"
              ref={(el) => {
                link2 = el;
              }}
              onMouseEnter={onMouseEnter2}
              onMouseLeave={onMouseLeave2}
              style={
                txtStyle === "light" ? { color: "#FFF" } : { color: "#191a1d" }
              }
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav__grid__links-item"
              ref={(el) => {
                link3 = el;
              }}
              onMouseEnter={onMouseEnter3}
              onMouseLeave={onMouseLeave3}
              style={
                txtStyle === "light" ? { color: "#FFF" } : { color: "#191a1d" }
              }
            >
              Contact
            </a>
          </li>
          <li>
            <ul className="nav__grid__links-socials">
              <li>
                <a
                  href="https://www.linkedin.com/in/zachary-t-1aa273165/"
                  ref={(el) => {
                    link4 = el;
                  }}
                  onMouseEnter={onMouseEnter4}
                  onMouseLeave={onMouseLeave4}
                  style={
                    txtStyle === "light"
                      ? { color: "#FFF" }
                      : { color: "#191a1d" }
                  }
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zachary-t-1aa273165/"
                  ref={(el) => {
                    link5 = el;
                  }}
                  onMouseEnter={onMouseEnter5}
                  onMouseLeave={onMouseLeave5}
                  style={
                    txtStyle === "light"
                      ? { color: "#FFF" }
                      : { color: "#191a1d" }
                  }
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zachary-t-1aa273165/"
                  ref={(el) => {
                    link6 = el;
                  }}
                  onMouseEnter={onMouseEnter6}
                  onMouseLeave={onMouseLeave6}
                  style={
                    txtStyle === "light"
                      ? { color: "#FFF" }
                      : { color: "#191a1d" }
                  }
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
