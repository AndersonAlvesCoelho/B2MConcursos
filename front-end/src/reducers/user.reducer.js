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
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
  
      case REGISTER_USER_REQUEST:
        return { ...state, loading: true };
  
      case REGISTER_USER_SUCCESS: {
        return { ...state, loading: false, };
      }
      case REGISTER_USER_FAILURE:
        return { ...state, loading: false };

      default:
        return state;
    }
  }
  