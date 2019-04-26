import { useState, useEffect } from "react";
import { getGameDetailList } from "../services/games-service";

const useGameDetailList = platformId => {
  let [isLoading, setIsLoading] = useState(true);
  let [games, setGames] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getGameDetailList(platformId).then(result => {
      setIsLoading(false);
      setGames(result);
    });
  }, [platformId]);

  return [games, isLoading];
};

export default useGameDetailList;
