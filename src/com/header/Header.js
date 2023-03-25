import React from "react";
import Nav from "../nav/Nav";

import "./Header.scss";
import HeroScene from "./hero-scene/HeroScene";

export default function Header({
  title,
  subTitle,
  background,
  txtStyle,
  menuState,
  setMenuState,
}) {
  return (
    <header>
      <Nav
        txtStyle={txtStyle}
        menuState={menuState}
        setMenuState={setMenuState}
      />

      <HeroScene />
    </header>
  );
}
