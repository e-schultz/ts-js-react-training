import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

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
    <div className="card" style={{ position: "fixed" }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={`https://robohash.org/${robot.id}?size=1280x960`}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={`https://robohash.org/${robot.id}?size=96x96`}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="control">
              <input
                className="input"
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
            </div>

            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={editRobot.username}
                onChange={({ target: { value } }) =>
                  setRobot(state => ({
                    ...state,
                    username: value
                  }))
                }
              />
            </div>
          </div>
        </div>

        <div className="content">
          <span className="select">
            <select
              value={editRobot.departmentId}
              onChange={({ target: { value } }) =>
                setRobot(state => ({
                  ...state,
                  departmentId: +value,
                  jobTitleId: -1
                }))
              }
            >
              <option value={-1}>Select One</option>
              {departments.map(department => {
                return (
                  <option key={department.id} value={department.id}>
                    {department.text}
                  </option>
                );
              })}
            </select>
          </span>
          <span className="select">
            <select
              value={editRobot.jobTitleId}
              onChange={({ target: { value } }) =>
                setRobot(state => ({
                  ...state,
                  jobTitleId: +value
                }))
              }
            >
              <option value={-1}>Select One</option>
              {jobTitles
                .filter(
                  ({ departmentId }) => departmentId === editRobot.departmentId
                )
                .map(jobTitle => {
                  return (
                    <option key={jobTitle.id} value={jobTitle.id}>
                      {jobTitle.text}
                    </option>
                  );
                })}
            </select>
          </span>
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => {
              onSubmit({ type: "SAVE", robot: editRobot });
            }}
          >
            Save
          </button>
        </p>
        <p href="#" className="card-footer-item">
          {" "}
          <button
            className="button is-fullwidth is-normal"
            onClick={() => {
              onSubmit({ type: "CANCEL" });
            }}
          >
            Cancel
          </button>
        </p>
      </footer>
    </div>
  );
};
function App() {
  let [selectedDepartmentId, setSelectedDepartmentId] = useState(-1);
  let [searchTerm, setSearchTerm] = useState("");
  let [selectedRobot, setSelectedRobot] = useState(null);
  let [robots, setRobots] = useState(INITIAL_ROBOTS);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="section">
        <section className="container">
          <div className="field has-addons">
            <p className="control">
              <span className="select">
                <select
                  value={selectedDepartmentId}
                  onChange={event =>
                    setSelectedDepartmentId(+event.target.value)
                  }
                >
                  <option value={-1}>All</option>
                  {departments.map(department => {
                    return (
                      <option key={department.id} value={department.id}>
                        {department.text}
                      </option>
                    );
                  })}
                </select>
              </span>
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
          <div className="columns">
            <div className="column is-one-third">
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
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img
                            src={`https://robohash.org/${
                              robot.id
                            }?size=1280x960`}
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-left">
                            <figure className="image is-48x48">
                              <img
                                src={`https://robohash.org/${
                                  robot.id
                                }?size=96x96`}
                                alt="Placeholder image"
                              />
                            </figure>
                          </div>
                          <div className="media-content">
                            <p className="title is-4">{robot.name}</p>
                            <p className="subtitle is-6">@{robot.username}</p>
                          </div>
                        </div>

                        <div className="content">
                          {robot.department} - {robot.jobTitle}
                        </div>
                      </div>
                      <footer className="card-footer">
                        <p className="card-footer-item">
                          <button
                            className="button is-fullwidth is-primary"
                            onClick={() => setSelectedRobot(robot)}
                          >
                            Edit
                          </button>
                        </p>
                        <p href="#" className="card-footer-item">
                          {" "}
                          <button className="button is-fullwidth is-normal">
                            Activate
                          </button>
                        </p>
                        <p href="#" className="card-footer-item">
                          {" "}
                          <button className="button is-fullwidth is-warning">
                            Deactivate
                          </button>
                        </p>
                      </footer>
                    </div>
                  );
                })}
            </div>
            <div className="column is-one-third">
              {!selectedRobot ? null : (
                <RobotForm
                  robot={selectedRobot}
                  onSubmit={action => {
                    setSelectedRobot(null);
                    if (action.type !== "CANCEL") {
                      setRobots(state => {
                        return state.map(r=>{
                          return r.id !== selectedRobot.id ? r : {...action.robot}
                        })
                      });
                    }
                  }}
                />
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
