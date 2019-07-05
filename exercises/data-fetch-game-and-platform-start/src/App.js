import React, { Component } from "react";
import "./App.css";
import { getGameDetailList } from "./services/games-service";

function Block({ children }) {
  return (
    <div className="block">
      {children}
    </div>
  );
}

function GameCard({ children }) {
  return <Block>{children}</Block>;
}

function GameList({ games }) {
  return games.map(({ id, name, platformName }) => {
    return (
      <GameCard key={id}>
        {name} - {platformName}
      </GameCard>
    );
  });
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }
  componentDidMount() {
    getGameDetailList().then(result => {
      this.setState(state => ({
        games: result
      }));
    });
  }
  render() {
    return (
      <div className="App">
        <GameList games={this.state.games} />
      </div>
    );
  }
}

export default App;
