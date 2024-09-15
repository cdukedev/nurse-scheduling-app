// src/components/NurseDetailsModal.js
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateNurse } from '../actions/nurseActions';

const NurseDetailsModal = ({ nurse, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState(nurse);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateNurse(formData));
    onClose();
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Edit Nurse Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NurseDetailsModal;
