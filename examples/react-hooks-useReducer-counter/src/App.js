import React from "react";
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const INITIAL_STATE = { count: 0 };

function App() {
  // completed example in AppComplete.js
  return (
    <div className="App">
      <h1>useReducer - Counter Example</h1>
      <p>The value of the counter is: 0</p>

      <button type="button">Increase</button>

      <button type="button">Decrease</button>
    </div>
  );
}

export default App;
