import React from "react";
import Icon from "@mdi/react";
import { mdiPowerPlug, mdiPowerPlugOff } from "@mdi/js";

import Card from "../../../lib/components/Card";
import CardImage from "../../../lib/components/CardImage";
import CardContent from "../../../lib/components/CardContent";
import CardaMediaContent from "../../../lib/components/CardMediaContent";
import CardFooter from "../../../lib/components/CardFooter";
import CardFooterItem from "../../../lib/components/CardFooterItem";

const PowerOn = () => (
  <span class="icon is-large">
    <Icon path={mdiPowerPlug} size={3} />
  </span>
);
const PowerOff = () => (
  <span class="icon is-large">
    <Icon path={mdiPowerPlugOff} size={3} />
  </span>
);
const RobotSearchCard = ({ robot, onEdit, onActivate, onDeactivate }) => (
  <Card style={{margin: '1rem'}}>
    <CardImage src={`https://robohash.org/${robot.id}?size=1280x960`} />
    <CardContent>
      <CardaMediaContent renderMediaLeft={robot.active ? PowerOn : PowerOff}>
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
        <button className="button is-fullwidth is-success" disabled={robot.active} onClick={onActivate}>
          Activate
        </button>
      </CardFooterItem>
      <CardFooterItem>
        <button
          className="button is-fullwidth is-warning"
          disabled={!robot.active} 
          onClick={onDeactivate}
        >
          Deactivate
        </button>
      </CardFooterItem>
    </CardFooter>
  </Card>
);

RobotSearchCard.displayName = "RobotSearchCard";
export default RobotSearchCard;
