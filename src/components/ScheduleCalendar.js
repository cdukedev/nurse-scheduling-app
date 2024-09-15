// src/components/ScheduleCalendar.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { styled } from '@mui/material/styles';

const localizer = momentLocalizer(moment);

const CalendarWrapper = styled('div')(({ theme }) => ({
  height: '80vh',
  margin: theme.spacing(2),
}));

const ScheduleCalendar = ({ events, onEventSelect, onSlotSelect }) => {
  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.conflict ? '#f44336' : '#1976d2', // Red for conflicts, Blue otherwise
      color: 'white',
    };
    return { style };
  };

  return (
    <CalendarWrapper>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        views={['month', 'week', 'day']}
        onSelectEvent={onEventSelect}
        onSelectSlot={onSlotSelect}
        style={{ height: '100%' }}
        eventPropGetter={eventStyleGetter}
      />
    </CalendarWrapper>
  );
};

export default ScheduleCalendar;
