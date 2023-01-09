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
    dependencies: [
      "Tailwind CSS",
      "Typescript",
      "useContext",
      "useReducer",
      "react-router-dom",
      "React datepicker",
    ],
  },
  {
    id: "IC002",
    url: "https://rsuripsumoharjo-model.netlify.app/",
    title: "RS Urip Sumoharjo",
    slug: "rs_uripsumoharjo",
    description: [
      " A website design proposal for a local hospital in Bandar Lampung. Inspired by Mayo Clinic's website. A very simple design, easy-to-use, informative but not too crowded with too many useless details.",
      "The core of this website design is Next.JS, supported by Redux Toolkit, Formik, Yup and React leaflet",
      "When I created this website, I just learned Tailwind CSS. And I really like it, so I use it here.",
    ],
    mainProgram: "Next.js",
    dependencies: ["Tailwind CSS", "Redux Toolkit", "Formik/Yup"],
  },
  {
    id: "IC003",
    url: "https://sudahnonton.000webhostapp.com/",
    title: "SudahNonton",
    slug: "sudahnonton",
    description: [
      "This is a project for my own amusement. I love watching movies and Tv shows. But I tend to forget, whether I have watched the show or not. So using Laravel 8, I created the database website. This web also serves as REST API provider, so I can consume the data using other data that I created next. The design is based on the Netflix website design. All the data is thanks to The Movie DB",
    ],
    mainProgram: "Laravel 8",
    dependencies: ["Tailwind CSS", "Redux Toolkit", "Formik/Yup"],
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
    dependencies: ["Laravel-mix", "Bootstrap", "Axios", "Sass"],
  },
];

export const aboutData = [
  {
    id: "about01",
    title: "Development Tools",
    tools: [
      "Javascript/Css/Html",
      "TypeScript",
      "Java",
      "React.JS",
      "React Native",
      "Gatsby.JS",
      "Next.JS",
      "Node.JS",
      "Express.JS",
      "Laravel",
      "MySQL",
      "Mongodb",
    ],
  },
  {
    id: "about02",
    title: "Design Tools",
    tools: [
      "Photoshop",
      "Material-UI",
      "Tailwinds CSS",
      "Figma",
      "Sketchup",
      "3dsMax",
      "AutoCAD",
    ],
  },
];

// const oldProjects = [
//   {
//     id: "azri001",
//     url: "https://rsuripsumoharjo-model.netlify.app/",
//     type: "Website",
//     title: "RS. Urip Sumoharjo",
//     imageLink: "Web1",
//     text: [
//       " A website design proposal for a local hospital in Bandar Lampung. Inspired by Mayo Clinic's website. A very simple design, easy-to-use, informative but not too crowded with too many useless details.",
//       "The core of this website design is Next.JS, supported by Redux Toolkit, Formik, Yup and React leaflet",
//       "When I created this website, I just learned Tailwind CSS. And I really like it, so I use it here.",
//     ],
//     images: ["urip-website", "urip-phone"],
//   },
//   {
//     id: "azri002",
//     url: "https://rs-urip-sumoharjo-api.herokuapp.com/",
//     type: "Documentation",
//     title: "RS.Urip Sumoharjo API",
//     imageLink: "Web2",
//     text: [
//       "A fake API documentation site providing data for RS Urip Sumoharjo website. Made using Node.JS, Express.JS and Swagger UI.",
//       "I'm using MongoDB as NoSQL database program with the help of Mongoose library  ",
//     ],
//     images: ["urip-api-website", "urip-api-phone"],
//   },
//   {
//     id: "azri003",
//     url: "https://pancakepluspasta.netlify.app/",
//     type: "Website",
//     title: "Pancake plus Pasta",
//     imageLink: "Web3",
//     text: [
//       "A simple e-commerce website where you can order as a guest or as a member. Using a map and a phone number to identify the customer. After register, customer can put the food and beverages into the cart list, and then put the order in. And paying in cash",
//       "This website uses Gatsby JS with the support of Contentful to manage the website's content which later accessed using GraphQL ",
//       "Since the website is very simple I chose to use useContext and useReducer instead of Redux",
//       "For styling I'm using the good old Material UI",
//     ],
//     images: ["P3-website", "P3-phone"],
//   },
//   {
//     id: "azri004",
//     url: "https://azriclone.netlify.app/",
//     type: "Website",
//     title: "AzriClone",
//     imageLink: "Web4",
//     text: [
//       "This website is based on Facebook's website design, mainly to showcase my ability in accessing and processing data with Rest API. Since the focus is on the API, only some of the elements related to API are functional and the rest is just dummies ",
//       "Thanks to DUMMYAPI.IO whose providing free ready to use API Service filled with dummy data",
//       "I'm using Next.JS and Typescript as the core of this web design with the help of Redux/toolkit, Redux/persist and Next Redux Wrapper. For styling I use FontAwesome Icons and Tailwind CSS",
//     ],
//     images: ["azribook-website", "azribook-phone"],
//   },

//   {
//     id: "azri005",
//     url: "https://sudahnonton.000webhostapp.com/",
//     type: "Website",
//     title: "SudahNonton-API",
//     imageLink: "Web5",
//     text: [
//       "This is a project for my own amusement. I love watching movies and Tv shows. But I tend to forget, whether I have watched the show or not. So using Laravel 8, I created the database website. This web also serves as REST API provider, so I can consume the data using other data that I created next. The design is based on the Netflix website design. All the data is thanks to The Movie DB",
//       "For styling I'm using Bootstrap and Bootstrap Icons",
//     ],
//     images: ["sudahnonton-api-website", "sudahnonton-api-phone"],
//   },
// {
//   id: "azri006",
//   url: "https://expo.dev/@rizahariati/sudahnonton-client",
//   type: "Website",
//   title: "SudahNonton-Client",
//   imageLink: "Web6",
//   text: [
//     "I watched so many movies and tv shows over the years, so when I'm about to watch a new show, I want to check whether I've already watched it or not. That's what this app is for. With my phone, I can check anywhere, anytime, all of those shows. \n This is an Android App that can access the database from the Rest API that I've created earlier. I can also add a new show, put shows on my watch list, if I want to watch it again. Other users can also use this app if they are looking for ideas of what movies or tv shows they are going to watch next. All the data is thanks to The Movie DB",
//     "For styling, I'm using React Native Paper, because it's similar to Material UI which I've used in some of my React.JS projects",
//   ],
//   images: [
//     "sudahnonton-client-3-phone",
//     "sudahnonton-client-2-phone",
//     "sudahnonton-client-1-phone",
//   ],
// },
// ];
