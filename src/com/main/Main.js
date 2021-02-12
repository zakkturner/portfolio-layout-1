import React, { useRef, useState, useEffect } from "react";

import Header from "../header/Header";
import Project from "../atoms/Project/MainProject";
import Filter from "../filter/Filter";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    console.log(state.filtered);
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
    } 
    
    else {
      return item;
    }
  });

  const loopProjects = (filteredProjects) => {
    console.log(filteredProjects);
    return filteredProjects.map((project, i) => {
      return (
        <>
          <Route
            path={filteredProjects.path}
            render={() => <Project project={project[i]} />}
            exact
          >
            <Link to={filteredProjects[i].path}>
              <Project
                projectTitle={filteredProjects[i].title}
                cat={filteredProjects[i].categories}
                img={filteredProjects[i].img1}
              />
            </Link>
          </Route>
        </>
      );
    });
  };

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
        <div className="main__grid">
          <Filter state={state} setState={setState} />
          <div className="main__grid__project-grid">
            <Route>{loopProjects(filteredProjects)}</Route>
          </div>
        </div>
      </main>
    </>
  );
}
