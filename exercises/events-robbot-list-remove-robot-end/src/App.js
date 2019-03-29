import React, { Component } from "react";

import "./App.css";
import RobotCard from "./components/RobotCard";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = { robots };
  }
  removeRobot(event, id) {
    this.setState(state => ({
      robots: state.robots.filter(robot => robot.id !== id)
    }));
  }
  render() {
    return (
      <div className="App">
        <div style={{ width: "50vw" }}>
          {this.state.robots.map(robot => {
            return (
              <RobotCard
                robot={robot}
                key={robot.id}
                onRemove={event => this.removeRobot(event, robot.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
