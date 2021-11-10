import PropTypes from 'prop-types';

export const signUpErrorsPropTypes = PropTypes.shape({
  email: PropTypes.arrayOf(PropTypes.string),
  password: PropTypes.arrayOf(PropTypes.string),
  passwordConfirmation: PropTypes.arrayOf(PropTypes.string),
});

export const placeholder = {};
