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

import './custom-ImageList.css'; // Import your custom styles

const TechnicalSkills = () => {
  const { mode } = useThemeMode();

  const skills = [
    {
      title: 'React',
      description:
        'Gained proficiency in utilizing React hooks including useState, useEffect, useRef, useCallback, useMemo, useContext, and useReducer.',
      img: React,
    },
    {
      title: 'TypeScript',
      description:
        'Skilled in applying TypeScript for type safety and predicting properties on objects. Utilized interface and type alias for defining custom types. Gained experience in using utility types such as Partial, Pick, and Record.',
      img: TypeScript,
    },
    {
      title: 'JavaScript',
      description:
        'Strong foundation in JavaScript, understanding concepts such as closures, promises, async/await, destructuring, spread/rest operators, ES6+ features, and more.',
      img: JavaScript,
    },
    {
      title: 'HTML',
      description:
        'Strong knowledge of HTML5, understanding semantic elements, and structuring web content effectively. Experience in optimizing HTML for better accessibility and SEO performance.',
      img: HTML,
    },
    {
      title: 'CSS',
      description:
        'Proficient in writing clean and maintainable CSS, utilizing concepts such as Flexbox, Grid, and media queries for responsive design. Skilled in using container queries to create more adaptable layouts.',
      img: CSS,
    },
    {
      title: 'Apollo GraphQL',
      description:
        "Skilled in utilizing Apollo Client for managing GraphQL data in React applications. Experience in writing efficient queries and mutations, and leveraging Apollo's caching and state management features.",
      img: Apollo,
    },
    {
      title: 'Redux',
      description:
        'Understanding the Redux flow: actions, reducers, and store. Experienced in using Redux Toolkit for simpler syntax and efficient development. Gained proficiency in handling asynchronous actions with redux-thunk.',
      img: Redux,
    },
    {
      title: 'React Testing Library',
      description:
        'Experience in writing robust unit tests for React components using React Testing Library. Understanding of concepts like mocks, spies, and async testing.',
      img: RTL,
    },
    {
      title: 'Jest',
      description:
        'Experienced in using Jest for testing JavaScript applications. Proficient in writing unit tests, integration tests, and setting up mock functions to ensure code reliability and correctness.',
      img: Jest,
    },
    {
      title: 'Node.js',
      description:
        'Proficient in building scalable server-side applications using Node.js. Experienced in working with asynchronous programming and event-driven architecture.',
      img: Node,
    },
    {
      title: 'Express',
      description:
        'Skilled in developing robust web applications using Express. Experience in building RESTful APIs, middleware integration, and handling server-side logic.',
      img: mode === 'dark' ? ExpressDark : Express,
    },
    {
      title: 'PostgreSQL',
      description:
        'Experienced in using PostgreSQL for database management. Proficient in writing complex SQL queries, designing schemas, and ensuring data integrity.',
      img: Postgre,
    },
    {
      title: 'Webpack',
      description:
        'Proficient in using Webpack for bundling JavaScript applications. Experienced in configuring loaders, plugins, and optimizing builds for performance.',
      img: Webpack,
    },
    {
      title: 'Git',
      description:
        'Experienced in version control using Git. Proficient in branching, merging, and resolving conflicts. Familiar with collaborative workflows in GitHub.',
      img: Git,
    },
    {
      title: 'GitHub',
      description:
        'Skilled in using GitHub for source code management and collaboration. Experienced in managing repositories, pull requests, and continuous integration.',
      img: mode === 'dark' ? GithubDark : Github,
    },
    {
      title: 'Figma',
      description:
        'Experienced in using Figma for UI/UX design. Proficient in analyzing figma designs and collaborating with designers to translate designs into code.',
      img: Figma,
    },
  ];

  return (
    <Box sx={{ maxWidth: 1100, margin: 'auto', width: '100%', mt: 4 }}>
      <Typography
        mb={3}
        variant="h5"
        align="center"
        gutterBottom
        sx={{ color: 'var(--text-primary)', marginTop: 20 }}
      >
        Technical Skills
      </Typography>
      <ImageList cols={4} gap={50}>
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
                <Typography variant="body2">{skill.description}</Typography>
              </div>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default TechnicalSkills;
