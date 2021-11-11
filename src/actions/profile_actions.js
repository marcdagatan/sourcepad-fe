import axios from '../config/axios';
import { CREATED_PROFILE } from './types';

const createProfile = (userId, firstName, lastName, phone, address1, address2, city, country, zipCode) => dispatch => {
  const params = {
    userId,
    firstName,
    lastName,
    phone,
    city,
    country,
    zipCode,
    address_1: address1,
    address_2: address2,
  };

  axios
    .post('/profiles', params)
    .then(({ data }) => {
      console.log(data);
      dispatch({ type: CREATED_PROFILE, payload: data });
    })
    .catch(err => console.log(err));
};

const placeholder = () => {};

export { createProfile, placeholder };
