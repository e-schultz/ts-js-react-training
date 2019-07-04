import React, { Component } from "react";

import "./App.css";
const BASE_URL = "https://js-ts-training.now.sh";

function Block({ children }) {
  return (
    <div
      className="block"
      style={{
        height: "1rem",
        padding: "1rem",
        width: "75%"
      }}
    >
      {children}
    </div>
  );
}

function GameCard({ name }) {
  return <Block>{name}</Block>;
}

function GameList({ games }) {
  return games.map(({ id, name }) => {
    return <GameCard key={id} name={name} />;
  });
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      games: []
    };
  }
  componentDidMount() {
    fetch(`${BASE_URL}/games`)
      .then(response => response.json())
      .then(result => {
        this.setState(state => ({
          games: result,
          isLoading: false
        }));
      });
  }
  render() {
    return (
      <div className="App">
        {!this.state.isLoading ? (
          <GameList games={this.state.games} />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default App;
