import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const helloWorldJSX = (<h1 className="greeting">
Hello, World!</h1>);


const helloWorld = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, World!"
);

console.log(helloWorld);

ReactDOM.render(helloWorld, document.getElementById("root"));
ReactDOM.render(helloWorldJSX, document.getElementById("rootjsx"));
