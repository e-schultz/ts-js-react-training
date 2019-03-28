const BASE_URL = "https://js-ts-training.now.sh";

const getPlatforms = () => {
  return fetch(`${BASE_URL}/platforms`).then(response => response.json());
};

const getGames = () => {
  return fetch(`${BASE_URL}/games`).then(response => response.json());
};
const getPlatformById = id => {
  return fetch(`${BASE_URL}/platforms/${id}`).then(response => response.json());
};

const getGameById = id => {
  return fetch(`${BASE_URL}/games/${id}`).then(response => response.json());
};

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
};

const getGameDetailList = () => {
  
  return Promise.all([getGames(), getPlatforms()]).then(
    ([games, platforms]) => {
      return games.map(({ id, name, platformId }) => {
        return {
          id,
          name,
          platformName: platforms.find(n => n.id === platformId).name
        };
      });
    }
  );
};
export {
  getPlatforms,
  getGames,
  getPlatformById,
  getGameById,
  getGameDetailList
};
