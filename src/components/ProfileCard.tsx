import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import PersonalPhoto from '../assets/PersonalPhoto.jpg';
import useThemeMode from '../hooks/useThemeMode';

const ProfileCard = () => {
  const { mode } = useThemeMode();

  return (
    <Card
      sx={{
        maxWidth: 400,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border:
          mode === 'dark' ? '1px solid var(--divider)' : '1px solid var(--background-default)',
        backgroundColor: 'var(--background-paper)',
        borderRadius: '10px',
      }}
    >
      <CardMedia component="img" height="390" image={PersonalPhoto} alt="Sean Johnson" />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="div">
          Sean Johnson
        </Typography>
        <Typography sx={{ mb: 2, color: 'darkOrange', fontWeight: 500, fontSize: 21 }}>
          Software Engineer
        </Typography>
        <Typography sx={{ fontSize: 18 }}>
          Software engineer and NYU Stern MBA with a penchant for getting things done. Skilled in
          writing clean, testable, and thoroughly documented code to build robust web applications.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
