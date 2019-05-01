import React from "react";

const CardFooter = ({ children, ...props }) => (
  <footer className="card-footer">{children}</footer>
);

CardFooter.displayName = "CardFooter";

export default CardFooter;
