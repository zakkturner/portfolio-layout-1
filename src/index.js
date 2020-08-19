import React from "react";
import ReactDOM from "react-dom";
import Loading from "../src/com/loading/Loading";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Loading />
    <App />
  </React.StrictMode>,
  rootElement
);
