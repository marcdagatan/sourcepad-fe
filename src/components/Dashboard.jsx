import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Button, Box, Grid } from '@mui/material';
import _ from 'lodash/fp';

import { userPropTypes } from '../proptypes/userPropTypes';
import { logout as logoutAction } from '../actions/auth_actions';

const Topbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  background: #111;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Body = styled.div`
  margin-top: 65px;
  padding: 1rem;
`;

const Dashboard = ({ children, user, logout }) => {
  const navigate = useNavigate();
  const { email, profile } = user;

  useEffect(() => {
    if (!email) {
      navigate('/');
      return;
    }
    if (!_.keys(profile).length) {
      navigate('/dashboard/profile');
    }
  }, [email]);

  return (
    <>
      <Topbar>
        <Box>
          <Typography>Some test</Typography>
        </Box>
        <Box>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography>Welcome, {email}!</Typography>
            </Grid>
            <Grid item>
              <Button onClick={() => logout()} variant="outlined" color="secondary">
                Logout
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Topbar>
      <Body>{children}</Body>
    </>
  );
};

Dashboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  user: userPropTypes.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapActionsToProps = {
  logout: logoutAction,
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
