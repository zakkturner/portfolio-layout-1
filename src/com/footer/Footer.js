import React from "react";

import "./Footer.scss";
import SocialIconList from "../atoms/SocialIcons/SocialIconList";

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
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright__container flex justify-between items-center  flex-col lg:flex-row">
          <p className="footer__copyright__container-text">
            © Copyright 2023. All rights reserved.
          </p>
          <SocialIconList />
        </div>
      </div>
    </footer>
  );
}
