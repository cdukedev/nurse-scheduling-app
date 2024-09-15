// src/components/NurseAvailabilityForm.js
import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateNurseAvailability } from '../actions/nurseActions';

const NurseAvailabilityForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    // Assuming values include availableDays and preferredShifts
    dispatch(updateNurseAvailability(values));
    alert('Availability updated successfully!');
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        availableDays: '',
        preferredShifts: '',
      }}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Available Days */}
            <Grid item xs={12}>
              <Field name="availableDays">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Available Days (e.g., Mon, Tue)"
                    variant="outlined"
                    fullWidth
                    required
                  />
                )}
              </Field>
            </Grid>
            {/* Preferred Shifts */}
            <Grid item xs={12}>
              <Field name="preferredShifts">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Preferred Shifts (e.g., Morning, Evening)"
                    variant="outlined"
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            {/* Additional Preferences (Example: Want Weekend Shifts) */}
            <Grid item xs={12}>
              <Field name="wantsWeekendShifts" type="checkbox">
                {({ input, meta }) => (
                  <FormControlLabel
                    control={<Checkbox {...input} color="primary" />}
                    label="I am available for weekend shifts"
                  />
                )}
              </Field>
            </Grid>
            {/* Submit Button */}
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
