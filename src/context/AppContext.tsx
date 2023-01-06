import { createContext } from "react";
import { AppState } from "./interfaces";

export type AppContextProps = {
  state: AppState;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
