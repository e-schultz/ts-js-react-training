import React from "react";

function HelloWorld(props) {
  let count = 0;
 
  return (
    <section>
      {`${props.text} - clicked ${count} times`}
      <button>Click Me</button>
    </section>
  ); 
}


export default HelloWorld;
