import { useState, useEffect } from "react";
import { getPlatforms } from "../services/games-service";

const usePlatforms = () => {
  let [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    getPlatforms().then(platforms => {
      setPlatforms(platforms);
    });
  }, []);

  return [platforms];
};

export default usePlatforms;
