import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import ContactsIcon from "@mui/icons-material/Contacts";
import DescriptionIcon from "@mui/icons-material/Description";

import useThemeMode from "../hooks/useThemeMode";
import useScreenBreakpoints from "../hooks/useScreenBreakpoints";

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { mode, toggleThemeMode } = useThemeMode();
  const { mobileScreenOnly, narrowScreenOnly, wideScreenOnly } =
    useScreenBreakpoints();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const themeIcon = (
    <>
      {mode === "light" ? (
        <DarkModeIcon
          onClick={toggleThemeMode}
          sx={{ marginRight: mobileScreenOnly ? 2 : 0 }}
        />
      ) : (
        <LightModeIcon
          onClick={toggleThemeMode}
          sx={{ marginRight: mobileScreenOnly ? 2 : 0 }}
        />
      )}
    </>
  );

  const mobileScreenContent = (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseDropdown}
        sx={{ width: "100%" }}
      >
        <MenuItem onClick={handleCloseDropdown}>
          <AccountCircleIcon sx={{ marginRight: 2 }} /> About
        </MenuItem>
        <MenuItem onClick={handleCloseDropdown}>
          <WorkIcon sx={{ marginRight: 2 }} /> Experience
        </MenuItem>
        <MenuItem onClick={handleCloseDropdown}>
          <CodeIcon sx={{ marginRight: 2 }} /> Projects
        </MenuItem>
        <MenuItem onClick={handleCloseDropdown}>
          <ContactsIcon sx={{ marginRight: 2 }} /> Contact
        </MenuItem>
        <MenuItem onClick={handleCloseDropdown}>
          <DescriptionIcon sx={{ marginRight: 2 }} /> Resume
        </MenuItem>
        <MenuItem onClick={toggleThemeMode}>{themeIcon} Theme</MenuItem>
      </Menu>
    </>
  );

  const narrowScreenContent = (
    <>
      <Tooltip title="About">
        <Button color="inherit">
          <AccountCircleIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Experience">
        <Button color="inherit">
          <WorkIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Projects">
        <Button color="inherit">
          <CodeIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Contact">
        <Button color="inherit">
          <ContactsIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Resume">
        <Button color="inherit">
          <DescriptionIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Switch theme">
        <Button color="inherit">{themeIcon}</Button>
      </Tooltip>
    </>
  );

  const wideScreenContent = (
    <>
      <Button color="inherit">About</Button>
      <Button color="inherit">Experience</Button>
      <Button color="inherit">Projects</Button>
      <Button color="inherit">Contact</Button>
      <Button color="inherit">Resume</Button>
      <Tooltip title="Switch theme">
        <Button color="inherit">{themeIcon}</Button>
      </Tooltip>
    </>
  );

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "var(--topbar-background)",
        borderBottom: "1px solid var(--divider)",
        color: "var(--text-primary)",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sean Johnson
        </Typography>
        {mobileScreenOnly && mobileScreenContent}
        {narrowScreenOnly && narrowScreenContent}
        {wideScreenOnly && wideScreenContent}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
