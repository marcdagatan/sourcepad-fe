import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardContent, CardActions, Button, Typography, TextField as MtTextField, Grid } from '@mui/material';

import { signUpErrorsPropTypes } from '../proptypes/errorsPropTypes';

import Block from './Block';

const Input = styled(MtTextField)`
  width: 100%;
`;

const InputHolder = styled.div`
  padding-bottom: 0.5rem;
`;

const arrToStr = arr => (arr ? arr.join(', ') : '');

const TextField = ({ onChange, ...props }) => (
  <InputHolder>
    <Input onChange={e => onChange(e.target.value)} {...props} />
  </InputHolder>
);

TextField.propTypes = { onChange: PropTypes.func.isRequired };

const SignUp = ({ signUp, processing, errors }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

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
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={() => signUp(email, password, passwordConfirmation)}
          disabled={processing}
        >
          {processing ? 'Please wait..' : 'Sign Up'}
        </Button>
      </CardActions>
    </Card>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
  errors: signUpErrorsPropTypes,
};

SignUp.defaultProps = {
  errors: {},
};

export default SignUp;
