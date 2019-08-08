import React, { Component } from "react";
import "./App.css";

function Block({ children }) {
  return <div className="block">{children}</div>;
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
    firstName: "Cadence",
    lastName: "Branch"
  },
  {
    id: 1,
    firstName: "Ffion",
    lastName: "Reynolds"
  },
  {
    id: 2,
    firstName: "Martine",
    lastName: "Knox"
  }
];

function App() {
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

export default App;
