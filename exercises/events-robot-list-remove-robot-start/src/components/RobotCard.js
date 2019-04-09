import React from "react";

import Card from "./Card";
import RobotCardImage from "./RobotCardImage";
import CardBody from "./CardBody";
import CardTitle from "./CardBody";
import CardText from "./CardBody";

/*
1. Add a callback prop called `removeRobot` to the props 
   that this component is expecting
2. Add an onClick handler to the remove button, that invokes the callback

*/
function RobotCard({ robot }) {
  return (
    <Card>
      <RobotCardImage id={robot.name} />
      <CardBody>
        <CardTitle title={robot.name} />
        <CardText>{robot.username}</CardText>
      </CardBody>
      <footer>

          <button>Remove</button>
      </footer>
    </Card>
  );
}

export default RobotCard;
