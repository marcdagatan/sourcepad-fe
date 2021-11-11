import React from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Login from '../containers/LoginContainer';

const Wrap = styled(Container)`
  height: 100vh;
  width: 100vw;
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Wrap>
    <Login />
  </Wrap>
);
