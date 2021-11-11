import axios from '../config/axios';
import { AUTHENTICATING, AUTH_SUCCESS } from './types';

export default (email, password) => dispatch => {
  dispatch({ type: AUTHENTICATING, payload: 'authenticating' });

  const params = { credentials: { email, password } };

  axios
    .post('signin', params)
    .then(({ data: payload }) => {
      console.log(payload);
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(error => dispatch({ type: AUTHENTICATING, payload: error.response.statusText }));
};
