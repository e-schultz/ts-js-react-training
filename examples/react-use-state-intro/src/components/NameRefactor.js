import React, { useState } from "react";

 /*
  1. Modify input handler to use the useState hook to set the name
  2. Modify the input to set the value of the name
  3. Update the button text so it shows Hello {name}! as the user is typing
  */

const Name = () => {
  let [name, setName] = useState("");
  let onClick = () => alert(`Hello ${name}`);
  
  return (
    <div>
      <input
        type="text"
        onChange={evt => setName(evt.target.value)}
        value={name}
      />
      <button type="button" onClick={onClick}>
        Hello {name}!
      </button>
    </div>
  );
};

export default Name;
