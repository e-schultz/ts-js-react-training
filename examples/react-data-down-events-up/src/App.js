import React, { Component } from "react";

import "./App.css";
import HelloWorld from "./components/HelloWorld";

class App extends Component {
  state = {
    helloWorldOne: 0,
    helloWorldTwo: 0
  };

  constructor(props) {
    super(props);
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
  }
  handleClickOne(value) {
    this.setState({ helloWorldOne: value });
  }
  handleClickTwo(value) {
    this.setState({ helloWorldTwo: value });
  }
  render() {
    return (
      <div className="App">
        <ul>
          <li>First Hello World Clicked: {this.state.helloWorldOne}</li>
          <li>Second Hello World Clicked: {this.state.helloWorldTwo}</li>
        </ul>
        <HelloWorld onValueChange={this.handleClickOne} />
        <br />
        <HelloWorld onValueChange={this.handleClickTwo} />
      </div>
    );
  }
}

export default App;
