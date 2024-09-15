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
      />
    </CalendarWrapper>
  );
};

export default ScheduleCalendar;
