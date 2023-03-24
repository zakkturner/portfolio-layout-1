import React from "react";

import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__grid__about">
          <h6 className="footer__grid__about-title">About</h6>
          <address className="footer__grid__about-address">Atlanta, GA</address>
          <div className="footer__grid__about__contact">
            <p className="footer__grid__about_contact-phone">404-482-3287</p>
            <a href="mailto:zakkturner1993.com">zakkturner1993@gmail.com</a>
          </div>
        </div>

        <div className="footer__grid__quick">
          <h6 className="footer__grid__quick-title">Quick Links</h6>
          <ul className="footer__grid__quick-links">
            <li>
              <a href="/#top">Home</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a href="/#portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright__container">
          <p className="footer__copyright__container-text">
            © Copyright 2023. All rights reserved.
          </p>
          <ul className="footer__copyright__container-socials">
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
        </div>
      </div>
    </footer>
  );
}
