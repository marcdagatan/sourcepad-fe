import { PROCESSING_SIGNUP, PROCESSING_FAILED, SIGNUP_SUCCESS } from '../actions/types';

const DEFAULT_STATE = {
  user: null,
  signup: { processing: false, errors: {} },
  authState: null,
};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS:
      return { user: payload, signup: DEFAULT_STATE.signup, authState: 'newUser' };
    case PROCESSING_FAILED:
      return { ...state, signup: { ...state.signUp, processing: false, errors: payload.errors } };
    case PROCESSING_SIGNUP:
      return { ...state, signup: { ...state.signup, processing: payload } };
    default:
      return state;
  }
};
