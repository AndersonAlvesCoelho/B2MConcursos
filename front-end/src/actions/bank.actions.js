import {
  GET_BANK_REQUEST,
  GET_BANK_SUCCESS,
  GET_BANK_FAILURE,
} from '../constants/bank.constants';

import api from '../services/api';

//GET BANK
export const getBank = () => (dispatch) => {
  dispatch({ type: GET_BANK_REQUEST });
  api.get('/banks')
    .then((res) => {
      const { data } = res;
      
      //Formatando data para ficar compativel com o select tree do ant
      const formatData = data.map((bank, index) => ({
        title: bank.name_bank,
        value: `0-${index}`,
        id: bank.id_bank,
      }));


      dispatch({ type: GET_BANK_SUCCESS, formatData });
    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : 'Erro desconhecido';
      dispatch({ type: GET_BANK_FAILURE, message });
    });
};
