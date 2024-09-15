// src/components/ConstraintManagement.js
import React from 'react';
import {
  Typography,
  Switch,
  FormControlLabel,
  Slider,
  Grid,
} from '@mui/material';

const ConstraintManagement = () => {
  const [constraints, setConstraints] = React.useState({
    maxHoursPerWeek: { enabled: true, weight: 5 },
    minRestPeriod: { enabled: false, weight: 3 },
    // Add more constraints as needed
  });

  const handleToggle = (constraint) => (event) => {
    setConstraints({
      ...constraints,
      [constraint]: {
        ...constraints[constraint],
        enabled: event.target.checked,
      },
    });
  };

  const handleWeightChange = (constraint) => (event, newValue) => {
    setConstraints({
      ...constraints,
      [constraint]: {
        ...constraints[constraint],
        weight: newValue,
      },
    });
  };

  return (
    <div>
      <Typography variant="h5">Constraint Management</Typography>
      {Object.keys(constraints).map((constraint) => (
        <Grid container alignItems="center" key={constraint} spacing={2}>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={constraints[constraint].enabled}
                  onChange={handleToggle(constraint)}
                  color="primary"
                />
              }
              label={constraint.replace(/([A-Z])/g, ' $1').trim()} // To format label
            />
          </Grid>
          <Grid item xs={6}>
            <Slider
              value={constraints[constraint].weight}
              onChange={handleWeightChange(constraint)}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
              disabled={!constraints[constraint].enabled}
            />
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default ConstraintManagement;
