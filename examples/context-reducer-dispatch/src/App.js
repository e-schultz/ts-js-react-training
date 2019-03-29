import React, { useReducer, useContext } from "react";
import "./App.css";

const NumberDispatch = React.createContext(null);

function Sum({ number1, number2 }) {
  return (
    <section>
      {number1} + {number2} = {number1 + number2}
    </section>
  );
}

function Number({ id }) {
  const dispatch = useContext(NumberDispatch);
  return (
    <input
      onChange={event =>
        dispatch({
          type: "setNumber",
          id,
          value: parseFloat(event.target.value)
        })
      }
    />
  );
}

function numberReducer(state, action) {
  switch (action.type) {
    case "setNumber":
      return { ...state, [action.id]: action.value };
    default:
      return state;
  }
}
function AnotherWrapper(props) {
  return (
    <div>
      <Number id="number2" />
    </div>
  );
}
function DeepNumber(props) {
  return (
    <div>
      <AnotherWrapper />
    </div>
  );
}
const initialState = {
  number1: 0,
  number2: 0
};

function App() {
  const [{ number1, number2 }, dispatch] = useReducer(
    numberReducer,
    initialState
  );

  return (
    <>
      <NumberDispatch.Provider value={dispatch}>
        <Number id="number1" />
        <DeepNumber />
        <Sum number1={number1} number2={number2} />
      </NumberDispatch.Provider>
    </>
  );
}
export default App;
