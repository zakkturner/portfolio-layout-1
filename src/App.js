import React, { useRef } from "react";
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

// const projects = [
//   {
//     id: 1,
//     title: "Sign Up Component",
//     categories: "React, GSAP Animation, Ui Development",
//     description: "A sign up form built with React and GSAP Animations",
//     link: "/projects/sign-up",
//     background: "../img/sign-uphead.jpg",
//     img1: "../img/signup-form.jpg",
//     img2: "../img/sign-up2nd.jpg",
//     img3: "../img/sign-upcongrats.jpg",
//     site: "https://responsive-signup.netlify.app/",
//     client: "Interactive Nerd",
//   },
//   {
//     id: 2,
//     title: "j5create",
//     categories: "Shopify, CMS, Ecommerce",
//     description: "Computer periphial Ecommerce website built with Shopify",
//     link: "/projects/j5",
//   },
// ];

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          {projectData.map((p, i) => {
            return (
              <Route
                path={p.path}
                render={() => <Project project={projectData[i]} />}
                exact
              />
            );
          })}

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
