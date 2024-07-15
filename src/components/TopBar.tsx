import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactsIcon from '@mui/icons-material/Contacts';
import DescriptionIcon from '@mui/icons-material/Description';
import BuildIcon from '@mui/icons-material/Build';
import { Link as ScrollLink } from 'react-scroll';

import useThemeMode from '../hooks/useThemeMode';
import useScreenBreakpoints from '../hooks/useScreenBreakpoints';

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { mode, toggleThemeMode } = useThemeMode();
  const { mobileScreenOnly, narrowScreenOnly, wideScreenOnly } = useScreenBreakpoints();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const themeIcon = (
    <>
      {mode === 'light' ? (
        <DarkModeIcon onClick={toggleThemeMode} sx={{ marginRight: mobileScreenOnly ? 2 : 0 }} />
      ) : (
        <LightModeIcon onClick={toggleThemeMode} sx={{ marginRight: mobileScreenOnly ? 2 : 0 }} />
      )}
    </>
  );

  const scrollOffset = -100; // Adjust this value based on your padding-top

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
        sx={{ width: '100%' }}
      >
        <MenuItem onClick={handleCloseDropdown}>
          <ScrollLink to="about" smooth={true} duration={500} offset={scrollOffset}>
            <AccountCircleIcon sx={{ marginRight: 2 }} /> About
          </ScrollLink>
        </MenuItem>
        <MenuItem onClick={handleCloseDropdown}>
          <ScrollLink to="experience" smooth={true} duration={500} offset={scrollOffset}>
            <WorkIcon sx={{ marginRight: 2 }} /> Experience
          </ScrollLink>
        </MenuItem>
        <MenuItem onClick={handleCloseDropdown}>
          <ScrollLink to="projects" smooth={true} duration={500} offset={scrollOffset}>
            <CodeIcon sx={{ marginRight: 2 }} /> Projects
          </ScrollLink>
        </MenuItem>
        <MenuItem onClick={handleCloseDropdown}>
          <ScrollLink to="skills" smooth={true} duration={500} offset={scrollOffset}>
            <BuildIcon sx={{ marginRight: 2 }} /> Skills
          </ScrollLink>
        </MenuItem>
        <MenuItem onClick={handleCloseDropdown}>
          <ScrollLink to="contact" smooth={true} duration={500} offset={scrollOffset}>
            <ContactsIcon sx={{ marginRight: 2 }} /> Contact
          </ScrollLink>
        </MenuItem>
        <MenuItem onClick={handleCloseDropdown}>
          <ScrollLink to="resume" smooth={true} duration={500} offset={scrollOffset}>
            <DescriptionIcon sx={{ marginRight: 2 }} /> Resume
          </ScrollLink>
        </MenuItem>
        <MenuItem onClick={toggleThemeMode}>{themeIcon} Theme</MenuItem>
      </Menu>
    </>
  );

  const narrowScreenContent = (
    <>
      <Tooltip title="About">
        <ScrollLink to="about" smooth={true} duration={500} offset={scrollOffset}>
          <Button color="inherit">
            <AccountCircleIcon />
          </Button>
        </ScrollLink>
      </Tooltip>
      <Tooltip title="Experience">
        <ScrollLink to="experience" smooth={true} duration={500} offset={scrollOffset}>
          <Button color="inherit">
            <WorkIcon />
          </Button>
        </ScrollLink>
      </Tooltip>
      <Tooltip title="Projects">
        <ScrollLink to="projects" smooth={true} duration={500} offset={scrollOffset}>
          <Button color="inherit">
            <CodeIcon />
          </Button>
        </ScrollLink>
      </Tooltip>
      <Tooltip title="Skills">
        <ScrollLink to="skills" smooth={true} duration={500} offset={scrollOffset}>
          <Button color="inherit">
            <BuildIcon />
          </Button>
        </ScrollLink>
      </Tooltip>
      <Tooltip title="Contact">
        <ScrollLink to="contact" smooth={true} duration={500} offset={scrollOffset}>
          <Button color="inherit">
            <ContactsIcon />
          </Button>
        </ScrollLink>
      </Tooltip>
      <Tooltip title="Resume">
        <ScrollLink to="resume" smooth={true} duration={500} offset={scrollOffset}>
          <Button color="inherit">
            <DescriptionIcon />
          </Button>
        </ScrollLink>
      </Tooltip>
      <Tooltip title="Switch theme">
        <Button color="inherit">{themeIcon}</Button>
      </Tooltip>
    </>
  );

  const wideScreenContent = (
    <>
      <ScrollLink to="about" smooth={true} duration={500} offset={scrollOffset}>
        <Button color="inherit">About</Button>
      </ScrollLink>
      <ScrollLink to="experience" smooth={true} duration={500} offset={scrollOffset}>
        <Button color="inherit">Experience</Button>
      </ScrollLink>
      <ScrollLink to="projects" smooth={true} duration={500} offset={scrollOffset}>
        <Button color="inherit">Projects</Button>
      </ScrollLink>
      <ScrollLink to="skills" smooth={true} duration={500} offset={scrollOffset}>
        <Button color="inherit">Skills</Button>
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500} offset={scrollOffset}>
        <Button color="inherit">Contact</Button>
      </ScrollLink>
      <ScrollLink to="resume" smooth={true} duration={500} offset={scrollOffset}>
        <Button color="inherit">Resume</Button>
      </ScrollLink>
      <Tooltip title="Switch theme">
        <Button color="inherit">{themeIcon}</Button>
      </Tooltip>
    </>
  );

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'var(--topbar-background)',
        borderBottom: '1px solid var(--divider)',
        color: 'var(--text-primary)',
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
