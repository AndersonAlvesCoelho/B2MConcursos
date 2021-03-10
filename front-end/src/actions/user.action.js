import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from '../constants/user.constants';

export const register = (formData) => (dispatch) => {
    dispatch({ type: REGISTER_USER_REQUEST });
    api.post('/registerUser', formData  )
        .then((res) => {
            const { data } = res;

            console.log(data);

            dispatch({ type: REGISTER_USER_SUCCESS });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch({ type: REGISTER_USER_FAILURE, message });
        });
}
