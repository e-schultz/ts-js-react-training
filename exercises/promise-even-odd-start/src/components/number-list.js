import React from "react";
function NumberList({numbers}) {
  return (
    <ul>
      {numbers.map((number, index) => {
        return (<li key={index}>{number}</li>)
      })}
    </ul>
  );
}

export default NumberList;
