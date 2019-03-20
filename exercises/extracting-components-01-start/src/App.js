import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function ProductCard() {
  return (
    <div className="app-product-card">
      <a className="app-block-link" href="#add-to-card">
        <div className="app-media">
          <div
            className="app-media-image"
            style={{
              background:
                'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/Supers_Vertical_PackRO-compressor.jpg") center center'
            }}
          />
        </div>
      </a>
      <a className="app-block-link" href="#super-pack-details">
        <h2 className="app-heading">The Super Pack</h2>
        <p className="app-text">all three serums</p>
      </a>
      <button className="app-button">
        <span class="app-button-text">Add To Bag</span>
        <span class="app-button-price">$85</span>
      </button>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductCard />
        <hr />
      </div>
    );
  }
}

export default App;
