import { axios, axiosAuthenticated } from '../config/axios';
import { AUTHENTICATING, AUTH_SUCCESS, AUTH_FETCH_USER_DATA, LOGOUT } from './types';

const login = (email, password) => dispatch => {
  dispatch({ type: AUTHENTICATING, payload: 'authenticating' });

  const params = { credentials: { email, password } };

  axios
    .post('signin', params)
    .then(({ data: { data: payload } }) => {
      dispatch({ type: AUTH_SUCCESS, payload });

      axiosAuthenticated()
        .get('whoami')
        .then(({ data }) => dispatch({ type: AUTH_FETCH_USER_DATA, payload: data }));
    })
    .catch(error => dispatch({ type: AUTHENTICATING, payload: error.response.statusText }));
};

const logout = () => dispatch => dispatch({ type: LOGOUT });

export { login, logout };
