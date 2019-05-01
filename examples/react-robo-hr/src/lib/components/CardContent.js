import React from "react";

const CardContent = ({ children, ...props }) => (
  <div className="card-content">{children}</div>
);

CardContent.displayName = "CardContent";

export default CardContent;
