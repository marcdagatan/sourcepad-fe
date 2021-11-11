import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardContent, CardActions, Button, Typography, Grid, Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { signUpErrorsPropTypes } from '../proptypes/errorsPropTypes';
import arrToStr from '../utils/arrToStr';

import TextField from './TextField';
import Block from './Block';

const ActionsBox = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SignUp = ({ signUp, processing, errors, authState }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    if (authState === 'newUser') {
      navigate('/login');
    }
    if (authState === 'authenticated') {
      navigate('/dashboard');
    }
  }, [authState]);

  return (
    <Card>
      <CardContent>
        <Block maxWidth="600px">
          <Typography variant="h4">Sign up</Typography>
        </Block>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              value={email}
              onChange={val => setEmail(val)}
              label="Email"
              disabled={processing}
              error={!!errors.email}
              helperText={arrToStr(errors.email)}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              value={password}
              onChange={val => setPassword(val)}
              label="Password"
              type="password"
              disabled={processing}
              error={!!errors.password}
              helperText={arrToStr(errors.password)}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              value={passwordConfirmation}
              onChange={val => setPasswordConfirmation(val)}
              label="Password Confirmation"
              type="password"
              disabled={processing}
              error={!!errors.passwordConfirmation}
              helperText={arrToStr(errors.passwordConfirmation)}
              required
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <ActionsBox>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={() => signUp(email, password, passwordConfirmation)}
            disabled={processing}
          >
            {processing ? 'Please wait..' : 'Sign Up'}
          </Button>
          <Button size="large" color="secondary" disabled={processing} onClick={() => navigate('/login')}>
            I already have an account
          </Button>
        </ActionsBox>
      </CardActions>
    </Card>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
  errors: signUpErrorsPropTypes,
  authState: PropTypes.string,
};

SignUp.defaultProps = {
  errors: {},
  authState: null,
};

export default SignUp;
