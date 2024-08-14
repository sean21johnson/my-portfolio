import { useMediaQuery, useTheme } from '@mui/material';

const useScreenBreakpoints = () => {
  const theme = useTheme();

  const smallBreakpoint = useMediaQuery('(max-width: 670px)');
  const mediumBreakpoint = useMediaQuery('(max-width: 900px)');
  const alternativeBreakpoint = useMediaQuery('(max-width: 1200px)');

  const mobileScreen = smallBreakpoint;
  const narrowScreen = mediumBreakpoint && !smallBreakpoint;
  const wideScreen = !mediumBreakpoint && !smallBreakpoint;

  const mobileScreenOnly = mobileScreen && !narrowScreen && !wideScreen;
  const narrowScreenOnly = !mobileScreen && narrowScreen && !wideScreen;
  const wideScreenOnly = !mobileScreen && !narrowScreen && wideScreen;

  return { mobileScreenOnly, narrowScreenOnly, wideScreenOnly, alternativeBreakpoint };
};

export default useScreenBreakpoints;
