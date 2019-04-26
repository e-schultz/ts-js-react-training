import React, { useState } from "react";
import "./App.css";
import usePlatforms from "./hooks/usePlatforms";
import useGameDetailList from "./hooks/useGameDetailList";

import GameList from "./components/GameList";
import SelectList from "./components/SelectList";
import IsLoading from "./components/IsLoading";

function App() {
  let [gameId, setGameId] = useState(-1);
  let [platformId, setPlatformId] = useState(-1);
  let [platforms] = usePlatforms();
  let [games, isLoading] = useGameDetailList(platformId);

  return (
    <>
      <SelectList
        selections={platforms}
        onSelectChange={value => setPlatformId(parseFloat(value))}
        selectedValue={platformId}
      />

      <hr />
      <SelectList
        selections={games}
        selectedValue={gameId}
        onSelectChange={value => setGameId(parseFloat(value))}
      />
      <hr />
      <div className="App">
        <IsLoading isLoading={isLoading}>
          <GameList games={games} selectedId={gameId} />
        </IsLoading>
      </div>
    </>
  );
}

export default App;
