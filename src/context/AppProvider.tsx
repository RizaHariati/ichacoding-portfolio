import React, { useContext, useReducer } from "react";
import { appReducer } from "../reducer/AppReducer";
import { AppContext } from "./AppContext";
import { initialState } from "./initialstate";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
