import React, { Component } from "react";

import "./App.css";
import { getGameDetailList } from "./services/games-service";
function Block({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        display: "block",
        height: "1rem",
        padding: "1rem",
        margin: "1rem",
        width: "50%"
      }}
    >
      {children}
    </div>
  );
}

function GameCard({ name, platformName }) {
  return (
    <Block>
      {name} - {platformName}
    </Block>
  );
}

function GameList({ games }) {
  return games.map(({id, name, platformName}) => {
    return <GameCard key={id} name={name} platformName={platformName} />;
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
    getGameDetailList().then(response => {
      this.setState({
        games: response,
        isLoading: false
      });
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
