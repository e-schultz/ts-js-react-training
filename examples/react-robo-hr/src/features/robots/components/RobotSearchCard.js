import React from "react";
import Card from "../../../lib/components/Card";
import CardImage from "../../../lib/components/CardImage";
import CardContent from "../../../lib/components/CardContent";
import CardaMediaContent from "../../../lib/components/CardMediaContent";
import CardFooter from "../../../lib/components/CardFooter";
import CardFooterItem from "../../../lib/components/CardFooterItem";

const RobotSearchCard = ({ robot, onEdit }) => (
  <Card>
    <CardImage src={`https://robohash.org/${robot.id}?size=1280x960`} />
    <CardContent>
      <CardaMediaContent src={`https://robohash.org/${robot.id}?size=96x96`}>
        <p className="title is-4">{robot.name}</p>
        <p className="subtitle is-6">@{robot.username}</p>
      </CardaMediaContent>
      {robot.department} - {robot.jobTitle}
    </CardContent>
    <CardFooter>
      <CardFooterItem>
        <button className="button is-fullwidth is-primary" onClick={onEdit}>
          Edit
        </button>
      </CardFooterItem>
      <CardFooterItem>
        <button className="button is-fullwidth is-normal">Activate</button>
      </CardFooterItem>
      <CardFooterItem>
        <button className="button is-fullwidth is-warning">Deactivate</button>
      </CardFooterItem>
    </CardFooter>
  </Card>
);

RobotSearchCard.displayName = "RobotSearchCard"
export default RobotSearchCard;