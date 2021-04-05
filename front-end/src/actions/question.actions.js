import {
  GET_QUESTION_REQUEST,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAILURE,
  GET_QTD_QUESTION_REQUEST,
  GET_QTD_QUESTION_SUCCESS,
  GET_QTD_QUESTION_FAILURE,
} from '../constants/question.constants';

import api from '../services/api';

//GET QUESTION
export const getQuestion = (filter) => (dispatch) => {
  console.log(filter);
  
  dispatch({ type: GET_QUESTION_REQUEST });
  api.post('/questions', filter)
    .then((res) => {
      const { data, count } = res.data;
      console.log('res.data ', res);

      dispatch({ type: GET_QUESTION_SUCCESS, data, count });
    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : 'Erro desconhecido';
      dispatch({ type: GET_QUESTION_FAILURE, message });
    });
};

//GET TOTAL QTD_QUESTION
export const getQtdQuestion = (filter) => (dispatch) => {
  dispatch({ type: GET_QTD_QUESTION_REQUEST });
  api.post('/qtdQuestions', filter)
    .then((res) => {
      const { data } = res;

      dispatch({ type: GET_QTD_QUESTION_SUCCESS, data });
    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : 'Erro desconhecido';
      dispatch({ type: GET_QTD_QUESTION_FAILURE, message });
    });
};
