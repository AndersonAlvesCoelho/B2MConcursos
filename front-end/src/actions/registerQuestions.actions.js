import {
    UPLOAD_PDF_REQUEST,
    UPLOAD_PDF_SUCCESS,
    UPLOAD_PDF_FAILURE,

    REGISTER_QUESTIONS_REQUEST,
    REGISTER_QUESTIONS_SUCCESS,
    REGISTER_QUESTIONS_FAILURE,
} from '../constants/registerQuestions.constants';

import api from '../services/api';
import { show } from './toast.actions';

export const uploadFile = (formData) => (dispatch) => {
    dispatch({ type: UPLOAD_PDF_REQUEST });
    api.post('/uploadQuestions',  formData , { headers: { 'Content-Type': 'multipart/form-data' } } )
        .then((res) => {
            // alert(JSON.stringify(res))
            const {qtdQuestion, questions, message } = res.data;

            // const formatData = data.map((institution, index) => ({
            //     title: institution.name_institution,
            //     value: `0-${index}`,
            //     key: `0-${index}`,
            // }));


            dispatch({ type: UPLOAD_PDF_SUCCESS, qtdQuestion, questions });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch(show('danger', 'ERRO', message, 5000));
            dispatch({ type: UPLOAD_PDF_FAILURE, message });
        });
}

export const store = (formValues) => (dispatch) => {
    dispatch({ type: REGISTER_QUESTIONS_REQUEST });
    api.post('/registerQuestions',  formValues  )
        .then((res) => {
            const { data, message} = res;

            dispatch(show('success', 'SUCESSO', message, 5000));
            dispatch({ type: REGISTER_QUESTIONS_SUCCESS });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch(show('success', 'ERRO', 'ASD', 5000));
            dispatch({ type: REGISTER_QUESTIONS_FAILURE, message });
        });
}