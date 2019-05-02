import React from "react";
const SelectList = ({
  options,
  value,
  onChange,
  children,
  config = { keyKey: "id", valueKey: "id", textKey: "text" }
}) => {
  let { keyKey, valueKey, textKey } = config;
  return (
    <span className="select">
      <select value={value} onChange={onChange}>
        {children}
        {options.map(option => {
          return (
            <option key={option[keyKey]} value={option[valueKey]}>
              {option[textKey]}
            </option>
          );
        })}
      </select>
    </span>
  );
};

SelectList.displayName = "SelectList";

export default SelectList;
