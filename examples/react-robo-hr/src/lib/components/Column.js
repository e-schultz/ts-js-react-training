import React from "react";
import classNames from "classnames";

// todo - have easier api to specify size/offset without needing to look up bulma docss

const getSize = (size) => typeof size === 'number' ? parseFloat(size.toFixed(2)) : undefined
const Column = ({
  className,
  size,
  children,
  ...props
}) => {
  const normalizedSize = getSize(size)
  var columnClass = classNames('column', className, {
    'is-one-third': normalizedSize === 0.33,
    'is-three-quarters': normalizedSize === 0.75,
    'is-half': normalizedSize === 0.5,
    'is-one-quater': normalizedSize === 0.25,
    'is-four-fiths': normalizedSize === 0.8,
    'is-three-fiths': normalizedSize === 0.6,
    'is-two-fiths': normalizedSize === 0.4,
    'is-one-fith': normalizedSize === 0.2,
    'is-full': normalizedSize === 1,

  });
  return <div className={columnClass}>{children}</div>;
};

Column.displayName = "Column";

export default Column;
