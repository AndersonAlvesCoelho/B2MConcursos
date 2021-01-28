import {
  GET_BANK_REQUEST,
  GET_BANK_SUCCESS,
  GET_BANK_FAILURE,
} from '../constants/bank.constants';

import { api } from '../services/api';

//GET BANK
export const getBank = () => (dispatch) => {
  dispatch({ type: GET_BANK_REQUEST });
  api.get('/bank')
    .then((res) => {
      const { data } = res;

      dispatch({ type: GET_BANK_SUCCESS, data });
    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : 'Erro desconhecido';
      dispatch({ type: GET_BANK_FAILURE, message });
    });
};
