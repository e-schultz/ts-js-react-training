import React from "react";

const Card = ({ children, ...props }) => <div className="card">{children}</div>;

Card.displayName = "Card";

export default Card;
