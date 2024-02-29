import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: "Inter, sans-serif",
  h1: { fontFamily: "Poppins, sans-serif" },
  h2: { fontFamily: "Poppins, sans-serif" },
  h3: { fontFamily: "Poppins, sans-serif" },
  h4: { fontFamily: "Poppins, sans-serif" },
  h5: { fontFamily: "Poppins, sans-serif" },
  h6: { fontFamily: "Poppins, sans-serif" },
};

const lightPalette = {
  primary: { main: "#1976D2" },
  secondary: { main: "#FF7043" },
  error: { main: "#D32F2F" },
  warning: { main: "#FFA000" },
  info: { main: "#0288D1" },
  success: { main: "#388E3C" },
  background: { default: "#F5F5F5", paper: "#FFFFFF" },
  text: { primary: "#333333", secondary: "#575757" },
  divider: "#BDBDBD",
};

const darkPalette = {
  primary: { main: "#90CAF9" },
  secondary: { main: "#FFAB91" },
  error: { main: "#EF5350" },
  warning: { main: "#FFCA28" },
  info: { main: "#29B6F6" },
  success: { main: "#66BB6A" },
  background: { default: "#121212", paper: "#1E1E1E" },
  text: { primary: "#FFFFFF", secondary: "#BDBDBD" },
  divider: "#424242",
};

export const lightTheme = createTheme({
  palette: lightPalette,
  typography,
});

export const darkTheme = createTheme({
  palette: darkPalette,
  typography,
});
