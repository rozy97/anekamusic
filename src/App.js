import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SearchBox from "./components/searchbox/SearchBox";
import Add from "./components/add/Add";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox />
        <Add />
        {/* <CardList /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
