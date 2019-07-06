import React, { Component, useState } from "react";

import "./App.css";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    setValue,
    {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  ];
}
export function NameForm(props) {
  const [firstName, , firstNameInput] = useInput("");
  const [lastName, , lastNameInput] = useInput("");

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Submitting Name ${firstName} ${lastName}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>
          First Name:
        </span>
        <input
          type="text"
          {...firstNameInput}
        />
      </label>
      <label>
        <span>
          Last Name:
        </span>
        <input
          type="text"
         {...lastNameInput}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <NameForm />
      </div>
    );
  }
}

export default App;
