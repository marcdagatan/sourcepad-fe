import {
  PROCESSING_SIGNUP,
  PROCESSING_FAILED,
  SIGNUP_SUCCESS,
  AUTHENTICATING,
  AUTH_SUCCESS,
  AUTH_FETCH_USER_DATA,
  LOGOUT,
} from '../actions/types';

const DEFAULT_STATE = {
  user: {},
  signup: { processing: false, errors: {} },
  authState: null,
  authToken: null,
};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS:
      return { user: payload, signup: DEFAULT_STATE.signup, authState: 'newUser' };
    case AUTH_SUCCESS:
      return { ...state, user: { email: payload.email }, authToken: payload.authToken };
    case AUTH_FETCH_USER_DATA:
      return { ...state, user: payload, authState: 'authenticated' };
    case PROCESSING_FAILED:
      return { ...state, signup: { ...state.signUp, processing: false, errors: payload.errors } };
    case PROCESSING_SIGNUP:
      return { ...state, signup: { ...state.signup, processing: payload } };
    case AUTHENTICATING:
      return { ...state, authState: payload };
    case LOGOUT:
      return DEFAULT_STATE;
    default:
      return state;
  }
};
