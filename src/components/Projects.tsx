import { Box, Typography, Card, CardContent } from '@mui/material';
import Slider from 'react-slick';
import useThemeMode from '../hooks/useThemeMode';
import useScreenBreakpoints from '../hooks/useScreenBreakpoints';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom-slick.css'; // Import your custom slick styles

const projects = [
  {
    videoUrl: 'https://www.youtube.com/embed/Ley8NWiL0lQ',
    title: 'AI Label Suggestions',
    description:
      "Leveraged OpenAI's API to develop AI-powered feature which streamlined GitHub issue creation process, enhancing UX and reducing user clicks. Achieved widespread adoption with thousands of daily uses.",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/c2aobsDeuXo',
    title: 'Daily Feed',
    description:
      'Created informative daily standup page, outlining team progress and bottlenecks. Second most visited page in the app and has significantly improved team collaboration.',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/i6jQpvzbXrw',
    title: 'Roadmap Enhancements',
    description:
      'Led initiative to enhance project planning interface. Included advanced data visualization offering with key dates and dependencies. Incorporated pagination with GraphQL to optimize performance and built support for CSV/PNG/SVG data exporting.',
  },
];

const Projects = () => {
  const { mode } = useThemeMode();

  const { mobileScreenOnly, alternativeBreakpoint } = useScreenBreakpoints();

  const getWidth = () => {
    if (mobileScreenOnly) {
      return 400;
    } else if (alternativeBreakpoint) {
      return 600;
    }
    return 1100;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ width: getWidth(), margin: 'auto' }}>
      <Typography
        mb={3}
        variant="h5"
        align="center"
        gutterBottom
        sx={{ color: 'var(--text-primary)', marginTop: 10, marginBottom: 5 }}
      >
        Professional Projects & Features
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Box key={index} sx={{ textAlign: 'center', p: 0 }}>
            <iframe
              width="100%"
              height="400"
              src={project.videoUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 10, border: 'none' }}
            ></iframe>
            <Card
              sx={{
                mt: 1,
                p: 0,
                border: mode === 'dark' ? '1px solid var(--divider)' : '1px solid transparent',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: 'var(--text-primary)', marginBottom: 1, marginTop: -1 }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-primary)', fontSize: 16 }}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Projects;
