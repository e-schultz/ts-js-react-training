import React from "react";

// Change to class component
// put count onto state in constructor
// create a clickHandler that increases the value of count
// setup onClick event
// completed version in HelloWorldCls.js

function HelloWorld(props) {
  
  return (
    <section>
      {`${props.text} - clicked ${0} times`}
      <button>Click Me</button>
    </section>
  ); 
}


export default HelloWorld;
