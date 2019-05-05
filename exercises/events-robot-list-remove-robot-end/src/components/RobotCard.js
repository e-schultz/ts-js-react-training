import React from "react";

import Card from "./Card";
import RobotCardImage from "./RobotCardImage";
import CardBody from "./CardBody";
import CardTitle from "./CardBody";
import CardText from "./CardBody";

function RobotCard({ robot, onRemove }) {
  return (
    <Card>
      <RobotCardImage id={robot.name} />
      <CardBody>
        <CardTitle title={robot.name} />
        <CardText>{robot.username}</CardText>
      </CardBody>
      <footer>
        {/*

Recall in App.js, we are passing down onRemove like:

  <RobotCard
    robot={robot}
    key={robot.id}
    onRemove={() => this.removeRobot(robot.id)}
  />

The function being passed down already knows the robot id, so all we have to
do is call the function, and we do not need to provide the id here.

  */}
        <button onClick={() => onRemove()}>Remove</button>
      </footer>
    </Card>
  );
}

export default RobotCard;
