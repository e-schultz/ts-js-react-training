import React from "react";
import GameCard from "./GameCard";

const GameList = ({ games, selectedId = -1 }) =>
  games.map(({ id, name, platformName }) => (
    <GameCard key={id} selected={id === selectedId}>
      {name} - {platformName}
    </GameCard>
  ));

GameList.displayName = "GameList";

export default GameList;
