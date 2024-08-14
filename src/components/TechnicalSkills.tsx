import { Box, Typography, ImageList, ImageListItem } from '@mui/material';

import React from '../assets/React.svg';
import TypeScript from '../assets/TypeScript.svg';
import JavaScript from '../assets/JavaScript.svg';
import HTML from '../assets/HTML.svg';
import CSS from '../assets/CSS.svg';
import Apollo from '../assets/Apollo.svg';
import Redux from '../assets/Redux.svg';
import RTL from '../assets/RTL.svg';
import Jest from '../assets/Jest.svg';
import Node from '../assets/Node.svg';
import Express from '../assets/Express.svg';
import ExpressDark from '../assets/ExpressDark.svg';
import Postgre from '../assets/Postgre.svg';
import Webpack from '../assets/Webpack.svg';
import Git from '../assets/Git.svg';
import Github from '../assets/Github.svg';
import GithubDark from '../assets/GithubDark.svg';
import Figma from '../assets/Figma.svg';

import useThemeMode from '../hooks/useThemeMode';
import useScreenBreakpoints from '../hooks/useScreenBreakpoints';

import './custom-ImageList.css'; // Import your custom styles

const TechnicalSkills = () => {
  const { mode } = useThemeMode();
  const { alternativeBreakpoint, mobileScreenOnly } = useScreenBreakpoints();

  const getWidth = () => {
    if (mobileScreenOnly) {
      return 400;
    } else if (alternativeBreakpoint) {
      return 600;
    }
    return 1100;
  };

  const getColumns = () => {
    if (mobileScreenOnly) {
      return 4;
    } else if (alternativeBreakpoint) {
      return 6;
    }
    return 8;
  };

  const skills = [
    { title: 'React', img: React },
    { title: 'TypeScript', img: TypeScript },
    { title: 'JavaScript', img: JavaScript },
    { title: 'HTML', img: HTML },
    { title: 'CSS', img: CSS },
    { title: 'Apollo GraphQL', img: Apollo },
    { title: 'Redux', img: Redux },
    { title: 'React Testing Library', img: RTL },
    { title: 'Jest', img: Jest },
    { title: 'Node.js', img: Node },
    { title: 'Express', img: mode === 'dark' ? ExpressDark : Express },
    { title: 'PostgreSQL', img: Postgre },
    { title: 'Webpack', img: Webpack },
    { title: 'Git', img: Git },
    { title: 'GitHub', img: mode === 'dark' ? GithubDark : Github },
    { title: 'Figma', img: Figma },
  ];

  return (
    <Box sx={{ width: getWidth(), margin: 'auto', mt: 4, mb: 4 }}>
      <Typography
        mb={3}
        variant="h5"
        align="center"
        gutterBottom
        sx={{ color: 'var(--text-primary)', marginTop: 20, marginBottom: 5 }}
      >
        Technical Skills
      </Typography>
      <ImageList cols={getColumns()} gap={20}>
        {skills.map((skill, index) => (
          <ImageListItem key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={skill.img}
                  alt={skill.title}
                  loading="lazy"
                  style={{ borderRadius: 10, width: '75%', height: '75%' }}
                />
              </div>
              <div className="flip-card-back">
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                  {skill.title}
                </Typography>
              </div>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default TechnicalSkills;
