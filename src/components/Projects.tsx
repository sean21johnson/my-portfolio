import { Box, Typography, Card, CardContent } from '@mui/material';
import Slider from 'react-slick';
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
    title: 'Daily Feed Page',
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ maxWidth: 1100, margin: 'auto', width: '100%' }}>
      <Typography
        mb={3}
        variant="h5"
        align="center"
        gutterBottom
        sx={{ color: 'var(--text-primary)', marginTop: 15 }}
      >
        Projects & Features
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
            <Card sx={{ mt: 1, p: 0 }}>
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
