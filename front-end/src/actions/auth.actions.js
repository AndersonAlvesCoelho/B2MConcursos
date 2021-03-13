import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../constants/auth.constants';

import api from '../services/api';

export const login = (data) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    const { email, password } = data;
    if (!email || !password) {
        console.log(' :( ')
        // this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
        api.post('/login', { email, password }  )
            .then((res) => {
                const { data } = res;
                console.log(data);
                dispatch({ type: LOGIN_SUCCESS });
                this.props.history.push("/");
            })
            .catch((error) => {
                const { response: err } = error;
                const message = err && err.data ? err.data.message : 'Erro desconhecido';
                dispatch({ type: LOGIN_FAILURE, message });
            });
    }


}
