import React, { useState } from "react";
import InputField from "./InputField";
import uuid from "uuid/v4";

function RobotForm({ onSubmit, ...props }) {
  let [name, setName] = useState("");
  let [occupation, setOccupation] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let createRobot = evt => {
    evt.preventDefault();
    const robot = {
      id: uuid(),
      name,
      occupation,
      userName,
      email,
      createdOn: Date.now()
    };
    onSubmit(robot);
    resetForm();
  };
  let resetForm = () => {
    setName("");
    setOccupation("");
    setUserName("");
    setEmail("");
  };
  return (
    <form onSubmit={evt => createRobot(evt)}>
      <InputField
        label={"Name"}
        value={name}
        onChange={evt => setName(evt.target.value)}
      />
      <InputField
        label={"Occupation"}
        value={occupation}
        onChange={evt => setOccupation(evt.target.value)}
      />
      <InputField
        label={"User Name"}
        value={userName}
        onChange={evt => setUserName(evt.target.value)}
      />
      <InputField
        label={"Email"}
        value={email}
        onChange={evt => setEmail(evt.target.value)}
      />
      <div className="control">
        <button type="submit" className="button is-primary">
          Submit
        </button>
        <button
          onClick={resetForm}
          type="button"
          className="button is-secondary"
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default RobotForm;
