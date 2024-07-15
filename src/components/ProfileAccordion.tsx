import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getExpandButtonDetails = (panelId: string) => {
    const isExpanded = expanded === panelId;
    return {
      color: 'var(--text-primary)',
      fontWeight: isExpanded ? 600 : 400,
    };
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <Typography
        variant="h5"
        mb={2}
        align="center"
        gutterBottom
        sx={{ color: 'var(--text-primary)' }}
      >
        About Me
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: expanded === 'panel1' ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={getExpandButtonDetails('panel1')}
        >
          <Typography sx={getExpandButtonDetails('panel1')}>Who Am I</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography mt={-2} sx={{ fontSize: 14 }}>
            Software engineer based in Philadelphia, PA. Proven track record of leading technical
            projects and efficiently delivering quality results. Pivoted to software development in
            2020, inspired by a passion for technology after collaborating with engineering teams in
            financial services. Skilled in using modern frontend frameworks and toolsets to build
            intuitive user interfaces, including AI-powered automation features.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: expanded === 'panel2' ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={getExpandButtonDetails('panel2')}
        >
          <Typography sx={getExpandButtonDetails('panel2')}>Current Role</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography mt={-2} sx={{ fontSize: 14 }}>
            <strong>Intermediate Frontend Engineer @ Zenhub: </strong>Collaborated with product
            managers, designers, and engineers to build robust project management suite. Led
            projects and delivered impactful results through effective communication, collaboration,
            and my technical expertise. Developed core product features that drive user growth and
            retention, including AI-powered enhancements that streamline key user processes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: expanded === 'panel4' ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            />
          }
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={getExpandButtonDetails('panel4')}
        >
          <Typography sx={getExpandButtonDetails('panel4')}>Teamwork</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography mt={-2} sx={{ fontSize: 14 }}>
            Team-oriented leader who builds outstanding relationships with clients and internal
            stakeholders by leveraging highly effective communication and interpersonal skills. I
            enjoy collaborating with and learning from other developers, and am a proponent of a
            communicative, team-based approach to problem solving. Diversity of thought yields the
            best and most creative solutions to challenging technical problems.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: expanded === 'panel5' ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            />
          }
          aria-controls="panel5a-content"
          id="panel5a-header"
          sx={getExpandButtonDetails('panel5')}
        >
          <Typography sx={getExpandButtonDetails('panel5')}>Personal Facts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ marginTop: -6, fontSize: 14 }}>
            <li>Frontend Engineer @ ZenHub since October 2021</li>
            <li>Career pivot to software development in 2020</li>
            <li>NYU Stern School of Business 2018 MBA graduate</li>
            <li>10 years in financial services roles</li>
            <li>Enjoy exercising, traveling, and reading</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
