import { useMediaQuery, useTheme } from "@mui/material";

const useScreenBreakpoints = () => {
  const theme = useTheme();

  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumBreakpoint = useMediaQuery(theme.breakpoints.down("md"));

  const mobileScreen = smallBreakpoint;
  const narrowScreen = mediumBreakpoint && !smallBreakpoint;
  const wideScreen = !mediumBreakpoint && !smallBreakpoint;

  const mobileScreenOnly = mobileScreen && !narrowScreen && !wideScreen;
  const narrowScreenOnly = !mobileScreen && narrowScreen && !wideScreen;
  const wideScreenOnly = !mobileScreen && !narrowScreen && wideScreen;

  return { mobileScreenOnly, narrowScreenOnly, wideScreenOnly };
};

export default useScreenBreakpoints;
