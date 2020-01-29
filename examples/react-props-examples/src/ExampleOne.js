import React from "react";

function GreetJohn() {
  return <h1 className="greeting">Hello John</h1>;
}
function GreetRenee() {
  return <h1 className="greeting">Hello Renee</h1>;
}

function Greet(props) {
  return <h1 className="greeting">Hello {props.firstName}</h1>;
}
export default function PropExampleOne(props) {
  return (
    <section>
      <h1>Props</h1>
      <p>
        Props are how we get get data into components, and help them be more
        reusable.
      </p>
      <p>
        Without props, we would end up repeating lots of code for the same
        functionality.
      </p>
      <p>Without using props:</p>

      <GreetJohn />
      <GreetRenee />
      <hr />
      <p>With using props - passing down values in the name prop</p>
      <Greet firstName={"John"} />
      <Greet lastName={"Renee"} />
    </section>
  );
}
