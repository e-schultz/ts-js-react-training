import React from "react";

import Card from "./Card";
import RobotCardImage from "./RobotCardImage";
import CardBody from "./CardBody";
import CardTitle from "./CardBody";
import CardText from "./CardBody";

function RobotCard({ robot, onRemove, ...props }) {
  console.log(`received other props:`,props)
  const ROBOT_CLASS = robot.active ? "active" : "inactive";
  
  return (
    <Card className={ROBOT_CLASS}>
      <RobotCardImage id={robot.name} />
      <CardBody>
        <CardTitle>{robot.name}</CardTitle>
        <CardText>{robot.occupation}</CardText>
      </CardBody>
      <footer>
        <button onClick={() => onRemove(robot.id)}>Remove</button>
        <button>Deactivate</button>
        <button>Activate</button>
      </footer>
    </Card>
  );
}

export default RobotCard;
