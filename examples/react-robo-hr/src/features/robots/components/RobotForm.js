import React, { useState } from "react";

import Card from "../../../lib/components/Card";
import CardImage from "../../../lib/components/CardImage";
import CardContent from "../../../lib/components/CardContent";
import CardMediaContent from "../../../lib/components/CardMediaContent";
import CardFooter from "../../../lib/components/CardFooter";
import CardFooterItem from "../../../lib/components/CardFooterItem";
import SelectList from "../../../lib/components/SelectList";
import InputField from "../../../lib/components/InputField";

// TODO: have departments and jobTitles be provided from parent



const RobotForm = ({ robot, onSubmit, departments, jobTitles }) => {
  const [editRobot, setRobot] = useState({ ...robot });
  return (
    <Card>
      <CardImage src={`https://robohash.org/${editRobot.id}?size=1280x960`} />
      <CardContent>
        <CardMediaContent
          src={`https://robohash.org/${editRobot.id}?size=96x96`}
        >
          <InputField
            type="text"
            placeholder="Robot Name"
            value={editRobot.name}
            onChange={({ target: { value } }) =>
              setRobot(state => ({
                ...state,
                name: value
              }))
            }
          />

          <InputField
            placeholder="UserName"
            value={editRobot.username}
            onChange={({ target: { value } }) =>
              setRobot(state => ({
                ...state,
                username: value
              }))
            }
          />
        </CardMediaContent>
        <SelectList
          options={departments}
          value={editRobot.departmentId}
          onChange={({ target: { value } }) =>
            setRobot(state => ({
              ...state,
              departmentId: +value,
              jobTitleId: -1
            }))
          }
        />

        <SelectList
          options={jobTitles.filter(
            ({ departmentId }) => departmentId === editRobot.departmentId
          )}
          value={editRobot.jobTitleId}
          onChange={({ target: { value } }) =>
            setRobot(state => ({
              ...state,
              jobTitleId: +value
            }))
          }
        />
      </CardContent>
      <CardFooter>
        <CardFooterItem>
          <button
            className="button is-fullwidth is-primary"
            onClick={() => {
              onSubmit({ type: "SAVE", robot: editRobot });
            }}
          >
            Save
          </button>
        </CardFooterItem>
        <CardFooterItem>
          <button
            className="button is-fullwidth is-normal"
            onClick={() => {
              onSubmit({ type: "CANCEL" });
            }}
          >
            Cancel
          </button>
        </CardFooterItem>
      </CardFooter>
    </Card>
  );
};

RobotForm.displayName = "RobotForm";
export default RobotForm;
