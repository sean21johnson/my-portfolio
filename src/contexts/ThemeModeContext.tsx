import { createContext } from "react";

import type { ThemeModeContextType } from "./types";

const defaultContext: ThemeModeContextType = {
  mode: "light",
  toggleThemeMode: () => {},
};

const ThemeModeContext = createContext<ThemeModeContextType>(defaultContext);

export default ThemeModeContext;
