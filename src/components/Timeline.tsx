import { useState, useEffect, useRef } from 'react';
import { Box, Card, CardContent, Typography, Stepper, StepButton } from '@mui/material';
import useThemeMode from '../hooks/useThemeMode';

import './timeline.css';

const timelineEvents = [
  {
    year: '2011',
    title: 'Undergraduate Degree',
    description:
      'Graduated from the University of Connecticut with a 3.6 GPA and a Bachelor of Science degree. Started as a Financial Analyst at Citco Fund Services.',
  },
  {
    year: '2013',
    title: 'Financial Services Promotion',
    description:
      'Promoted to Senior Financial Analyst at Citco Fund Services. Collaborated with engineers to build reconciliation platform.',
  },
  {
    year: '2015',
    title: 'Began Graduate School',
    description:
      'Started MBA program at NYU Stern School of Business. Promoted to Fund Associate at Citco Fund Services.',
  },
  {
    year: '2018',
    title: 'Graduate Degree',
    description:
      'Graduated from NYU Stern School of Business with a 3.5 GPA and a Master of Business Administration Degree.',
  },
  {
    year: '2020',
    title: 'Career Pivot',
    description: `Decided to pursue a career in software engineering after developing a passion for programming. Enrolled in Thinkful's Software Engineering Immersive Program.`,
  },
  {
    year: '2021',
    title: 'Software Engineer',
    description:
      'Graduated from Thinkful engineering program. Started as an Associate Frontend Engineer at Zenhub. Modernized tech stack and improved web app performance.',
  },
  {
    year: '2023',
    title: 'Software Engineering Promotion',
    description:
      'Promoted to Intermediate Frontend Engineer at Zenhub. Led technical projects and delivered key AI features to automate core user processes.',
  },
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(timelineEvents[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { mode } = useThemeMode();

  const handleStepClick = (timelineEvent: any) => {
    setSelectedEvent(timelineEvent);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startInterval();
    }
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setSelectedEvent((prevEvent) => {
        const currentIndex = timelineEvents.findIndex((event) => event.year === prevEvent.year);
        const nextIndex = (currentIndex + 1) % timelineEvents.length;
        return timelineEvents[nextIndex];
      });
    }, 5000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Box sx={{ maxWidth: 600, width: '100%' }}>
      <Typography
        variant="h5"
        align="center"
        mb={0}
        gutterBottom
        sx={{ color: 'var(--text-primary)' }}
      >
        Professional Timeline
      </Typography>
      <Stepper
        alternativeLabel
        nonLinear
        sx={{ marginBottom: -1, position: 'relative', zIndex: 1 }}
      >
        {timelineEvents.map((event, index) => (
          <StepButton
            key={index}
            onClick={() => handleStepClick(event)}
            className="timeline-step-button"
            sx={{
              '& .MuiStepLabel-root .MuiStepIcon-root': {
                color: selectedEvent?.year === event.year ? 'var(--primary-color)' : 'gray',
                fontWeight: selectedEvent?.year === event.year ? 'bold' : 'normal',
                transform: selectedEvent?.year === event.year ? 'scale(1.2)' : 'none',
                transition: 'transform 0.1s ease, color 0.1s ease, font-weight 0.1s ease',
              },
              '& .MuiStepLabel-label': {
                fontWeight: selectedEvent?.year === event.year ? '600' : '500',
                color:
                  selectedEvent?.year === event.year
                    ? 'var(--inverse-text-primary)'
                    : 'var(--inverse-text-secondary)',
                backgroundColor: 'var(--primary-color)',
                borderRadius: 5,
                padding: 1,
              },
            }}
          >
            {event.year}
          </StepButton>
        ))}
      </Stepper>
      {selectedEvent && (
        <Box mt={3}>
          <Card
            sx={{
              border: mode === 'dark' ? '1px solid var(--divider)' : '1px solid transparent',
            }}
          >
            <CardContent>
              <Typography variant="h6">{selectedEvent.title}</Typography>
              <Typography variant="body2">{selectedEvent.description}</Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default Timeline;
