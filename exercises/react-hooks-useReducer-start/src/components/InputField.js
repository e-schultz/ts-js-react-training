import React from "react";

function InputField({ label, name, value, onChange, ...props }) {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label" htmlFor={name || label}>
          {label}
        </label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input
              className="input"
              name={name || label}
              value={value}
              onChange={onChange}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputField;