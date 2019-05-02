import React, { useState } from "react";

import SelectList from "../../../lib/components/SelectList";

const RobotSearchBar = ({departments, selectedDepartmentId, searchTerm, onDepartmentSelect, onSearchTermChange}) => {
 
  return (
    <div className="field has-addons">
      <p className="control">
        <SelectList
          options={departments}
          value={selectedDepartmentId}
          onChange={event => onDepartmentSelect(+event.target.value)}
        />
      </p>

      <p className="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={event => onSearchTermChange(event.target.value)}
        />
      </p>
      {/*<p className="control">
<a className="button">Search</a>
</p>*/}
    </div>
  );
};

RobotSearchBar.displayName = "RobotSearchBar";
export default RobotSearchBar;
