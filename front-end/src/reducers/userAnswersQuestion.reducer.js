import {
  POST_USER_ANSWERS_QUESTION_REQUEST,
  POST_USER_ANSWERS_QUESTION_SUCCESS,
  POST_USER_ANSWERS_QUESTION_FAILURE,
  GET_USER_ANSWERS_QUESTION_REQUEST,
  GET_USER_ANSWERS_QUESTION_SUCCESS,
  GET_USER_ANSWERS_QUESTION_FAILURE,
} from '../constants/userAnswersQuestion.constants';

const initialState = {
  loading: false,
  message: '',
  answerQuestion: [],

};

export default function userReducer(state = initialState, action) {
  switch (action.type) {

    //SALVAR RESPOSTA DO USUARIO
    case POST_USER_ANSWERS_QUESTION_REQUEST:
      return { ...state, loading: true };

    case POST_USER_ANSWERS_QUESTION_SUCCESS: {
      return { ...state, loading: false, };
    }
    case POST_USER_ANSWERS_QUESTION_FAILURE:
      return { ...state, loading: false };


    //GET USER QANSWER QUESTION
    case GET_USER_ANSWERS_QUESTION_REQUEST:
      return { ...state, loading: true };

    case GET_USER_ANSWERS_QUESTION_SUCCESS: {
      const { data } = action;
      return { ...state, answerQuestion: data, loading: false, };
    }
    case GET_USER_ANSWERS_QUESTION_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
}
