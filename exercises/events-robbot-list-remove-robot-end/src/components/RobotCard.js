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
          <button onClick={()=>onRemove(robot)}>Remove</button>
      </footer>
    </Card>
  );
}

export default RobotCard;
