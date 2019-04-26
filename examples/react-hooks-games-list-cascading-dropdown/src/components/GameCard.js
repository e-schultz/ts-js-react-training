import React from "react";
import Block from "./Block";

const GameCard = ({ selected = false, children }) => (
  <Block color={selected ? "red" : "black"}>{children}</Block>
);

GameCard.displayName = "GameCard";

export default GameCard;
