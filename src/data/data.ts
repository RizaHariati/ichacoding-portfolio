import { ProjectType } from "../context/types.d";
export const projects: ProjectType[] = [
  {
    id: "IC001",
    url: "https://bayarPlanner.com/",
    title: "BayarPlanner",
    slug: "bayarplanner",
    description: [
      "BayarPlanner is a website that schedules and records daily financial transactions, also calculates data to create simple invoices.",

      "Created using React JS, makes it easier to work with a lot of date-related libraries, such as React DatePicker and DayJS",

      "Even so, the main calendar design is costumed made instead of using a ready-use library, so it can have more flexibility to handle different functions accordingly to activities that may be different each day.",
    ],
    mainProgram: "React.js",
    dependencies:
      "Tailwind CSS,Typescript, useContext, useReducer, React datepicker",
  },
  {
    id: "IC002",
    url: "https://sudahnonton.000webhostapp.com/",
    title: "SudahNonton",
    slug: "sudahnonton",
    description: [
      "SudahNonton is a movie and TV Shows database website that also serves as REST API provider that can be consumed by other websites or applications.",

      "The design is based on the Netflix website design using real data for The Movie DB and I chose to use Laravel so it can be used as Front end as well as Back End at the same time.",

      "I watched and I like all of the movies and TV shows that are shown on this website, so people will be able to watch it if they need a recommendation for movie night ",
    ],
    mainProgram: "Laravel 8",
    dependencies: "Laravel-mix, Bootstrap, Axios, Sass",
  },

  {
    id: "IC003",

    url: "https://rsuripsumoharjo-model.netlify.app/",
    title: "RS Urip Sumoharjo",
    slug: "rs-uripsumoharjo",
    description: [
      "A website design proposal for a local hospital in Bandar Lampung. The design wasn't approved by my client but I can keep it for my own portfolio",

      "Inspired by Mayo Clinic's website. A very simple design, easy-to-use, informative but not too crowded with too many useless details.",

      "The core of this website design is Next.JS, supported by Redux Toolkit, Formik, Yup, and React leaflet",
    ],
    mainProgram: "Next.js",
    dependencies: "Typescript, Tailwind CSS, Redux Toolkit, Formik/Yup",
  },
  {
    id: "IC004",

    url: "https://azriclone.netlify.app/",
    title: "AzriClone",
    slug: "azriclone",
    description: [
      "This website is based on Facebook's website design, mainly to showcase my ability in accessing and processing data with Rest API.",

      "All mock-up data in this website are from DUMMYAPI.IO, a free ready-to-use API Service filled with dummy data",

      "Combining Typescript with Redux/toolkit, Redux/persist and Next Redux Wrapper, was a bit of a challenge for me, but turned out to be very useful for later use",
    ],
    mainProgram: "Next.js",
    dependencies: "Tailwind CSS, Redux Toolkit, Redux Persist, Formik/Yup",
  },
];

export const aboutData = {
  message: [
    "Hello, I'm Riza Hariati (依扎 / Icha).",
    "Welcome to the IchaCodes portfolio website showcasing a selected few of the websites I have built since 2020.",
    "I mostly work on Front End Developing, from design to testing to deployment, and I also dabble on the Back End creating simple CRUD data. My favorite programming tool is React.JS, but I also enjoy working with Laravel and created a few websites using it.",
    "I have also used Java to help me learn algorithms and data structure, which was so much fun for me.",
    "Thank you for visiting!",
  ],

  frontEnd:
    "Javascript/Css/Html, TypeScript, Java, React.JS, React Native, Gatsby.JS, Next.JS",

  backEnd: "Node.JS, Express.JS, Laravel 8, MySQL, Mongodb",
  testing: "Cypress",
  design:
    "Photoshop, Material-UI, Tailwinds CSS, Bootstrap, Figma, Sketchup, 3dsMax, AutoCAD",
};
