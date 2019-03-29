import React, { Component } from "react";
import "./App.css";
import { people } from "./people";

function Block({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        display: "block",
        height: "1rem",
        padding: "1rem",
        margin: "1rem",
        width: "50%"
      }}
    >
      {children}
    </div>
  );
}
function Person({ firstName, lastName, onRemove }) {
  return (
    <Block>
      {firstName} {lastName}
      <button onClick={() => onRemove()}>Remove</button>
    </Block>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      people
    };
  }
  removePerson(id) {
    this.setState(state => ({
      people: state.people.filter(n => n.id !== id)
    }));
  }
  render() {
    return (
      <div className="App">
        {this.state.people.map(person => {
          return (
            <Person
              key={person.id}
              firstName={person.firstName}
              lastName={person.lastName}
              onRemove={() => this.removePerson(person.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
