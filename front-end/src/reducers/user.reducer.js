import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  POST_USER_ANSWERS_QUESTION_REQUEST,
  POST_USER_ANSWERS_QUESTION_SUCCESS,
  POST_USER_ANSWERS_QUESTION_FAILURE,
  GET_USER_ANSWERS_QUESTION_REQUEST,
  GET_USER_ANSWERS_QUESTION_SUCCESS,
  GET_USER_ANSWERS_QUESTION_FAILURE,
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
