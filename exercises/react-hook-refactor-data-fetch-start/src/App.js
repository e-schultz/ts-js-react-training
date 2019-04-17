import React, { Component } from "react";
import "./App.css";
import HackerNewsSearch from "./components/HackerNewsSearch";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "react"
    };
  }
  handleSearch(event) {
    this.setState({
      query: event
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar
          initialQuery={this.state.query}
          onSearch={event => this.handleSearch(event)}
        />
        <HackerNewsSearch query={this.state.query}/>
      </div>
    );
  }
}

export default App;
