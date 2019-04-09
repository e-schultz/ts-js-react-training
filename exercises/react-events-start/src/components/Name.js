import React from "react";

const noop = () => undefined;
const Name = () => {
  /*
  1. Implement an onInput handler to console.log the value as the user types
  2. Implement the onClick handler to display alert with `Hello, {name}!`
  */
  
  return (
    <div>
      <input type="text" onInput={noop} />
      <button type="button" onClick={noop}>Hello!</button>
    </div>
  )
}

export default Name
