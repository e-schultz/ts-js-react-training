import React from "react";

const Block = ({ color = "red", children }) => (
  <div
    style={{
      border: `2px solid ${color}`,
      display: "block",
      height: "1rem",
      padding: "1rem",
      margin: "1rem",
      width: "75%"
    }}
  >
    {children}
  </div>
);

Block.displayName = "Block";

export default Block;
