import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../constants/auth.constants';

import { setUserCookie } from '../services/session';
import { errorsMessage } from '../utils/errorsMessage';
import { successMessage } from '../utils/successMessage';

import api from '../services/api';

export const login = (data) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    const { email, password } = data;

    return new Promise((resolve, reject) => {
        api.post('/login', { email, password })
            .then((res) => {
                const { data } = res;
                const { user, message } = data;

                dispatch({ type: LOGIN_SUCCESS, message: successMessage[message], user: user });
                setUserCookie(user);
                resolve(user);
            })
            .catch((error) => {
                const { response: err } = error;


                console.log(err)
                console.log(data)
                const message = err && err.data ? errorsMessage[err.data.message] : errorsMessage['all/erro'];
                console.log(message)
                dispatch({ type: LOGIN_FAILURE, message });
                reject(error);
            });
    });

}

