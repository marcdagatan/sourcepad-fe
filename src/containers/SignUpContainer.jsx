import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import signUpAction from '../actions/sign_up_action';
import { signUpErrorsPropTypes } from '../proptypes/errorsPropTypes';

import SignUp from '../components/SignUp';

const SignUpContainer = ({ signUp, processing, errors }) => <SignUp {...{ signUp, processing, errors }} />;

const mapStateToProps = ({
  auth: {
    signup: { processing, errors },
  },
}) => ({ processing, errors });

const mapActionsToProps = {
  signUp: signUpAction,
};

SignUpContainer.propTypes = {
  signUp: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
  errors: signUpErrorsPropTypes,
};

SignUpContainer.defaultProps = {
  errors: null,
};

export default connect(mapStateToProps, mapActionsToProps)(SignUpContainer);
