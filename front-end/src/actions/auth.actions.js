import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../constants/auth.constants';

import { setUserCookie } from '../services/session';
import api from '../services/api';

export const login = (data) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    const { email, password } = data;
    if (!email || !password) {
        console.log(' Preencha todos os dados para se cadastrar')
        // this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
        return new Promise((resolve, reject) => {
        api.post('/login', { email, password }  )
            .then((res) => {
                const { data } = res;
                const { user } = data;
                setUserCookie(user);
                resolve(user);
                dispatch({ type: LOGIN_SUCCESS, user: user });
            })
            .catch((error) => {
                const { response: err } = error;
                const message = err && err.data ? err.data.message : 'Erro desconhecido';
                dispatch({ type: LOGIN_FAILURE, message });
                reject(error);
            });
        });
    }


}

