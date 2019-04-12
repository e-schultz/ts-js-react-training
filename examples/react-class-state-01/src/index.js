import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// - create constructor
// - set initial state
// - update render to display value from state
// - create input, value set to state
// - create event handler 
// - bind onChange 
// - use setState in event handler

class App extends React.Component {
  render() {
    return (
      <section>
        <h1>Class Component</h1>
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
