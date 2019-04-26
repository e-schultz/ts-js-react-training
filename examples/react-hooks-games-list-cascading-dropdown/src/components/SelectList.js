import React from "react";

// since `SelectOptions` is only used by the  SelectList
// component, we are not exporting it

const SelectOptions = ({ selections }) => {
  return selections.map(({ id, name }) => {
    return (
      <option value={id} key={id}>
        {name}
      </option>
    );
  });
};

SelectOptions.displayName = "SelectOptions";

const SelectList = ({ selectedValue, onSelectChange, selections }) => {
  return (
    <select
      value={selectedValue}
      onChange={event => onSelectChange(event.target.value)}
    >
      <option value={"-1"}>All</option>
      <SelectOptions selections={selections} />
    </select>
  );
};

SelectList.displayName = "SelectList";

export default SelectList;
