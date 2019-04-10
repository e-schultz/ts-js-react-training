/* eslint-disable  no-unused-vars */

const BASE_URL = "https://js-ts-training.now.sh";

let getPlatforms = () => {
  return fetch(`${BASE_URL}/platforms`)
    .then(result => result.json())
    
};
let getGameById = id => {
  return fetch(`${BASE_URL}/games/${id}`)
    .then(result => result.json())
};

const getGameDetail = id => {
  // Get a game by id
  // Get all of the platforms
  // use Promise.all to combine the results and transform the object
  return Promise.resolve({
    id: "gameId",
    name: "game name",
    platformId: "platformId",
    platform: "platform name"
  });
};

export { getGameDetail };
