import React from "react";

const SumComponent = ({ num1, num2 }) => (
  <div>
    <h3>
      {num1} + {num2} =
    </h3>
    <strong>{num1 + num2}</strong>
  </div>
);

function PropsIntroExercise() {
  return (
    <div className="App">
      <SumComponent num1={5} num2={10} />
    </div>
  );
}

export default PropsIntroExercise;
