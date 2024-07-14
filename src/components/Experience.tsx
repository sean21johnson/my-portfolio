import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import ZenhubImage from '../assets/Zenhub.png';
import ZenhubLogo from '../assets/ZenhubLogo.png';
import ZenhubLogoDark from '../assets/ZenhubLogoDark.png';

import useThemeMode from '../hooks/useThemeMode';

const Experience = () => {
  const { mode } = useThemeMode();

  return (
    <Box sx={{ maxWidth: 1100, margin: 'auto', width: '100%', mt: 4 }}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ color: 'var(--text-primary)', marginTop: 15, marginBottom: 5 }}
      >
        Experience
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
        <a
          href="https://www.zenhub.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            src={mode === 'dark' ? ZenhubLogoDark : ZenhubLogo}
            alt="Zenhub Logo"
            style={{ height: 40, marginRight: 10, borderRadius: 50 }}
          />
          <Typography variant="h5" sx={{ color: 'var(--text-primary)' }}>
            Zenhub
          </Typography>
        </a>
      </Box>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <a
          href="https://www.zenhub.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: 'pointer' }}
        >
          <img
            src={ZenhubImage}
            alt="Zenhub"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: 10 }}
          />
        </a>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <a
                href="https://www.zenhub.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              >
                <img
                  src={mode === 'dark' ? ZenhubLogoDark : ZenhubLogo}
                  alt="Zenhub Logo"
                  style={{ height: 30, marginRight: 10, borderRadius: 50 }}
                />
              </a>
              <Typography variant="h6" sx={{ color: 'darkOrange' }}>
                Intermediate Frontend Engineer
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontSize: 16, mb: 2 }}>
              Collaborated with product managers, designers, and engineers to build robust project
              management suite. Led projects and delivered impactful results through effective
              communication, collaboration, and my technical expertise. Developed core product
              features that drive user growth and retention, including AI-powered enhancements that
              streamline key user processes.
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 16 }}>
              Delivered key contributions to the code base, enhancing UI and UX for the web
              application and browser extension. Resolved and deployed fixes for critical bugs.
              Modernized tech stack with React and TypeScript. Transitioned RESTful API calls to
              Apollo GraphQL which enhanced web application performance and user interface load
              times.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Experience;
