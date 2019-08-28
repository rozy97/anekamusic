import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SearchBox from "./components/searchbox/SearchBox";
import dataDummy from "./components/data-dummy/dataDummy";
import categories from "./components/data-dummy/categories";
import CardList from "./components/main-component/card-list";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: dataDummy,
      categories: categories,
      searchField: ""
    };
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const filteredCategories = this.categories.filter(category =>
      category.category.toLowerCase().includes(this.searchField.toLowerCase())
    );
    return (
      <div className="App">
        <Header />
        <SearchBox placeholder="Search" handleChange={this.handleChange} />

        <CardList items={filteredCategories} />
        <Footer />
      </div>
    );
  }
}

export default App;
