import {
  GET_OFFICE_REQUEST,
  GET_OFFICE_SUCCESS,
  GET_OFFICE_FAILURE,
} from '../constants/office.constants';

import api from '../services/api';

//GET OFFICE
export const getOffice = () => (dispatch) => {
  dispatch({ type: GET_OFFICE_REQUEST });
  api.get('/offices')
    .then((res) => {
      const { data } = res;

      // Formatando data para ficar compativel com o select tree do ant
      const formatData = data.map((office01, x) => ({
        title: office01.name_office,
        value: `0-${x}`,
        id: office01.id_office_niv_1,
        children: office01.office_niv_2.map((office02, y) => {
          {
            return ({
              title: office02.name_office,
              value: `0-${x}-${y}`,
              id: office02.id_office_niv_2,
              children: office02.office_niv_3.map((office03, z) => {
                {
                  return ({
                    title: office03.name_office,
                    value: `0-${x}-${y}-${z}`,
                    id: office03.id_office_niv_3,
                    children: office03.office_niv_4.map((office04, w) => {
                      {
                        return ({
                          title: office04.name_office,
                          value: `0-${x}-${y}-${z}-${w}`,
                          id: office04.id_office_niv_4,
                        })
                      }
                    })
                  })
                }
              })
            })
          }
        })
      }));

      dispatch({ type: GET_OFFICE_SUCCESS, formatData });
    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : 'Erro desconhecido';
      dispatch({ type: GET_OFFICE_FAILURE, message });
    });
};
