import React, { useState } from "react";

import Header from "../header/Header";

import Menu from "../menu/Menu";

import projectData from "../../data/projectData";

import "./Main.scss";
import ContactBtn from "../contact/ContactBtn";
import ContactModal from "../contact/ContactModal";
import About from "../about/About";
import Projects from "../project/Projects";
import Preloader from "../loading/Preloader";

export default function Main({ menuState, setMenuState }) {
  const [state, setState] = useState({
    filtered: "All",
  });

  /*************
Loop projects
******************/

  const filteredProjects = projectData.filter((item) => {
    if (state.filtered === "React") {
      return item.React === true;
    } else if (state.filtered === "Vue") {
      return item.Vue === true;
    } else if (state.filtered === "CMS") {
      return item.CMS === true;
    } else if (state.filtered === "Javascript") {
      return item.Javascript === true;
    } else if (state.filtered === "Shopify") {
      return item.Shopify === true;
    } else if (state.filtered === "Laravel") {
      return item.Laravel === true;
    } else if (state.filtered === "PHP") {
      return item.PHP === true;
    } else {
      return item;
    }
  });

  return (
    <>
      <Preloader />
      <Menu menuState={menuState} setMenuState={setMenuState} />
      <Header
        title="Zach Turner"
        subTitle="Front End Engineer"
        background="https://neuronthemes.com/dendrite/wp-content/uploads/page-header.jpg"
        menuState={menuState}
        setMenuState={setMenuState}
      />
      <main className="main">
        <About />
        <Projects
          state={state}
          setState={setState}
          filteredProjects={filteredProjects}
        />
        <ContactModal />
        <ContactBtn />
      </main>
    </>
  );
}
