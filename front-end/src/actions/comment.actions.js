import {
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILURE,
} from '../constants/comment.constants';

import api from '../services/api';

//SALVE USER QANSWER QUESTION
export const saveComment = (type, comment, answer, idQuestion, idComment, idUser) => (dispatch) => {

    dispatch({ type: POST_COMMENT_REQUEST });

    api.post('/comments', { type, comment, answer, idQuestion, idComment, idUser })
        .then((res) => {
            const { data } = res;

            dispatch({ type: POST_COMMENT_SUCCESS, data });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch({ type: POST_COMMENT_FAILURE, message });
        });
}

