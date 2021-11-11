import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from '../components/Login';
import LoginAction from '../actions/auth_action';

const LoginContainer = ({ login, authState }) => <Login {...{ login, authState }} />;

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  authState: PropTypes.string,
};

LoginContainer.defaultProps = {
  authState: null,
};

const mapStateToProps = ({ auth: { authState } }) => ({ authState });

const mapActionsToProps = {
  login: LoginAction,
};

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);
