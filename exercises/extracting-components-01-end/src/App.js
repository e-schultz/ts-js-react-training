import React, { Component } from "react";

import "./App.css";
import ProductCard from './components/ProductCard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductCard />
      </div>
    );
  }
}

export default App;
