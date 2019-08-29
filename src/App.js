import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { BrowserRouter } from "react-router-dom";
import Router from "./components/route/Router";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
