import React, { useState } from "react";
import Card from "../../../lib/components/Card";
import CardImage from "../../../lib/components/CardImage";
import CardContent from "../../../lib/components/CardContent";
import CardaMediaContent from "../../../lib/components/CardMediaContent";
import CardFooter from "../../../lib/components/CardFooter";
import CardFooterItem from "../../../lib/components/CardFooterItem";
import SelectList from "../../../lib/components/SelectList";
import Section from "../../../lib/components/Section";
import Column from "../../../lib/components/Column";
import Columns from "../../../lib/components/Columns";
import RobotForm from "../components/RobotForm";

import { departments, jobTitles, INITIAL_ROBOTS } from "../../../data";

const RobotSearch = () => {
  let [selectedDepartmentId, setSelectedDepartmentId] = useState(-1);
  let [searchTerm, setSearchTerm] = useState("");
  let [selectedRobot, setSelectedRobot] = useState(null);
  let [robots, setRobots] = useState(INITIAL_ROBOTS);
  return (
    <Section>
      <div className="field has-addons">
        <p className="control">
          <SelectList
            options={departments}
            value={selectedDepartmentId}
            onChange={event => setSelectedDepartmentId(+event.target.value)}
          />
        </p>

        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </p>
        {/*<p className="control">
      <a className="button">Search</a>
</p>*/}
      </div>
      <Columns>
        <Column size={1 / 3}>
          {robots
            .map(robot => {
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
            })
            .filter(n => {
              return selectedDepartmentId === -1
                ? true
                : n.departmentId === selectedDepartmentId;
            })
            .filter(robot => {
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
            })
            .map(robot => {
              return (
                <Card>
                  <CardImage
                    src={`https://robohash.org/${robot.id}?size=1280x960`}
                  />
                  <CardContent>
                    <CardaMediaContent
                      src={`https://robohash.org/${robot.id}?size=96x96`}
                    >
                      <p className="title is-4">{robot.name}</p>
                      <p className="subtitle is-6">@{robot.username}</p>
                    </CardaMediaContent>
                    {robot.department} - {robot.jobTitle}
                  </CardContent>
                  <CardFooter>
                    <CardFooterItem>
                      <button
                        className="button is-fullwidth is-primary"
                        onClick={() => setSelectedRobot(robot)}
                      >
                        Edit
                      </button>
                    </CardFooterItem>
                    <CardFooterItem>
                      <button className="button is-fullwidth is-normal">
                        Activate
                      </button>
                    </CardFooterItem>
                    <CardFooterItem>
                      <button className="button is-fullwidth is-warning">
                        Deactivate
                      </button>
                    </CardFooterItem>
                  </CardFooter>
                </Card>
              );
            })}
        </Column>
        <Column size={1 / 3}>
          {!selectedRobot ? null : (
            <RobotForm
              robot={selectedRobot}
              onSubmit={action => {
                setSelectedRobot(null);
                if (action.type !== "CANCEL") {
                  setRobots(state => {
                    return state.map(r => {
                      return r.id !== selectedRobot.id
                        ? r
                        : { ...action.robot };
                    });
                  });
                }
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
