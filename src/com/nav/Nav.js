import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Nav.scss";

export default function Nav() {
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
            <a href="#" className="nav__grid__links-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav__grid__links-item">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="nav__grid__links-item">
              Contact
            </a>
          </li>
          <li>
            <ul className="nav__grid__links-socials">
              <li>
                <a href="https://www.linkedin.com/in/zachary-t-1aa273165/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zachary-t-1aa273165/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zachary-t-1aa273165/">
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
