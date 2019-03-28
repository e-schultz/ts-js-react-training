import React from "react";

const noop = () => undefined;
const Name = () => {
  // Complete this component so that the input value will be logged in the console while you type.
  // Then, make it so that when the button is pressed, "Hello, {name}!" will be logged in the console.
  return (
    <div>
      <input type="text" onInput={noop} />
      <button type="button" onClick={noop}>Hello!</button>
    </div>
  )
}

export default Name
