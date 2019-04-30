const PLATFORMS = [
  {
    id: 1,
    name: "PS4"
  },
  {
    id: 2,
    name: "Switch"
  },
  {
    id: 3,
    name: "Wii U"
  },
  {
    id: 4,
    name: "3DS"
  },
  {
    id: 5,
    name: "PC"
  }
];

const GAMES = [
  {
    id: 1,
    dateCreated: "2018-09-11T14:07:46+00:00",
    name: "God of War",
    image: "https://howlongtobeat.com/gameimages/38050_God_of_War.jpg",
    platformId: 1,
    priority: 8,
    numberOfHoursPlayed: 2,
    numberOfHoursToComplete: 19.5,
    isComplete: false
  },
  {
    id: 2,
    dateCreated: "2018-09-11T14:07:46+00:00",
    name: "Octopath Traveler",
    image: "https://howlongtobeat.com/gameimages/53592_Octopath_Traveler.png",
    platformId: 2,
    priority: 10,
    numberOfHoursPlayed: 35,
    numberOfHoursToComplete: 56,
    isComplete: false
  },
  {
    id: 3,
    dateCreated: "2018-09-11T14:07:46+00:00",
    name: "Dragon Quest XI: Echoes of an Elusive Age",
    image:
      "https://howlongtobeat.com/gameimages/39508_Dragon_Quest_XI_In_Search_of_Departed_Time.jpg",
    platformId: 1,
    priority: 10,
    numberOfHoursPlayed: 2,
    numberOfHoursToComplete: 56.5,
    isComplete: false
  },
  {
    id: 4,
    dateCreated: "2018-09-11T14:07:46+00:00",
    name: "Fire Emblem: Fates - Conquest",
    image:
      "https://howlongtobeat.com/gameimages/28381_Fire_Emblem_Fates_-_Conquest.jpg",
    platformId: 4,
    priority: 7,
    numberOfHoursPlayed: 0,
    numberOfHoursToComplete: 26.5,
    isComplete: false
  },
  {
    id: 5,
    dateCreated: "2018-09-11T14:07:46+00:00",
    name: "Bayonetta 2",
    image: "https://howlongtobeat.com/gameimages/250px-Bayonetta_2.jpg",
    platformId: 3,
    priority: 5,
    numberOfHoursPlayed: 0,
    numberOfHoursToComplete: 11,
    isComplete: false
  },
  {
    id: 6,
    dateCreated: "2018-09-11T14:07:46+00:00",
    name: "Marvel's Spider-Man",
    image: "https://howlongtobeat.com/gameimages/44852_Spider-Man_(2017).jpg",
    platformId: 1,
    priority: 9,
    numberOfHoursPlayed: 0.5,
    numberOfHoursToComplete: 15.5,
    isComplete: false
  },
  {
    id: 7,
    dateCreated: "2018-10-04T00:00:00+00:00",
    name: "Mega Man 11",
    image: "https://howlongtobeat.com/gameimages/51164_Mega_Man_11.png",
    platformId: 2,
    priority: 8,
    numberOfHoursPlayed: 0,
    numberOfHoursToComplete: 10,
    isComplete: false
  },
  {
    id: 8,
    dateCreated: "2018-09-11T14:07:46+00:00",
    name: "The Legend of Zelda: Breath of the Wild",
    image:
      "https://howlongtobeat.com/gameimages/38019_The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    platformId: 2,
    priority: 10,
    numberOfHoursPlayed: 90,
    numberOfHoursToComplete: 121,
    isComplete: true
  },
  {
    id: 9,
    dateCreated: "2018-09-11T14:07:46+00:00",
    name: "Super Mario Odyssey",
    image: "https://howlongtobeat.com/gameimages/42833_Super_Mario_Odyssey.jpg",
    platformId: 2,
    priority: 10,
    numberOfHoursPlayed: 12.5,
    numberOfHoursToComplete: 25,
    isComplete: true
  }
];

export { PLATFORMS, GAMES }