import {
    GET_INSTITUTION_REQUEST,
    GET_INSTITUTION_SUCCESS,
    GET_INSTITUTION_FAILURE,
  } from '../constants/institution.constants';
  
  import api from '../services/api';
  
  //GET INSTITUTION
  export const getInstitution = () => (dispatch) => {
    dispatch({ type: GET_INSTITUTION_REQUEST });
    api.get('/institution')
      .then((res) => {
        const { data } = res;
        
        const formatData = data.map((institution, index) => ({
          title: institution.name_institution,
          value: `0-${index}`,
          key: `0-${index}`,
        }));
        
        dispatch({ type: GET_INSTITUTION_SUCCESS, formatData });
      })
      .catch((error) => {
        const { response: err } = error;
        const message = err && err.data ? err.data.message : 'Erro desconhecido';
        dispatch({ type: GET_INSTITUTION_FAILURE, message });
      });
  };
  