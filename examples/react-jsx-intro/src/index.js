import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const HelloWorldJSX = (<h1 className="greeting">
Hello, World!</h1>);


const HelloWorld = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, World!"
);

ReactDOM.render(HelloWorld, document.getElementById("root"));
ReactDOM.render(HelloWorldJSX, document.getElementById("rootjsx"));
