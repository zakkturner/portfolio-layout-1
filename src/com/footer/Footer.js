import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__grid__about">
          <h4 className="footer__grid__about-title">About</h4>
          <address className="footer__grid__about-address">
            Smyrna, GA 30080
          </address>
          <div className="footer__grid__about__contact">
            <p className="footer__grid__about_contact-phone">706-622-8353</p>
            <a href="#">zakkturner1993@gmail.com</a>
          </div>
        </div>
        <div className="footer__grid__recent">
          <h4 className="footer__grid__recent-title">Recent Projects</h4>
          <ul className="footer__grid__recent-projects">
            <li>
              <a href="#">Responsive Portfolio Layout</a>
              <span>7/20</span>
            </li>
            <li>
              <a href="#">Interactive Nerd</a>
              <span>6/20</span>
            </li>
            <li>
              <a href="#">Responsive Sign Up</a>
              <span>5/20</span>
            </li>
          </ul>
        </div>
        <div className="footer__grid__quick">
          <h4 className="footer__grid__quick-title">Quick Links</h4>
          <ul className="footer__grid__quick-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
