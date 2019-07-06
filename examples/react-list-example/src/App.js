import React, { Component } from "react";
import "./App.css";

function Block({ children }) {
  return (
    <div className="block">
      {children}
    </div>
  );
}
function Person({ firstName, lastName }) {
  return (
    <Block>
      Hello - {firstName} {lastName}
    </Block>
  );
}
const people = [
  {
    id: 0,
    firstName: "Evan",
    lastName: "Schultz"
  },
  {
    id: 1,
    firstName: "Renee",
    lastName: "Blackburn"
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe"
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        {people.map(person => {
          return (
            <Person
              key={person.id}
              firstName={person.firstName}
              lastName={person.lastName}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
