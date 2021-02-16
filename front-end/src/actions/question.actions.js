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
export const getQuestion = (offset, limit) => (dispatch) => {
  dispatch({ type: GET_QUESTION_REQUEST });
  api.get(`/questions/${offset}/${limit}`)
    .then((res) => {
      const { data } = res;

      dispatch({ type: GET_QUESTION_SUCCESS, data });
    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : 'Erro desconhecido';
      dispatch({ type: GET_QUESTION_FAILURE, message });
    });
};

//GET TOTAL QTD_QUESTION
export const getQtdQuestion = () => (dispatch) => {
  dispatch({ type: GET_QTD_QUESTION_REQUEST });
  api.get(`/qtdQuestions`)
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
