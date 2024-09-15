// src/containers/AdminDashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScheduleCalendar from '../components/ScheduleCalendar';
import { addShift } from '../actions/shiftActions';
import NurseProfiles from '../components/NurseProfiles';
import ShiftManagement from '../components/ShiftManagement';

const AdminDashboard = () => {
  const events = useSelector((state) => state.shifts.shiftList);
  const dispatch = useDispatch();

  const handleEventSelect = (event) => {
    console.log('Event selected:', event);
    // Implement edit or delete functionality
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
        <h1>Administrator Dashboard</h1>
        <ScheduleCalendar
        events={events}
        onEventSelect={handleEventSelect}
        onSlotSelect={handleSlotSelect}
        />
        <h2>Nurse Profiles</h2>
        <NurseProfiles />
        <h2>Shift Management</h2>
        <ShiftManagement />
    </div>
  );
};

export default AdminDashboard;
