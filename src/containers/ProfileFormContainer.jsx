import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileForm from '../components/ProfileForm';
import { userPropTypes } from '../proptypes/userPropTypes';
import createProfileAction from '../actions/profile_actions';

const ProfileFormContainer = ({ user, createProfile }) => <ProfileForm user={user} createProfile={createProfile} />;

ProfileFormContainer.propTypes = {
  user: userPropTypes.isRequired,
  createProfile: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapActionsToProps = { createProfile: createProfileAction };

export default connect(mapStateToProps, mapActionsToProps)(ProfileFormContainer);
