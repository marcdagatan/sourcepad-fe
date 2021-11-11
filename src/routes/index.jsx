import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import DashboardWelcome from '../components/DashboardWelcome';

export default () => (
  <Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/dashboard" element={<Dashboard />}>
      <Route index element={<DashboardWelcome />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  </Routes>
);
