// src/containers/AdminDashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScheduleCalendar from '../components/ScheduleCalendar';
import { addShift } from '../actions/shiftActions';
import NurseProfiles from '../components/NurseProfiles';
import ShiftManagement from '../components/ShiftManagement';
import ConstraintManagement from '../components/ConstraintManagement';
import { Typography, Divider } from '@mui/material';

const AdminDashboard = () => {
  const events = useSelector((state) => state.shifts.shiftList);
  const dispatch = useDispatch();


    const handleEventSelect = (event) => {
        if (event.conflict) {
        alert('This shift has conflicts.');
        } else {
        // Proceed with normal flow, e.g., editing or deleting the shift
        console.log('Shift selected:', event);
        }
    };
  

  const handleSlotSelect = (slotInfo) => {
    const newShift = {
      id: events.length + 1,
      title: 'New Shift',
      start: slotInfo.start,
      end: slotInfo.end,
    };
    dispatch(addShift(newShift));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Administrator Dashboard
      </Typography>
      <ScheduleCalendar
        events={events}
        onEventSelect={handleEventSelect}
        onSlotSelect={handleSlotSelect}
      />
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Nurse Profiles
      </Typography>
      <NurseProfiles />
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Shift Management
      </Typography>
      <ShiftManagement />
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Constraint Management
      </Typography>
      <ConstraintManagement />
    </div>
  );
};

export default AdminDashboard;
