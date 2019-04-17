import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bulma/css/bulma.css";

import { robots as INITIAL_STATE } from "./robots";
import RobotCard from "./components/RobotCard";
import RobotForm from "./components/RobotForm";

function robotReducer(state, action) {
  switch (action.type) {
    case "ADD_ROBOT":
    // the action should have a property called `robot` 
    // that has the new robot details
    // note: we want to return a new copy of the array,
    // not mutate it.
    // we can use the array rest operator 
    // to create a new array `let newArray = [...array, newItem]
      return;
    case "REMOVE_ROBOT":
    // the action should have a property called `robotId`
      return state.filter(robot => {
        return true;
      });
    case "ACTIVATE_ROBOT":
    // the action should have a property called `robotId`
    // we want to update the robot to active that matches the robotId
    
      return state.map(robot => {
        return robot.id !== action.robotId ? robot : { ...robot, active: true };
      });
    case "DEACTIVATE_ROBOT":
    // the action should have a property called `robotId`
      return state;
    default:
      console.warn(`Unknown action type: ${action.type}`);
      return state;
  }
}
let sortRobots = robots => {
  return [...robots].sort((a, b) => {
    return a.createdOn >= b.createdOn ? -1 : 1;
  });
};
function App() {
  const [robots, robotDispatch] = useReducer(robotReducer, INITIAL_STATE);
  const sortedRobots = sortRobots(robots)
  return (
    <div className="App">
      <h1>Robot Management Solutions</h1>
      <div className="flexbox-container">
        <div className="column">
          {sortedRobots.map(robot => {
            return (
              <RobotCard
                robot={robot}
                onRemove={id =>
                  robotDispatch({ type: "REMOVE_ROBOT", robotId: id })
                }
              />
            );
          })}
        </div>
        <div className="column">
          <RobotForm
            onSubmit={robot => {
              console.log('Recieved robot', robot);
              console.log('use robotDispatch to dispatch an action with type ADD_ROBOT, and a robot property')
            }}
          />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
