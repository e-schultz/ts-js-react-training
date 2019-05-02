import React, { useState, useReducer } from "react";
import Section from "../../../lib/components/Section";
import Column from "../../../lib/components/Column";
import Columns from "../../../lib/components/Columns";
import RobotForm from "../components/RobotForm";
import RobotSearchBar from "../components/RobotSearchBar";
import RobotSearchCard from "../components/RobotSearchCard";

import { departments, jobTitles, INITIAL_ROBOTS } from "../../../data";


const robotReducer = (state, action) => {
  switch (action.type) {
    case "SAVE":
      return state.map(robot => {
        return robot.id !== action.robot.id ? robot : { ...action.robot };
      });
    default:
      return state;
  }
};

const robotFactory = (departments, jobTitles) => (robot) => {
  let jobTitle = jobTitles.find(
    title => title.id === robot.jobTitleId
  );
  let department = departments.find(
    department => department.id === jobTitle.departmentId
  );

  return {
    ...robot,
    jobTitle: jobTitle.text,
    departmentId: department.id,
    department: department.text
  };
}
const robotBuilder = robotFactory(departments, jobTitles);
const createSearchFilter = (searchTerm) => (robot) => {
  if (
    typeof searchTerm === "undefined" ||
    searchTerm.trim().length === 0
  ) {
    return true;
  } else {
    for (let key in robot) {
      console.log(key, robot[key]);
      if (typeof robot[key] === "string") {
        if (
          robot[key]
            .toLowerCase()
            .indexOf(searchTerm.toLocaleLowerCase()) >= 0
        ) {
          return true;
        }
      }
    }
    return false;
  }
}
let createDepartmentFilter = (departmentId) => (robot) => {
  return departmentId === -1
                ? true
                : robot.departmentId === departmentId;
}
const RobotSearch = () => {
  let [selectedDepartmentId, setSelectedDepartmentId] = useState(-1);
  let [searchTerm, setSearchTerm] = useState("");
  let [selectedRobot, setSelectedRobot] = useState(null);
  let [robots, robotDispatch] = useReducer(robotReducer, INITIAL_ROBOTS);
  let robotSearchFilter = createSearchFilter(searchTerm);
  let departmentFilter = createDepartmentFilter(selectedDepartmentId);
  return (
    <Section>
      <RobotSearchBar
        departments={departments}
        selectedDepartmentId={selectedDepartmentId}
        searchTerm={searchTerm}
        onDepartmentSelect={setSelectedDepartmentId}
        onSearchTermChange={setSearchTerm}
      />

      <Columns>
        <Column size={1 / 3}>
          {robots
            .map(robot => robotBuilder(robot))
            .filter(robot=>departmentFilter(robot))
            .filter(robot=>robotSearchFilter(robot))
            .map(robot => {
              return <RobotSearchCard robot={robot} onEdit={()=>setSelectedRobot(robot)}/>
             
            })}
        </Column>
        <Column size={1 / 3}>
          {!selectedRobot ? null : (
            <RobotForm
              robot={selectedRobot}
              onSubmit={action => {
                setSelectedRobot(null);
                robotDispatch(action);
              }}
            />
          )}
        </Column>
      </Columns>
    </Section>
  );
};

RobotSearch.displayName = "RobotSearch";

export default RobotSearch;
