import React from "react";

const CardFooterItem = ({ children, ...props }) => (
  <p className="card-footer-item">{children}</p>
);

CardFooterItem.displayName = "CardFooterItem";

export default CardFooterItem;
