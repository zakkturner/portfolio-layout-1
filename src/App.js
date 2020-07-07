import React from "react";
import Header from "./com/header/Header";
import Main from "./com/main/Main";
import Project from "./pages/Project/Project";
import Footer from "./com/footer/Footer";
import "./styles.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Sign Up Component",
    subTitle: "React, GSAP Animation, Ui Development",
    description: "A sign up form built with React and GSAP Animations",
    link: "/projects/sign-up",
  },
  {
    id: 2,
    title: "j5create",
    subTitle: "Shopify, CMS, Ecommerce",
    description: "Computer periphial Ecommerce website built with Shopify",
    link: "/projects/j5",
  },
];

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {/* <Route path="/projects/sign-up">
            <Project title="Sign Up Component" />
          </Route>
          <Route path="/projects/j5">
            <Project title="j5create" />
          </Route> */}

          {projects.map((p, i) => {
            return (
              <Route
                path={p.link}
                render={() => <Project project={projects[i]} />}
                exact
              />
            );
          })}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
