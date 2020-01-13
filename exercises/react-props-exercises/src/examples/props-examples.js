import React from "react";

const Greeting = props => {
  return (
    <h1>
      {props.greeting}, {props.name}!
    </h1>
  );
};

const GreetingDestructured = ({ greeting, name }) => (
  <h1>
    {greeting}, {name}!
  </h1>
);

export default function PropsExample() {
  return (
    <div>
      <Greeting greeting="Hello" name="John Doe" />
      <hr />
      <GreetingDestructured greeting="Goodbye" name="John Doe" />
    </div>
  );
}
