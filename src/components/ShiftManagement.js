// src/components/ShiftManagement.js
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ShiftForm from './ShiftForm';

const ShiftManagement = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, index, value } = props;
    return value === index && <Box p={3}>{children}</Box>;
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Configure Shifts" />
        <Tab label="Manage Assignments" />
        <Tab label="Role Requirements" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ShiftForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Manage Assignments Content */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Role Requirements Content */}
      </TabPanel>
    </div>
  );
};

export default ShiftManagement;
