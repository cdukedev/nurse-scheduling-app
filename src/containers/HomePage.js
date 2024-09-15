// src/containers/HomePage.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin');
  };

  const handleNurseClick = () => {
    navigate('/nurse');
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Nurse Scheduling App
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Efficiently manage nurse schedules, track availability, and ensure optimal staffing levels.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleAdminClick}
          sx={{ mr: 2 }}
        >
          Administrator Dashboard
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={handleNurseClick}
        >
          Nurse Interface
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
