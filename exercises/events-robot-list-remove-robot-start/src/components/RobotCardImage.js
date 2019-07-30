import React from "react";

import CardImage from './CardImage';

function RobotCardImage({ id }) {
  return <CardImage src={`https://robohash.org/${id}?size=200x200`} />;
}

export default RobotCardImage