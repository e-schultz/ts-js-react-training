import React from "react";

import Input from "./Input";
import Field from "./Field";
import Control from "./Control";

const InputField = ({ name, ...props }) => {
  console.log('what');
  return (
    <Field>
      {!!name ? <label className="label">{name}</label> : null}
      <Control>
        <Input {...props} />
      </Control>
    </Field>
  );
};

InputField.displayName = "InputField";

export default InputField;
