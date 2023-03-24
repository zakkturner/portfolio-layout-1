import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import CustomLink from "../atoms/CustomLink/CustomLink";
import SocialIcons from "../atoms/SocialIcons/SocialIcons";

import "./Nav.scss";

import { HashLink } from "react-router-hash-link";

export default function Nav({ txtStyle, menuState, setMenuState }) {
  const handleClick = () => {
    setMenuState({
      active: true,
    });
    console.log(menuState.active);
  };
  return (
    <nav className="nav fixed z-50">
      <div className="nav__grid">
        <h3 className="nav__grid__logo">ZT</h3>
        <div className="nav__grid__hamburgercontainer">
          <div className="nav__grid__hamburgercontainer__hamburger">
            <button onClick={handleClick}>
              <div className="nav__grid__hamburgercontainer__hamburger--inner"></div>
            </button>
          </div>
        </div>
        <ul className="nav__grid__links">
          <li>
            <HashLink key="/" to="#top">
              <CustomLink txtStyle="light" name="Home" />
            </HashLink>
          </li>
          <li>
            <HashLink key="#portfolio" to="/#portfolio">
              <CustomLink txtStyle="light" name="Portfolio" />
            </HashLink>
          </li>
          <li>
            <HashLink to="#about">
              <CustomLink txtStyle="light" name="About" />
            </HashLink>
          </li>
          <li>
            <ul className="nav__grid__links-socials">
              <li>
                <SocialIcons
                  fa={faLinkedin}
                  url="https://www.linkedin.com/in/zachary-t-1aa273165/"
                  txtStyle="light"
                />
              </li>

              <li>
                <SocialIcons
                  fa={faGithub}
                  url="https://github.com/zakkturner"
                  txtStyle="light"
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
