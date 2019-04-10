/* eslint-disable  no-unused-vars */

const BASE_URL = "https://js-ts-training.now.sh";

let getPlatforms = () => {
  return fetch(`${BASE_URL}/platforms`).then(result => result.json());
};
let getGameById = id => {
  return fetch(`${BASE_URL}/games/${id}`).then(result => result.json());
};

const getGameDetail = id => {
  const gamePromise = getGameById(id);
  const platformPromise = getPlatforms();

  return Promise.all([gamePromise, platformPromise])
  .then(([game, platforms]) => {
    let platform = platforms.find(platform => platform.id === game.platformId);

    return {
      id: game.id,
      name: game.name,
      platformId: game.platformId,
      platform: platform.name
    };
  });
};

export { getGameDetail };
