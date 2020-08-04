import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { gsap, Power3 } from "gsap";

import CustomLink from "../atoms/CustomLink/CustomLink";
import SocialIcons from "../atoms/SocialIcons/SocialIcons";

import "./Nav.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { HashLink } from "react-router-hash-link";

export default function Nav({ txtStyle }) {
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
            <Link to="/">
              <CustomLink txtStyle="light" name="Home" />
            </Link>
          </li>
          <li>
            <HashLink key="#portfolio" to="/#portfolio">
              <CustomLink txtStyle="light" name="Portfolio" />
            </HashLink>
          </li>
          <li>
            <Link to="/contact">
              <CustomLink txtStyle="light" name="Contact" />
            </Link>
          </li>
          <li>
            <ul className="nav__grid__links-socials">
              <li>
                <SocialIcons fa={faLinkedin} txtStyle="light" />
              </li>
              <li>
                <SocialIcons fa={faTwitter} txtStyle="light" />
              </li>
              <li>
                <SocialIcons fa={faGithub} txtStyle="light" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
