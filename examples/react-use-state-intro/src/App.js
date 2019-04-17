import React, { Component } from "react";
import "./App.css";
// import Name from './components/Name';
// import Name from './components/NameRefactor';
import Name from './components/NameCls';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Name />
      </div>
    );
  }
}

export default App;
