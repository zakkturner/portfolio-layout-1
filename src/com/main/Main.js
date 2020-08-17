import React, { useRef, useState, useEffect } from "react";
import { gsap, Power3, Power1 } from "gsap";
import Header from "../header/Header";
import Project from "../atoms/Project/MainProject";
import Filter from "../filter/Filter";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import projectData from "../../data/projectData";

import "./Main.scss";

export default function Main() {
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
    } else {
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
      <Header
        title="Zach Turner"
        subTitle="Front End Engineer"
        background="https://neuronthemes.com/dendrite/wp-content/uploads/page-header.jpg"
        id="top"
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
