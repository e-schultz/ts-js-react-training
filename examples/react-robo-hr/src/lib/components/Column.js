import React from "react";
import classNames from "classnames";

// todo - have easier api to specify size/offset without needing to look up bulma docss

const Column = ({
  className,
  size,
  children,
  ...props
}) => {
  var columnClass = classNames('column', className, {
    'is-one-third': size && typeof size === 'number' && size.toFixed(2) === '0.33'
  });
  return <div className={columnClass}>{children}</div>;
};

Column.displayName = "Column";

export default Column;
