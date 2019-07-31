import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ROBOT_LIST } from "./robots";

// Create the other card components
// can use hard coded data for now if you want

function CardImage(props) {
  return <img src={props.src} alt="Avatar" />;
}

// body contains
// a header, and text
// Recall the ArticleLayout composed vs uncomposed
// example

function CardBody(props) {
  return <section class="container">{props.children}</section>;
}

function CardText(props) {
  return <>{props.children}</>;
}
function CardTitle(props) {
  return (
    <h4>
      <b>{props.title}</b>
    </h4>
  );
}

// Needing to know the specifics of how to form
// the url to get the source seems a bit much
// for a generic card.
// can we make this more reusable?

function Card(props) {
  return (
    <div class="card">
      <CardImage
        src={`https://robohash.org/${props.robot.name}?size=200x200`}
      />
      <CardBody>
        <CardTitle title={props.robot.name} />
        <CardText>{props.robot.occupation}</CardText>
      </CardBody>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {ROBOT_LIST.map(robot => {
        return <Card robot={robot} />;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
