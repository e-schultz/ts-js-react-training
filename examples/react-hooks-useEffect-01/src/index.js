import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let effectCount = 0;

function ExampleOne() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  
/*
- Try adding an empty array as a second paramater to useEffect
  - what happens? why?
- Try setting the array to be: [count]
  - what happens? why?
*/
  useEffect(() => {
    console.log(`Effect has been run ${++effectCount} times`);
    // Update the document title using the browser API
    document.title = `You clicked Button 1 ${count} times`;
  });

  return (
    <div className="container">
      <div className="demo-box">
        <p> Button 1 Counter </p>
        <div className="box">
          {count}
        </div>
        <button onClick={() => setCount(count + 1)}>
          Button 1 - Click Me
        </button>
      </div>
      <div className="demo-box">
        <p> Button 2 Counter </p>
        <div className="box">
          {count2}
        </div>
        <button onClick={() => setCount2(count2 + 1)}>
          Button 2 - Click me
        </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <ExampleOne/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
