import React, { useRef } from "react";
import { gsap, Power3, Power1 } from "gsap";
import Header from "../header/Header";
import Project from "../atoms/Project/MainProject";

import projectData from "../../data/projectData";

import "./Main.scss";

export default function Main() {
  let category1 = useRef(null);
  let category2 = useRef(null);
  let category3 = useRef(null);
  let category4 = useRef(null);

  let item1 = useRef(null);
  let item2 = useRef(null);
  let item3 = useRef(null);
  let item4 = useRef(null);
  let item5 = useRef(null);
  let item6 = useRef(null);
  let item7 = useRef(null);
  let item8 = useRef(null);
  let item9 = useRef(null);

  let title1 = useRef(null);
  let span1 = useRef(null);

  /*************

Link animations
******************/
  // link 1 hover
  const onMouseEnter = () => {
    gsap.to(category1, {
      duration: 0.1,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave = () => {
    gsap.to(category1, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };
  // link 2 hover
  const onMouseEnter2 = () => {
    gsap.to(category2, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave2 = () => {
    gsap.to(category2, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };
  // link 3 hover
  const onMouseEnter3 = () => {
    gsap.to(category3, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave3 = () => {
    gsap.to(category3, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };
  // link 4 hover
  const onMouseEnter4 = () => {
    gsap.to(category4, {
      duration: 0.4,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };

  const onMouseLeave4 = () => {
    gsap.to(category4, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };

  /*************

Loop projects
******************/

  const loopProjects = () => {
    return projectData.map((project, i) => {
      return (
        <a href="#">
          <Project
            projectTitle={projectData[i].title}
            cat={projectData[i].categories}
            img={projectData[i].img}
          />
        </a>
      );
    });
  };

  return (
    <>
      <Header
        title="Zach Turner"
        subTitle="Front End Engineer"
        background="https://neuronthemes.com/dendrite/wp-content/uploads/page-header.jpg"
      />
      <main className="main" id="portfolio">
        <div className="main__grid">
          <ul className="main__grid__links">
            <li className="main__grid__links--item">
              <a
                href="#"
                ref={(el) => {
                  category1 = el;
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                React
              </a>
            </li>

            <li className="main__grid__links--item">
              <a
                href="#"
                ref={(el) => {
                  category2 = el;
                }}
                onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseLeave2}
              >
                Vue
              </a>
            </li>
            <li className="main__grid__links--item">
              <a
                href="#"
                ref={(el) => {
                  category3 = el;
                }}
                onMouseEnter={onMouseEnter3}
                onMouseLeave={onMouseLeave3}
              >
                CMS Sites
              </a>
            </li>
            <li className="main__grid__links--item">
              <a
                href="#"
                ref={(el) => {
                  category4 = el;
                }}
                onMouseEnter={onMouseEnter4}
                onMouseLeave={onMouseLeave4}
              >
                Animation
              </a>
            </li>
          </ul>
          <div className="main__grid__project-grid">{loopProjects()}</div>
        </div>
      </main>
    </>
  );
}
