import React from "react";

function GreetTwo({ greeting = "Hello", firstName, lastName }) {
  return <h1 className="greeting">{`${greeting} ${firstName} ${lastName}`}</h1>;
}
function GreetOne(props) {
  console.log("GreetOne Props:", props);
  const greeting = props.greeting || "Hello";
  return (
    <h1 className="greeting">{`${greeting} ${props.firstName} ${props.lastName}`}</h1>
  );
}
export default function PropExampleOne(props) {
  return (
    <section>
      <h1>Props</h1>
      <p>
        Props become attributes on the JSX tag, and you can pass down any value.
        React will collect these into an object that we tend to call the "props"
        object.
      </p>
      <GreetOne firstName="Sacha" lastName="Sayan" />
      <GreetOne greeting="Goodbye" firstName="Evan" lastName="Schultz" />
      <hr />
      <p>
        Since props is an object, we can use ES6 features such as destructuring,
        and default values for function arguments.
      </p>
      <GreetTwo firstName="Sacha" lastName="Sayan" />
      <GreetTwo greeting="Goodbye" firstName="Evan" lastName="Schultz" />
    </section>
  );
}
