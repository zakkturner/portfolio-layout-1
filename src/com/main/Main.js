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
    } else {
      return item;
    }
  });

  useEffect(() => {
    console.log(filteredProjects);
  }, [state.filtered]);

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
        <div className="w-1/2 mx-auto">
          <h2 className="text-4xl font-bold mt-10">Projects.</h2>
        </div>
        <div className="main__grid">
          <Filter state={state} setState={setState} />
          {/* <div className="main__grid__project-grid">
            <Route>{loopProjects(filteredProjects)}</Route>
          </div> */}
        </div>

        <div className="grid grid-cols-2 w-1/2 my-10 mx-auto gap-4">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-blue-500 h-80 rounded-md shadow-project flex items-end"
                style={{
                  background: `url("${project.img1}") no-repeat center center/cover`,
                }}
              >
                <div className="bg-opacity-80 bg-black p-6 w-full">
                  <h4 className="text-white text-bolder text-2xl">
                    {project.title}
                  </h4>
                  <p className="text-white mb-2">
                    lorem ipsum dolor sit amet, consect
                  </p>
                  <p></p>
                  <div className="flex">
                    <span className="bg-portfolio-blue text-white text-sm mr-2 rounded-full py-1 px-2 text-xs">
                      React
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
