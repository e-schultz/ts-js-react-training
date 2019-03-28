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

const mockData = [
    {
      id: 1,
      name: "Mock Game 1",
      platformName: "Some Platform"
    },
    {
      id: 2,
      name: "Mock Game 2",
      platformName: "Some Platform"
    },
    {
      id: 3,
      name: "Mock Game 3",
      platformName: "Some Platform"
    }
  ];
const getGameDetailList = () => {
  return delay(1500).then(() => {
    return mockData;
  });
  /*
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
  );*/
};
export {
  getPlatforms,
  getGames,
  getPlatformById,
  getGameById,
  getGameDetailList
};
