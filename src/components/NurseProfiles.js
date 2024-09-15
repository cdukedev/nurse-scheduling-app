// src/components/NurseProfiles.js
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import NurseDetailsModal from './NurseDetailsModal';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'qualification', headerName: 'Qualification', width: 200 },
  { field: 'availability', headerName: 'Availability', width: 200 },
];

const NurseProfiles = () => {
  const nurses = useSelector((state) => state.nurses.nurseList);
  const [selectedNurse, setSelectedNurse] = useState(null);

  const handleRowClick = (param) => {
    setSelectedNurse(param.row);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={nurses}
        columns={columns}
        pageSize={5}
        onRowClick={handleRowClick}
      />
      {selectedNurse && (
        <NurseDetailsModal
          nurse={selectedNurse}
          onClose={() => setSelectedNurse(null)}
        />
      )}
    </div>
  );
};

export default NurseProfiles;
