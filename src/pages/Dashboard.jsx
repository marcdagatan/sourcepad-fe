import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

export default () => (
  <Dashboard>
    <Outlet />
  </Dashboard>
);
