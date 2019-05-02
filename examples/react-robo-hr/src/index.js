import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "bulma/css/bulma.css";

import SiteHeader from "./lib/components/SiteHeader";
import Container from "./lib/components/Container";

import RobotSearch from "./features/robots/robot-search/RobotSearch";
import Dashboard from "./features/dashboard/Dashboard";
import { departments, jobTitles, INITIAL_ROBOTS } from "./data";

const robotReducer = (state, action) => {
  switch (action.type) {
    case "SAVE":
      return state.map(robot => {
        return robot.id !== action.robot.id
          ? robot
          : robotBuilder(action.robot);
      });
    default:
      return state;
  }
};

const robotFactory = (departments, jobTitles) => robot => {
  let jobTitle = jobTitles.find(title => title.id === robot.jobTitleId);
  let department = departments.find(
    department => department.id === jobTitle.departmentId
  );

  return {
    ...robot,
    jobTitle: jobTitle.text,
    departmentId: department.id,
    department: department.text
  };
};
const robotBuilder = robotFactory(departments, jobTitles);
function App() {
  let [robots, robotDispatch] = useReducer(
    robotReducer,
    INITIAL_ROBOTS.map(robotBuilder)
  );

  return (
    <>
      <SiteHeader />
      <Container>
        <Router primary={false}>
          <Dashboard
            path="/"
            departments={departments}
            jobTitles={jobTitles}
            robots={robots}
          />
          <RobotSearch
            path="/robots"
            departments={departments}
            jobTitles={jobTitles}
            robots={robots}
            robotDispatch={robotDispatch}
          />
        </Router>
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
