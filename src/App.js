import React, { useRef } from "react";
import Header from "./com/header/Header";
import Main from "./com/main/Main";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Footer from "./com/footer/Footer";
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

const projects = [
  {
    id: 1,
    title: "Sign Up Component",
    categories: "React, GSAP Animation, Ui Development",
    description: "A sign up form built with React and GSAP Animations",
    link: "/projects/sign-up",
    background: "../img/sign-uphead.jpg",
    img1: "../img/signup-form.jpg",
    img2: "../img/sign-up2nd.jpg",
    img3: "../img/sign-upcongrats.jpg",
    site: "https://responsive-signup.netlify.app/",
    client: "Interactive Nerd",
  },
  {
    id: 2,
    title: "j5create",
    categories: "Shopify, CMS, Ecommerce",
    description: "Computer periphial Ecommerce website built with Shopify",
    link: "/projects/j5",
  },
];

export default function App() {
  const panel = useRef(null);

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
      duration: "200%", // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    },
  });

  var slides = document.querySelectorAll("panel");

  // create scene for every slide
  for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
    })
      .setPin(slides[i], { pushFollowers: false })
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main ref={panel} />
          </Route>

          {projects.map((p, i) => {
            return (
              <Route
                path={p.link}
                render={() => <Project project={projects[i]} ref={panel} />}
                exact
              />
            );
          })}

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer ref={panel} />
      </div>
    </Router>
  );
}
