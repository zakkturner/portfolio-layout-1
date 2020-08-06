import React from "react";
import Header from "../../com/header/Header";

import "./Project.scss";

export default function Project({ project }) {
  return (
    <>
      <Header
        title={project.title}
        subTitle={project.categories}
        background={project.background}
        txtStyle="light"
      />
      <section className="project">
        <div className="project__grid">
          <div className="project__grid__details">
            <h3 className="project__grid__details__title">{project.title}</h3>
            <p className="project__grid__details__paragraph">
              {project.description}
            </p>
            <div className="project__grid__details__moreinfo">
              <h4 className="project__grid__details__moreinfo--sm-title">
                Client
              </h4>
              <p className="project__grid__details__moreinfo--sm-para">
                {project.client}
              </p>
              <h4 className="project__grid__details__moreinfo--sm-title">
                Project
              </h4>
              <a
                href={project.site}
                className="project__grid__details__moreinfo--sm-link"
              >
                Link to Site
              </a>
              <h4 className="project__grid__details__moreinfo--sm-title">
                Services
              </h4>
              <p className="project__grid__details__moreinfo--sm-para">
                React, GSAP Animation, Ui Development
              </p>
            </div>
          </div>
          <div className="project__grid__pics">
            <div
              className="project__grid__pics__item"
              style={{ backgroundImage: "url(" + project.img1 + ")" }}
            ></div>
            <div
              className="project__grid__pics__item"
              style={{ backgroundImage: "url(" + project.img2 + ")" }}
            ></div>
            <div
              className="project__grid__pics__item"
              style={{ backgroundImage: "url(" + project.img3 + ")" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
