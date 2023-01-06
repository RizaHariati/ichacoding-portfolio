import React from "react";
import { AppProvider } from "../gatsby-portfolio/src/context/AppContext";
import "./src/styles/index.css";

const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

export { wrapRootElement };
