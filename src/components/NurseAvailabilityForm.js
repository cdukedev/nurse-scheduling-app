// src/components/NurseAvailabilityForm.js
import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateNurseAvailability } from '../actions/nurseActions';

const NurseAvailabilityForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(updateNurseAvailability(values));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field name="days">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Days Available"
                    variant="outlined"
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field name="shiftPreferences">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Shift Preferences"
                    variant="outlined"
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            {/* Add more fields as necessary */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={submitting || pristine}
              >
                Submit Availability
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default NurseAvailabilityForm;
