import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Login from '../pages/Login';

export default () => (
  <Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route exact path="/login" element={<Login />} />
  </Routes>
);
