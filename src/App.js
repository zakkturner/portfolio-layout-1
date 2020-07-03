import React from "react";
import Header from "./com/header/Header";
import Main from "./com/main/Main";
import Footer from "./com/footer/Footer";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
