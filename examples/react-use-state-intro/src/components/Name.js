import React from "react";

// NameRefactor contains the final solution
// NameCls shows same functionality - but using React.Component

const Name = () => {
  let name = "";
  let onInput = event => {
    name = event.target.value;
    console.log(`Input: ${name}`)
  };
  let onClick = () => alert(`Hello ${name}`);
 
  /*
  1. Modify change handler to use the useState hook to set the name
  2. Modify the input to set the value of the name
  3. Update the button text so it shows Hello {name}! as the user is typing
  */

  return (
    <div>
      <input type="text" onChange={onInput} value={name} />
      <button type="button" onClick={onClick}>
        Hello!
      </button>
    </div>
  );
};

export default Name;
