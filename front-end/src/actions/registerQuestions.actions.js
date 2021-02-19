import {
    UPLOAD_PDF_REQUEST,
    UPLOAD_PDF_SUCCESS,
    UPLOAD_PDF_FAILURE,

    REGISTER_QUESTIONS_REQUEST,
    REGISTER_QUESTIONS_SUCCESS,
    REGISTER_QUESTIONS_FAILURE,
} from '../constants/registerQuestions.constants';

import api from '../services/api';

export const uploadFile = (formData) => (dispatch) => {
    dispatch({ type: UPLOAD_PDF_REQUEST });
    api.post('/uploadQuestions', { formData }, { headers: { 'Content-Type': 'multipart/form-data' } } )
        .then((res) => {
            const { data } = res;

            console.log(data);
            const formatData = data;

            // const formatData = data.map((institution, index) => ({
            //     title: institution.name_institution,
            //     value: `0-${index}`,
            //     key: `0-${index}`,
            // }));

            dispatch({ type: UPLOAD_PDF_SUCCESS, formatData });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch({ type: UPLOAD_PDF_FAILURE, message });
        });
}

export const store = (formData) => (dispatch) => {
    dispatch({ type: REGISTER_QUESTIONS_REQUEST });
    api.post('/registerQuestions', { formData }  )
        .then((res) => {
            const { data } = res;

            console.log(data);

            dispatch({ type: REGISTER_QUESTIONS_SUCCESS });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch({ type: REGISTER_QUESTIONS_FAILURE, message });
        });
}