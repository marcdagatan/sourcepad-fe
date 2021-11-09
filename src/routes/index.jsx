import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';

export default () => (
  <Routes>
    <Route exact path="/" element={<Homepage />} />
  </Routes>
);
