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
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function RobotImage({ id }) {
  return <CardImage src={`https://robohash.org/${id}?size=200x200`} />;
}

/*
The Card Components remain as reusable building blocks
But we can create a 'RobotCard' that is specific
to the layout of a robot.
*/
function RobotCard({ robot }) {
  return (
    <Card>
      <RobotImage id={robot.name} />
      <CardBody>
        <CardTitle title={robot.name} />
        <CardText>{robot.occupation}</CardText>
      </CardBody>
    </Card>
  );
}
function RobotList({ robots }) {
  return robots.map(robot => {
    return (
      <Card>
        <RobotImage id={robot.name} />
        <CardBody>
          <CardTitle title={robot.name} />
          <CardText>{robot.occupation}</CardText>
        </CardBody>
      </Card>
    );
  });
}

function App() {
  return (
    <div className="App">
      <RobotList robots={ROBOT_LIST} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
