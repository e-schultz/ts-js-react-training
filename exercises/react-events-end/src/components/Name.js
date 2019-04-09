import React from "react";

const Name = () => {
  let name = "";
  let onInput = event => {
    name = event.target.value;
    console.log(`Input: ${name}`)
  };
  let onClick = () => alert(`Hello ${name}`);
  /*
  1. Implement an onInput handler to console.log the value as the user types
  2. Implement the onClick handler to display alert with `Hello, {name}!`
  */

  return (
    <div>
      <input type="text" onInput={onInput} />
      <button type="button" onClick={onClick}>
        Hello!
      </button>
    </div>
  );
};

export default Name;
