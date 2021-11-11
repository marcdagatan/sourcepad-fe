import PropTypes from 'prop-types';

const profilePropTypes = PropTypes.shape({
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  zipCode: PropTypes.string,
});

const userPropTypes = PropTypes.shape({
  email: PropTypes.string,
  id: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  passwordDigest: PropTypes.string,
  resetPasswordCode: PropTypes.string,
  profile: profilePropTypes,
});

export { userPropTypes, profilePropTypes };
