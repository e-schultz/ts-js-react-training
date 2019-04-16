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
        width: "75%"
      }}
    >
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
const IsLoading = () => <h1>Loading .... please wait</h1>

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      isLoading: true
    };
  }
  componentDidMount() {
    getGameDetailList().then(result => {
      this.setState(state => ({
        games: result,
        isLoading: false
      }));
    });
  }
  render() {
    let display = this.state.isLoading ? <IsLoading/> :  <GameList games={this.state.games} />
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
