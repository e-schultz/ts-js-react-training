import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ROBOT_LIST } from "./robots";

function Card() {
  /* start breaking this card out into smaller components */
  /*
  To get the URL to display the image, we are using: ttps://robohash.org/
  Any value you pass will return a unique image for that at the given dimensions.

  For example:
  <img src={`https://robohash.org/${id}?size=200x200`} alt="Avatar" />
  */
  return (
    <div className="card">
      <img src="https://robohash.org/1?size=200x200" alt="Avatar" />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}

function App() {
  console.log(ROBOT_LIST);
  return (
    <div className="App">
      <div style={{ width: "75vw" }}>
        <Card />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
