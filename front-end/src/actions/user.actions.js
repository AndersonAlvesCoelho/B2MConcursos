import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from '../constants';

import api from '../services/api';
import { show } from './toast.actions';

import { errorsMessage } from '../utils/errorsMessage';
import { successMessage } from '../utils/successMessage';

export const store = (formData) => (dispatch) => {
    dispatch({ type: REGISTER_USER_REQUEST });
    api.post('/registerUser', formData)
        .then((res) => {
            const { data } = res;
            const message = successMessage[data];
            dispatch({ type: REGISTER_USER_SUCCESS, message });
            // dispatch(show('danger', 'ERRO', message, 5000));
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? errorsMessage[err.data] : 'Erro desconhecido';
            // dispatch(show('danger', 'ERRO', message, 5000));
            dispatch({ type: REGISTER_USER_FAILURE, message });
        });
}
