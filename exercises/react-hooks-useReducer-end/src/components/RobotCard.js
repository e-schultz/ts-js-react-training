import React from "react";

import Card from "./Card";
import RobotCardImage from "./RobotCardImage";
import CardBody from "./CardBody";
import CardTitle from "./CardBody";
import CardText from "./CardBody";

function RobotCard({ robot, onRemove, onActivate, onDeactivate }) {
  const ROBOT_CLASS = robot.active ? "active" : "inactive";
  let actionButton = robot.active ?  <button onClick={() => onDeactivate(robot.id)}>Deactivate</button> : <button onClick={() => onActivate(robot.id)}>Activate</button>
  return (
    <Card className={ROBOT_CLASS}>
      <RobotCardImage id={robot.name} />
      <CardBody>
        <CardTitle>{robot.name}</CardTitle>
        <CardText>{robot.occupation}</CardText>
      </CardBody>
      <footer>
        <button onClick={() => onRemove(robot.id)}>Remove</button>
        {actionButton}
      </footer>
    </Card>
  );
}

export default RobotCard;
