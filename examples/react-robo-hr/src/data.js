const departments = [
  {
    id: 0,
    text: "Technology"
  },
  {
    id: 1,
    text: "Sales"
  },
  {
    id: 2,
    text: "Delivery"
  }
];
const jobTitles = [
  {
    id: 0,
    departmentId: 0,
    text: `Application Development Director`
  },
  {
    id: 1,
    departmentId: 0,
    text: `Chief Technology Officer`
  },
  {
    id: 2,
    departmentId: 0,
    text: `Information Technology Director`
  },
  {
    id: 3,
    departmentId: 1,
    text: "District Sales Manager"
  },
  {
    id: 4,
    departmentId: 1,
    text: "Regional Sales Manager"
  },
  {
    id: 5,
    departmentId: 1,
    text: "Territory Sales Manager"
  },
  {
    id: 6,
    departmentId: 2,
    text: "Applications Developer"
  },
  {
    id: 7,
    departmentId: 2,
    text: "Junior Software Developer"
  },
  {
    id: 8,
    departmentId: 2,
    text: "Computer Systems Security Analyst"
  },
  {
    id: 9,
    departmentId: 2,
    text: "Embedded Systems Software Developer"
  }
];
const INITIAL_ROBOTS = [
  {
    id: 1,
    name: "Leanne Grahamss",
    username: "Bret",
    email: "Sincere@april.biz",
    jobTitleId: 1,
    active: true
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    jobTitleId: 2,
    active: false,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    jobTitleId: 3,
    active: true,
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    jobTitleId: 4,
    active: true,
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    jobTitleId: 5,
    active: false,
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    jobTitleId: 6,
    active: false,
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    jobTitleId: 7,
    active: true,
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    jobTitleId: 8,
    active: true
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    jobTitleId: 9,
    active: false,
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    jobTitleId: 0,
    active: true
  }
];

export { departments, jobTitles, INITIAL_ROBOTS }