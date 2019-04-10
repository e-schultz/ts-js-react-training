import React from "react";
import ReactJson from "react-json-view";
import { Hook, Console, Decode } from "console-feed";

import "../styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      logs: []
    };
  }

  async componentDidMount() {
    Hook(window.console, log => {
      this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }));
    });
    console.log('Fetching Game')
    let { getGameDetail } = await import("../exercise-01");
    getGameDetail(1).then(game => {
      console.log('game result', game)
      this.setState(() => ({
        game
      }));
    });
  }

  render() {
    return (
      <>
        <section>
          <h1>Instructions: Promise.all </h1>
          <p>Open up src/exercise-01.js,</p>
          <ul>
            <li>Get a game by id</li>
            <li>Get a list of all platforms</li>
            <li>
              return an object that includes the properties:
              <ul>
                <li>id - the game id</li>
                <li>name - the game name</li>
                <li>platformId - the platform id</li>
                <li>platform - the name of the platform</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h1>Game Object</h1>
          <ReactJson src={this.state.game} name="Game Result" />
          <hr />
          <div style={{ backgroundColor: "#242424" }}>
            <Console logs={this.state.logs} variant="dark" />
          </div>
        </section>
      </>
    );
  }
}

export default App;
