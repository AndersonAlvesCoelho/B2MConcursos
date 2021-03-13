import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/auth.constants';
  
  const initialState = {
    loading: false,
    message: '',
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
  
      case LOGIN_REQUEST:
        return { ...state, loading: true };
  
      case LOGIN_SUCCESS: {
        return { ...state, loading: false, };
      }
      case LOGIN_FAILURE:
        return { ...state, loading: false };

      default:
        return state;
    }
  }
  