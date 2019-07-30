import React, { Component } from "react";
import "./App.css";
import { people } from "./people";

function Block({ children }) {
  return <div className="block">{children}</div>;
}

function Person({ firstName, lastName, onRemove }) {
  return (
    <Block>
      {firstName} {lastName}
      <button title="Remove Item" onClick={() => onRemove()}> X </button>
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
