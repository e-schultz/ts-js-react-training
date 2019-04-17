import React, { useReducer } from "react";

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
  let [counter, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div className="App">
      <h1>useReducer - Counter Example</h1>
      <p>The value of the counter is: {counter.count}</p>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>

      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        Decrease
      </button>
    </div>
  );
}

export default App;
