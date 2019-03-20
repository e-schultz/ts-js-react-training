import React, { Component } from 'react';
import './App.css';
import HackerNewsSearch from './components/HackerNewsSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HackerNewsSearch />
      </div>
    );
  }
}

export default App;
