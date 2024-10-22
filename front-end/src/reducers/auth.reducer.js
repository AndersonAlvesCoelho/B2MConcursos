import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/auth.constants';

const initialState = {
  loading: false,
  message: [],
  user: [{
    token: 'sadf'
  }
  ],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_REQUEST:
      return { ...state, loading: true, user: '' };

    case LOGIN_SUCCESS: {
      const { user, message } = action;
      return { ...state, message, loading: false, user };
    }
    case LOGIN_FAILURE:
      const { message } = action;
      return { ...state, message, loading: false, user: '' };

    default:
      return state;
  }
}
