import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SearchBox from "./components/searchbox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searchField: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox />

        {/* <CardList /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
