import React, { useState } from "react";

import Header from "../header/Header";
import Project from "../project/Project";
import Filter from "../filter/Filter";
import Menu from "../menu/Menu";

import projectData from "../../data/projectData";

import "./Main.scss";

export default function Main({ menuState, setMenuState }) {
  const [state, setState] = useState({
    filtered: "All",
  });

  /*************
Loop projects
******************/

  const filteredProjects = projectData.filter((item) => {
    if (state.filtered == "React") {
      return item.React == true;
    } else if (state.filtered == "Vue") {
      return item.Vue == true;
    } else if (state.filtered == "CMS") {
      return item.CMS == true;
    } else if (state.filtered == "Javascript") {
      return item.Javascript == true;
    } else if (state.filtered == "Shopify") {
      return item.Shopify == true;
    } else if (state.filtered == "Laravel") {
      return item.Laravel == true;
    } else if (state.filtered == "PHP") {
      return item.PHP == true;
    } else {
      return item;
    }
  });

  return (
    <>
      <Menu menuState={menuState} setMenuState={setMenuState} />
      <Header
        title="Zach Turner"
        subTitle="Front End Engineer"
        background="https://neuronthemes.com/dendrite/wp-content/uploads/page-header.jpg"
        id="top"
        menuState={menuState}
        setMenuState={setMenuState}
      />
      <main className="main" id="portfolio">
        <div className="w-1/2 mx-auto">
          <h2 className="text-4xl font-bold mt-10">Projects.</h2>
        </div>
        <div className="main__grid">
          <Filter state={state} setState={setState} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 lg:w-1/2 my-10 mx-auto gap-4">
          {filteredProjects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </main>
    </>
  );
}
