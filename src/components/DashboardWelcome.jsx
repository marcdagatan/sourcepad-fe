import React from 'react';
import { Typography } from '@mui/material';
import Link from './Link';

export default () => (
  <>
    <Typography sx={{ color: '#fff' }} variant="h2">
      Got nothing to do now...
    </Typography>
    <Link to="profile">But you can edit your profile again...</Link>
  </>
);
