import React, { Component, useState } from 'react';

import './App.css';

export function NameForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${firstName} ${lastName}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
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
        <NameForm/>
      </div>
    );
  }
}

export default App;
