// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './containers/AdminDashboard';
import NurseInterface from './containers/NurseInterface';
import HomePage from './containers/HomePage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/nurse" element={<NurseInterface />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
