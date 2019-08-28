import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SearchBox from "./components/searchbox/SearchBox";
import dataDummy from "./components/data-dummy/dataDummy";
import categories from "./components/data-dummy/categories";
import CardList from "./components/main-component/card-list/CardList";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
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
    const { categories, searchField } = this.state;
    const filteredCategories = categories.filter(category =>
      category.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(this.state);
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <SearchBox placeholder="Search" handleChange={this.handleChange} />
          <CardList categories={filteredCategories} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
