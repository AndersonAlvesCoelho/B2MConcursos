import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../constants/auth.constants';

import api from '../services/api';

export const login = (formData) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    api.post('/login', formData  )
        .then((res) => {
            const { data } = res;

            console.log(data);

            dispatch({ type: LOGIN_SUCCESS });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch({ type: LOGIN_FAILURE, message });
        });
}
