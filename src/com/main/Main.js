import React from "react";

import "./Main.scss";

export default function Main() {
  return (
    <main className="main">
      <div className="main__grid">
        <ul className="main__grid__links">
          <li className="main__grid__links--item">
            <a href="#">React</a>
          </li>
          <li className="main__grid__links--item">
            <a href="#">Static Sites</a>
          </li>
          <li className="main__grid__links--item">
            <a href="#">CMS Sites</a>
          </li>
          <li className="main__grid__links--item">
            <a href="#">Animation</a>
          </li>
        </ul>
        <div className="main__grid__project-grid">
          <div className="main__grid__project-grid__item"></div>
          <div className="main__grid__project-grid__item"></div>
          <div className="main__grid__project-grid__item"></div>
          <div className="main__grid__project-grid__item"></div>
          <div className="main__grid__project-grid__item"></div>
          <div className="main__grid__project-grid__item"></div>
          <div className="main__grid__project-grid__item"></div>
          <div className="main__grid__project-grid__item"></div>
          <div className="main__grid__project-grid__item"></div>
        </div>
      </div>
    </main>
  );
}
