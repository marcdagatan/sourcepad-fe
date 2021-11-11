import { axios } from '../config/axios';

import { PROCESSING_SIGNUP, PROCESSING_FAILED, SIGNUP_SUCCESS } from './types';

export default (email, password, passwordConfirmation) => dispatch => {
  dispatch({ type: PROCESSING_SIGNUP, payload: true });

  const params = { user: { email, password, passwordConfirmation } };

  axios
    .post('users', params)
    .then(({ data }) => {
      console.log(data);
      dispatch({ type: SIGNUP_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: PROCESSING_FAILED, payload: error.response.data }));
};
