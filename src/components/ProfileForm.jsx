import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Alert } from '@mui/material';
import _ from 'lodash/fp';

import TextField from './TextField';

import { userPropTypes } from '../proptypes/userPropTypes';
import { axiosAuthenticated } from '../config/axios';
import arrToStr from '../utils/arrToStr';

const ProfileForm = ({ user: { profile, ...user }, createProfile }) => {
  const fromProfile = key => (profile ? profile[key] : '');

  const [firstName, setFirstName] = useState(fromProfile('firstName'));
  const [lastName, setLastName] = useState(fromProfile('lastName'));
  const [phone, setPhone] = useState(fromProfile('phone'));
  const [address1, setAddress1] = useState(fromProfile('address_1'));
  const [address2, setAddress2] = useState(fromProfile('address_2'));
  const [city, setCity] = useState(fromProfile('city'));
  const [country, setCountry] = useState(fromProfile('country'));
  const [zipCode, setZipCode] = useState(fromProfile('zipCode'));
  const [persisting, setPersisting] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const persistProfile = () => {
    const params = {
      userId: user.id,
      firstName,
      lastName,
      phone,
      city,
      country,
      zipCode,
      address_1: address1,
      address_2: address2,
    };

    axiosAuthenticated()
      .post('/profiles', params)
      .then(({ data }) => {
        createProfile(data);
        setSuccess(true);
        setPersisting(false);
      })
      .catch(err => {
        setErrors(err.response.data.errors);
        setPersisting(false);
      });
  };

  useEffect(() => {
    if (persisting) {
      persistProfile();
    }
  }, [persisting, errors]);

  return (
    <>
      {!_.keys(profile).length && (
        <Alert>
          Weclcome, {user.email}! <br />
          Before proceeding, you need to complete your profile.
        </Alert>
      )}
      {!!_.keys(errors).length && <Alert severity="error">AaaAaAAAaaAAaa! You made mistakes..</Alert>}
      {success && <Alert severity="success">Yay! Successfully saved your profile.</Alert>}
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <TextField
            value={firstName}
            onChange={val => setFirstName(val)}
            label="First Name"
            disabled={persisting}
            error={!!errors.firstName}
            helperText={arrToStr(errors.firstName)}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={lastName}
            onChange={val => setLastName(val)}
            label="Last Name"
            disabled={persisting}
            error={!!errors.lastName}
            helperText={arrToStr(errors.lastName)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={phone}
            onChange={val => setPhone(val)}
            label="Phone"
            disabled={persisting}
            error={!!errors.phone}
            helperText={arrToStr(errors.address_1)}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={address1}
            onChange={val => setAddress1(val)}
            label="Address 1"
            disabled={persisting}
            error={!!errors.address_1}
            helperText={arrToStr(errors.address_1)}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={address2}
            onChange={val => setAddress2(val)}
            label="Address 2"
            error={!!errors.address_2}
            helperText={arrToStr(errors.address_2)}
            disabled={persisting}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={city}
            onChange={val => setCity(val)}
            label="City"
            disabled={persisting}
            error={!!errors.city}
            helperText={arrToStr(errors.city)}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={country}
            onChange={val => setCountry(val)}
            label="Country"
            disabled={persisting}
            error={!!errors.country}
            helperText={arrToStr(errors.country)}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={zipCode}
            onChange={val => setZipCode(val)}
            label="Zip Code"
            disabled={persisting}
            error={!!errors.zipCode}
            helperText={arrToStr(errors.zipCode)}
            required
          />
        </Grid>
      </Grid>
      <Button onClick={() => setPersisting(true)} disabled={persisting} size="large" variant="contained">
        Save Profile
      </Button>
    </>
  );
};

ProfileForm.propTypes = {
  user: userPropTypes.isRequired,
  createProfile: PropTypes.func.isRequired,
};

export default ProfileForm;
