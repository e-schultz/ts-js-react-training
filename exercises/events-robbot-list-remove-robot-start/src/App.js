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
    /*
    Update the state to remove the robot that was clicked
    */
  }
  render() {
    let robots = this.state.robots;
    return (
      <div className="App">
      <h1>Hello Robots</h1>
        <div style={{ width: "50vw" }}>
          {robots.map(robot => {
/*
  Pass down a callback - that when the Remove button is clicked,
  will remove the selected robot fron the collection
*/            
            return (
              <RobotCard
                robot={robot}
                key={robot.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
