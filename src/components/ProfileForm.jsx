import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@mui/material';

import TextField from './TextField';

import { userPropTypes } from '../proptypes/userPropTypes';

const ProfileForm = ({ user: { profile, ...user }, createProfile }) => {
  console.log(user);
  const fromProfile = key => (profile ? profile[key] : '');

  const [firstName, setFirstName] = useState(fromProfile('firstName'));
  const [lastName, setLastName] = useState(fromProfile('lastName'));
  const [phone, setPhone] = useState(fromProfile('phone'));
  const [address1, setAddress1] = useState(fromProfile('address1'));
  const [address2, setAddress2] = useState(fromProfile('address2'));
  const [city, setCity] = useState(fromProfile('city'));
  const [country, setCountry] = useState(fromProfile('country'));
  const [zipCode, setZipCode] = useState(fromProfile('zipCode'));

  const persistProfile = () =>
    createProfile(user.id, firstName, lastName, phone, address1, address2, city, country, zipCode);

  return (
    <form>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <TextField value={firstName} onChange={val => setFirstName(val)} label="First Name" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField value={lastName} onChange={val => setLastName(val)} label="Last Name" required />
        </Grid>
        <Grid item xs={12}>
          <TextField value={phone} onChange={val => setPhone(val)} label="Phone" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField value={address1} onChange={val => setAddress1(val)} label="Address 1" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField value={address2} onChange={val => setAddress2(val)} label="Address 2" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField value={city} onChange={val => setCity(val)} label="City" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField value={country} onChange={val => setCountry(val)} label="Country" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField value={zipCode} onChange={val => setZipCode(val)} label="Zip Code" />
        </Grid>
      </Grid>
      <Button onClick={persistProfile}>Save Profile</Button>
    </form>
  );
};

ProfileForm.propTypes = {
  user: userPropTypes.isRequired,
  createProfile: PropTypes.func,
};

ProfileForm.defaultProps = {
  createProfile: () => {},
};

export default ProfileForm;
