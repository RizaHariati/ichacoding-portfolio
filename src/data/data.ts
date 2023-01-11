import { ProjectType } from "../context/types.d";
export const projects: ProjectType[] = [
  {
    id: "IC001",
    url: "https://bayarPlanner.com/",
    title: "BayarPlanner",
    slug: "bayarplanner",
    description: [
      " A website design proposal for a local hospital in Bandar Lampung. Inspired by Mayo Clinic's website. A very simple design, easy-to-use, informative but not too crowded with too many useless details.",
      "The core of this website design is Next.JS, supported by Redux Toolkit, Formik, Yup and React leaflet",
      "When I created this website, I just learned Tailwind CSS. And I really like it, so I use it here.",
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
      "This is a project for my own amusement. I love watching movies and Tv shows. But I tend to forget, whether I have watched the show or not. So using Laravel 8, I created the database website. This web also serves as REST API provider, so I can consume the data using other data that I created next. The design is based on the Netflix website design. All the data is thanks to The Movie DB",
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
      " A website design proposal for a local hospital in Bandar Lampung. Inspired by Mayo Clinic's website. A very simple design, easy-to-use, informative but not too crowded with too many useless details.",
      "The core of this website design is Next.JS, supported by Redux Toolkit, Formik, Yup and React leaflet",
      "When I created this website, I just learned Tailwind CSS. And I really like it, so I use it here.",
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
      "This website is based on Facebook's website design, mainly to showcase my ability in accessing and processing data with Rest API. Since the focus is on the API, only some of the elements related to API are functional and the rest is just dummies ",
      "Thanks to DUMMYAPI.IO whose providing free ready to use API Service filled with dummy data",
      "I'm using Next.JS and Typescript as the core of this web design with the help of Redux/toolkit, Redux/persist and Next Redux Wrapper. For styling I use FontAwesome Icons and Tailwind CSS",
    ],
    mainProgram: "Next.js",
    dependencies: "Tailwind CSS, Redux Toolkit, Redux Persist, Formik/Yup",
  },
];

export const aboutData = {
  message: [
    "Hello, I'm Riza Hariati (依扎 / Icha).",
    "Welcome to my portfolio website showcasing a selected few of the websites I have built since 2020. I mostly work on Front End Developing, from design to testing to deployment, but I also dabble on the Back End.",
    "My favorite programming tool is React.JS, but I also enjoy working with Laravel and I have created a few websites using it. ",
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
