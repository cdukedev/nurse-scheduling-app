// src/containers/NurseInterface.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ScheduleCalendar from '../components/ScheduleCalendar';
import NurseAvailabilityForm from '../components/NurseAvailabilityForm';
import { Typography, Divider, Snackbar, Alert } from '@mui/material';
import socket from '../utils/socket';

const NurseInterface = () => {
  const allEvents = useSelector((state) => state.shifts.shiftList);
  const nurseId = 1; // Replace with actual logged-in nurse ID from context or state

  // For demonstration, assume shifts have a nurseId property
  const events = allEvents.filter((event) => event.nurseId === nurseId);

  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Listen for schedule updates
    socket.on('schedule_update', (data) => {
      setNotification('Your schedule has been updated.');
    });

    // Listen for new messages
    socket.on('new_message', (data) => {
      setNotification(`New message: ${data.message}`);
    });

    // Listen for urgent alerts
    socket.on('urgent_alert', (data) => {
      setNotification(`Urgent Alert: ${data.alert}`);
    });

    // Cleanup on unmount
    return () => {
      socket.off('schedule_update');
      socket.off('new_message');
      socket.off('urgent_alert');
    };
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Nurse Schedule
      </Typography>
      <ScheduleCalendar events={events} />
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Set Your Availability
      </Typography>
      <NurseAvailabilityForm />
      <Snackbar
        open={Boolean(notification)}
        autoHideDuration={6000}
        onClose={() => setNotification('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setNotification('')} severity="info" sx={{ width: '100%' }}>
          {notification}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NurseInterface;
