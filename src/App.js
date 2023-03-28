import React, { useState, useReducer } from "react";

import Main from "./com/main/Main";

import Footer from "./com/footer/Footer";

import "./styles.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ModalContext, ModalDispatchContext } from "./context/ModalContext";

export default function App() {
  const [menuState, setMenuState] = useState({
    active: null,
  });
  const initialModalActive = { modalActive: false, initialOpen: true };
  const [modalActive, dispatch] = useReducer(modalReducer, initialModalActive);
  function modalReducer(modalActive, action) {
    switch (action.type) {
      case "opened": {
        return {
          modalActive: true,
          initialOpen: false,
          openedByModel: action.openedByModel,
        };
      }
      case "closed": {
        return {
          modalActive: false,
          openedByModel: false,
        };
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ModalContext.Provider value={modalActive}>
              <ModalDispatchContext.Provider value={dispatch}>
                <Main menuState={menuState} setMenuState={setMenuState} />
              </ModalDispatchContext.Provider>
            </ModalContext.Provider>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
