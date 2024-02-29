import { useState, useEffect, useMemo, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";

import ThemeModeContext from "../contexts/ThemeModeContext";
import { lightTheme, darkTheme } from "../themes/theme";

const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = mode === "light" ? lightTheme : darkTheme;

  const contextValue = useMemo(
    () => ({
      mode,
      toggleThemeMode,
    }),
    [mode]
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
