import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

import Card from "./lib/components/Card";
import CardImage from "./lib/components/CardImage";
import CardContent from "./lib/components/CardContent";
import CardaMediaContent from "./lib/components/CardMediaContent";
import CardFooter from "./lib/components/CardFooter";
import CardFooterItem from "./lib/components/CardFooterItem";
import SelectList from "./lib/components/SelectList";
import SiteHeader from "./lib/components/SiteHeader";
import Container from "./lib/components/Container";
import Section from "./lib/components/Section";
import Column from "./lib/components/Column";
import Columns from "./lib/components/Columns";
import InputField from "./lib/components/InputField";
import Input from "./lib/components/Input";
const departments = [
  {
    id: 0,
    text: "Technology"
  },
  {
    id: 1,
    text: "Sales"
  },
  {
    id: 2,
    text: "Delivery"
  }
];
const jobTitles = [
  {
    id: 0,
    departmentId: 0,
    text: `Application Development Director`
  },
  {
    id: 1,
    departmentId: 0,
    text: `Chief Technology Officer`
  },
  {
    id: 2,
    departmentId: 0,
    text: `Information Technology Director`
  },
  {
    id: 3,
    departmentId: 1,
    text: "District Sales Manager"
  },
  {
    id: 4,
    departmentId: 1,
    text: "Regional Sales Manager"
  },
  {
    id: 5,
    departmentId: 1,
    text: "Territory Sales Manager"
  },
  {
    id: 6,
    departmentId: 2,
    text: "Applications Developer"
  },
  {
    id: 7,
    departmentId: 2,
    text: "Junior Software Developer"
  },
  {
    id: 8,
    departmentId: 2,
    text: "Computer Systems Security Analyst"
  },
  {
    id: 9,
    departmentId: 2,
    text: "Embedded Systems Software Developer"
  }
];
const INITIAL_ROBOTS = [
  {
    id: 1,
    name: "Leanne Grahamss",
    username: "Bret",
    email: "Sincere@april.biz",
    jobTitleId: 1
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    jobTitleId: 2
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    jobTitleId: 3
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    jobTitleId: 4
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    jobTitleId: 5
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    jobTitleId: 6
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    jobTitleId: 7
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    jobTitleId: 8
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    jobTitleId: 9
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    jobTitleId: 0
  }
];

const RobotForm = ({ robot, onSubmit }) => {
  const [editRobot, setRobot] = useState({ ...robot });
  return (
    <Card>
      <CardImage src={`https://robohash.org/${editRobot.id}?size=1280x960`} />
      <CardContent>
        <CardaMediaContent
          src={`https://robohash.org/${editRobot.id}?size=96x96`}
        >
          <InputField
            type="text"
            placeholder="Text input"
            value={editRobot.name}
            onChange={({ target: { value } }) =>
              setRobot(state => ({
                ...state,
                name: value
              }))
            }
          />

          <InputField 
            placeholder="Text input"
            value={editRobot.username}
            onChange={({ target: { value } }) =>
              setRobot(state => ({
                ...state,
                username: value
              }))
            }
          />
        </CardaMediaContent>
        <SelectList
          options={departments}
          value={editRobot.departmentId}
          onChange={({ target: { value } }) =>
            setRobot(state => ({
              ...state,
              departmentId: +value,
              jobTitleId: -1
            }))
          }
        />

        <SelectList
          options={jobTitles.filter(
            ({ departmentId }) => departmentId === editRobot.departmentId
          )}
          value={editRobot.jobTitleId}
          
          onChange={({ target: { value } }) =>
            setRobot(state => ({
              ...state,
              jobTitleId: +value
            }))
          }
        />
      </CardContent>
      <CardFooter>
        <CardFooterItem>
          <button
            className="button is-fullwidth is-primary"
            onClick={() => {
              onSubmit({ type: "SAVE", robot: editRobot });
            }}
          >
            Save
          </button>
        </CardFooterItem>
        <CardFooterItem>
          <button
            className="button is-fullwidth is-normal"
            onClick={() => {
              onSubmit({ type: "CANCEL" });
            }}
          >
            Cancel
          </button>
        </CardFooterItem>
      </CardFooter>
    </Card>
  );
};
function App() {
  let [selectedDepartmentId, setSelectedDepartmentId] = useState(-1);
  let [searchTerm, setSearchTerm] = useState("");
  let [selectedRobot, setSelectedRobot] = useState(null);
  let [robots, setRobots] = useState(INITIAL_ROBOTS);

  return (
    <>
      <SiteHeader />
      <Container>
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
            <p className="control">
              <a className="button">Search</a>
            </p>
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
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
