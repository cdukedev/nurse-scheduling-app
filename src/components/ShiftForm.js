// src/components/ShiftForm.js
import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { TimePicker, DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useDispatch } from 'react-redux';
import { addShift } from '../actions/shiftActions';

const ShiftForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const newShift = {
      id: Date.now(),
      title: values.title,
      start: new Date(values.date.setHours(values.startTime.getHours(), values.startTime.getMinutes())),
      end: new Date(values.date.setHours(values.endTime.getHours(), values.endTime.getMinutes())),
    };
    dispatch(addShift(newShift));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          date: new Date(),
          startTime: new Date(),
          endTime: new Date(),
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field name="title">
                  {({ input }) => (
                    <TextField
                      {...input}
                      label="Shift Title"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field name="date">
                  {({ input }) => (
                    <DatePicker
                      {...input}
                      label="Date"
                      renderInput={(params) => <TextField {...params} fullWidth required />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field name="startTime">
                  {({ input }) => (
                    <TimePicker
                      {...input}
                      label="Start Time"
                      renderInput={(params) => <TextField {...params} fullWidth required />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field name="endTime">
                  {({ input }) => (
                    <TimePicker
                      {...input}
                      label="End Time"
                      renderInput={(params) => <TextField {...params} fullWidth required />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" color="primary" variant="contained">
                  Add Shift
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </LocalizationProvider>
  );
};

export default ShiftForm;
