import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepButton,
  Popover,
} from '@mui/material';

const timelineEvents = [
  {
    year: '2011',
    title: 'Undergraduate Degree',
    description:
      'Graduated from the University of Connecticut with a 3.6 GPA and a Bachelor of Science degree. Started as a Financial Analyst at Citco Fund Services on the Derivative Reconciliations team.',
  },
  {
    year: '2013',
    title: 'Promotion',
    description: 'Promoted to Senior Financial Analyst at Citco Fund Services.',
  },
  {
    year: '2015',
    title: 'Began Graduate School',
    description:
      'Started MBA program at NYU Stern School of Business. Promoted to Fund Associate at Citco Fund Services',
  },
  {
    year: '2018',
    title: 'Graduate School Degree',
    description:
      'Graduated from NYU Stern School of Business with a 3.5 GPA and a Master of Business Administration Degree. Pivoted to Loan Services Team at Citco.',
  },
  {
    year: '2020',
    title: 'Career Pivot',
    description:
      'Decided to pursue a career in software engineering after developing a passion for programming. Enrolled in the Thinkful Software Engineering Immersive Program.',
  },
  {
    year: '2021',
    title: 'Software Engineer',
    description:
      'Graduated from the Thinkful Software Engineering Immersive Program. Started as an Associate Frontend Engineer at Zenhub.',
  },
  {
    year: '2023',
    title: 'Promotion',
    description:
      'Promoted to Intermediate Frontend Engineer at Zenhub and began leading technical projects.',
  },
];

const Timeline = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, timelineEvent: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedEvent(timelineEvent);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSelectedEvent(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        mb={3}
        variant="h5"
        align="center"
        gutterBottom
        sx={{ color: 'var(--text-primary)' }}
      >
        Professional Timeline
      </Typography>
      <Stepper alternativeLabel nonLinear>
        {timelineEvents.map((event, index) => (
          <Step key={index}>
            <StepButton onMouseEnter={(e) => handlePopoverOpen(e, event)}>{event.year}</StepButton>
          </Step>
        ))}
      </Stepper>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: { maxWidth: 300 },
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h6">{selectedEvent?.title}</Typography>
            <Typography variant="body2">{selectedEvent?.description}</Typography>
          </CardContent>
        </Card>
      </Popover>
    </Box>
  );
};

export default Timeline;
