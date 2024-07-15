import { Box, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--background-default)',
        color: 'var(--text-primary)',
        padding: '10px 0',
        textAlign: 'center',
        borderTop: '1px solid var(--divider)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="body1" sx={{ mr: 2 }}>
        Built by Sean Johnson
      </Typography>
      <IconButton
        href="mailto:seanjohnson220@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'var(--text-primary)' }}
      >
        <EmailIcon />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/sean21johnson/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'var(--text-primary)' }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href="https://github.com/sean21johnson"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'var(--text-primary)' }}
      >
        <GitHubIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
