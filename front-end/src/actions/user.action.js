import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from '../constants/user.constants';

export const register = (formData) => (dispatch) => {
    dispatch({ type: REGISTER_USER_REQUEST });
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

            dispatch({ type: REGISTER_USER_SUCCESS, formatData });
        })
        .catch((error) => {
            const { response: err } = error;
            const message = err && err.data ? err.data.message : 'Erro desconhecido';
            dispatch({ type: REGISTER_USER_FAILURE, message });
        });
}
