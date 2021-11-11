import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardActions, Button, Alert, Box } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Block from './Block';
import TextField from './TextField';

const ActionsBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Login = ({ login, authState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (authState === 'authenticated') {
      navigate('/dashboard');
    }
  }, [authState]);

  const authenticating = authState === 'authenticating';
  const wrongCreds = authState === 'Unauthorized';
  const newUser = authState === 'newUser';

  return (
    <Card>
      <CardContent>
        <Block maxWidth="600px">
          <Typography variant="h4">Login</Typography>
        </Block>
        {newUser && (
          <Alert>
            Hey you! <br /> Congrats on making your account. <br /> Do your first login now.
          </Alert>
        )}
        {wrongCreds && (
          <Alert severity="error">Oh nose.. You entered the wrong credentials, bud.. Try again, maybe?</Alert>
        )}
        <TextField value={email} label="Email" onChange={val => setEmail(val)} disabled={authenticating} required />
        <TextField
          value={password}
          label="Password"
          onChange={val => setPassword(val)}
          type="password"
          disabled={authenticating}
          required
        />
      </CardContent>
      <CardActions>
        <ActionsBox>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={() => login(email, password)}
            disabled={authenticating}
          >
            Login
          </Button>
          <Button size="large" color="secondary" onClick={() => navigate('/')} disabled={authenticating}>
            I don&apos;t have an account
          </Button>
        </ActionsBox>
      </CardActions>
    </Card>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  authState: PropTypes.string,
};

Login.defaultProps = {
  authState: null,
};

export default Login;
