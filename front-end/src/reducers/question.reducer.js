import {
  GET_QUESTION_REQUEST,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE
} from '../constants/question.constants';

const questionInstitution = {
  loading: false,
  question: [],
  countQuetion: 0,
  qtdQuestion: [],
  message: '',
};

export default function questionReducer(state = questionInstitution, action) {
  switch (action.type) {

    //GET QUESTION
    case GET_QUESTION_REQUEST:
      return { ...state, loading: true };

    case GET_QUESTION_SUCCESS: {
      const { data, count } = action;
      return { ...state, question: data, countQuetion: count,loading: false, };
    }
    case GET_QUESTION_FAILURE:
      return { ...state, loading: false };


    default:
      return state;
  }
}
