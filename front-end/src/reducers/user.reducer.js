import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../constants/user.constants';

const initialState = {
  loading: false,
  pdf: [],
  message: '',

};

// REGISTER USER LOGIN
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { ...state, loading: true };

    case REGISTER_USER_SUCCESS: {
      const { message } = action;
      return { ...state, message, loading: false, };
    }
    case REGISTER_USER_FAILURE:
      const { message } = action;
      return { ...state, message, loading: false };

    default:
      return state;
  }
}
