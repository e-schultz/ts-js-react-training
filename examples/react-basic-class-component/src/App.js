import React, { Component } from 'react';
// import HelloWorld from './components/HelloWorld'
import HelloWorld from './components/HelloWorldCls'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld text={'Hello World'} />
      </div>
    );
  }
}

export default App;
