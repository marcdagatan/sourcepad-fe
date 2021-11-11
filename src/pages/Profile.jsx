import React from 'react';
import styled from 'styled-components';
import { Paper as MuiPaper, Typography } from '@mui/material';

import ProfileForm from '../containers/ProfileFormContainer';

const Paper = styled(MuiPaper)`
  background: #111;
  color: #fff;
  padding: 1rem;
`;

const Profile = () => (
  <Paper>
    <Typography variant="h4">Profile</Typography>
    <ProfileForm />
  </Paper>
);

export default Profile;
