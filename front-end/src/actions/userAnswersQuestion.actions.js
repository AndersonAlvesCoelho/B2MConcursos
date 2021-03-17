import {
    POST_USER_ANSWERS_QUESTION_REQUEST,
    POST_USER_ANSWERS_QUESTION_SUCCESS,
    POST_USER_ANSWERS_QUESTION_FAILURE,
    GET_USER_ANSWERS_QUESTION_REQUEST,
    GET_USER_ANSWERS_QUESTION_SUCCESS,
    GET_USER_ANSWERS_QUESTION_FAILURE,
} from '../constants/userAnswersQuestion.constants';

import api from '../services/api';

//SALVE USER QANSWER QUESTION
export const saveUserAnswersQuestion = (idUser, idQuestion, answer) => (dispatch) => {

    dispatch({ type: POST_USER_ANSWERS_QUESTION_REQUEST });

    api.post('/saveUserAnswers', { idUser, idQuestion, answer })
        .then(() => {
            dispatch({ type: POST_USER_ANSWERS_QUESTION_SUCCESS });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch({ type: POST_USER_ANSWERS_QUESTION_FAILURE, message });
        });
}

//GET USER QANSWER QUESTION
export const getAnswerQuestion = (idUser, idQuestion) => (dispatch) => {
    dispatch({ type: GET_USER_ANSWERS_QUESTION_REQUEST });

    api.post('/userAnswersQuestion', { idUser, idQuestion })
        .then((res) => {
            const { data } = res;

            dispatch({ type: GET_USER_ANSWERS_QUESTION_SUCCESS, data });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch({ type: GET_USER_ANSWERS_QUESTION_FAILURE, message });
        });
};
