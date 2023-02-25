import React, { useRef, useState } from "react";
import Header from "./com/header/Header";
import Main from "./com/main/Main";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Footer from "./com/footer/Footer";
import projectData from "./data/projectData";
import "./styles.scss";

import ScrollMagic from "scrollmagic";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function App() {
  const [menuState, setMenuState] = useState({
    active: null,
  });
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <Main menuState={menuState} setMenuState={setMenuState} />
          </Route>

          {projectData.map((p, i) => {
            return (
              <Route
                path={p.path}
                render={() => (
                  <Project
                    project={projectData[i]}
                    menuState={menuState}
                    setMenuState={setMenuState}
                  />
                )}
                exact
              />
            );
          })}

          <Route path="/contact">
            <Contact menuState={menuState} setMenuState={setMenuState} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
