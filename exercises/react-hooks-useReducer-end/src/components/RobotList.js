import React from "react";

import RobotCard from "./RobotCard";

function RobotList({ robots, onRemove, onActivate, onDeactivate, ...props }) {
  return robots.map(robot => (
    <RobotCard
      key={robot.id}
      onRemove={onRemove}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
      robot={robot}
    />
  ));
}

export default RobotList;
