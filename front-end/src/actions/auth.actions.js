import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../constants/auth.constants';

import { setUserCookie } from '../services/session';
import api from '../services/api';
import { errorsMessage } from '../utils/errorsMessage';
import { successMessage } from '../utils/successMessage';

export const login = (data) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    const { email, password } = data;

    return new Promise((resolve, reject) => {
        api.post('/login', { email, password })
            .then((res) => {
                const { data } = res;
                const { user, message } = data;
                let msg = '';
                if (res.status === 201) {
                    msg = successMessage[message];
                } else {
                    msg = errorsMessage[message];
                }
                setUserCookie(user);
                resolve(user);
                dispatch({ type: LOGIN_SUCCESS, message: msg });
            })
            .catch((error) => {
                const { response: err } = error;
                const message = err && err.data ? err.data.message : 'Erro desconhecido';
                dispatch({ type: LOGIN_FAILURE, message });
                reject(error);
            });
    });

}

