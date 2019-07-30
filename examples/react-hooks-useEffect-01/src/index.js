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
    <div className="box-container">
      <div>
        <h3 className="title"> Box 1 </h3>
        <div className="box">
          {count}
        </div>
        <button onClick={() => setCount(count + 1)}>
          Increment Box 1 Counter
        </button>
      </div>
      <div>
        <h3 className="title"> Box 2 </h3>
        <div className="box">
          {count2}
        </div>
        <button onClick={() => setCount2(count2 + 1)}>
          Increment Box 2 Counter
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
