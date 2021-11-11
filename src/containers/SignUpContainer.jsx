import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import signUpAction from '../actions/sign_up_action';
import { signUpErrorsPropTypes } from '../proptypes/errorsPropTypes';

import SignUp from '../components/SignUp';

const SignUpContainer = ({ signUp, processing, errors, authState }) => (
  <SignUp {...{ signUp, processing, errors, authState }} />
);

const mapStateToProps = ({
  auth: {
    signup: { processing, errors },
    authState,
  },
}) => ({ processing, errors, authState });

const mapActionsToProps = {
  signUp: signUpAction,
};

SignUpContainer.propTypes = {
  signUp: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
  errors: signUpErrorsPropTypes,
  authState: PropTypes.string,
};

SignUpContainer.defaultProps = {
  errors: null,
  authState: null,
};

export default connect(mapStateToProps, mapActionsToProps)(SignUpContainer);
