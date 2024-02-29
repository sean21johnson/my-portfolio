import { useContext } from "react";

import ThemeModeContext from "../contexts/ThemeModeContext";
import type { ThemeModeContextType } from "../contexts/types";

const useThemeMode = (): ThemeModeContextType => useContext(ThemeModeContext);

export default useThemeMode;
