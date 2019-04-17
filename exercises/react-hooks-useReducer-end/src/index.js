import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bulma/css/bulma.css";

import { robots as INITIAL_STATE } from "./robots";
import RobotList from "./components/RobotList";
import RobotForm from "./components/RobotForm";

function robotReducer(state, action) {
  switch (action.type) {
    case "ADD_ROBOT":
      return [...state, action.robot];
    case "REMOVE_ROBOT":
      console.log(action);
      return state.filter(robot => robot.id !== action.robotId);
    case "ACTIVATE_ROBOT":
      return state.map(robot => {
        return robot.id !== action.robotId ? robot : { ...robot, active: true };
      });
    case "DEACTIVATE_ROBOT":
      return state.map(robot => {
        return robot.id !== action.robotId
          ? robot
          : { ...robot, active: false };
      });
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

  return (
    <div className="App">
      <h1>Robot Management Solutions</h1>
      <div className="flexbox-container">
        <div className="column">
          <RobotList
            robots={sortRobots(robots)}
            onRemove={id =>
              robotDispatch({ type: "REMOVE_ROBOT", robotId: id })
            }
            onActivate={id =>
              robotDispatch({ type: "ACTIVATE_ROBOT", robotId: id })
            }
            onDeactivate={id =>
              robotDispatch({ type: "DEACTIVATE_ROBOT", robotId: id })
            }
          />
        </div>
        <div className="column">
          <RobotForm
            onSubmit={robot => robotDispatch({ type: "ADD_ROBOT", robot })}
          />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
