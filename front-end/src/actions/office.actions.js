import {
  GET_OFFICE_REQUEST,
  GET_OFFICE_SUCCESS,
  GET_OFFICE_FAILURE,
} from '../constants/office.constants';

import api from '../services/api';

//GET OFFICE
export const getOffice = () => (dispatch) => {
  dispatch({ type: GET_OFFICE_REQUEST });
  api.get('/office')
    .then((res) => {
      const { data } = res;

      // let auxOffice01 = [];
      // let auxOffice02 = [];
      // let auxOffice03 = [];
      // let auxOffice04 = [];


      // console.log('data ', data);
      // data.map((office1, x) => {
      //   auxOffice01.push(office1);
      //   auxOffice02.push(office1.children[0].map((office2) => {
      //     console.log(office2);
      //   }))

      // })

      // auxOffice02.map((office2, y) => {
      //   console.log(office2)
      // })

      // console.log(auxOffice01);
      // console.log(auxOffice02);
      // console.log(auxOffice03);
      // console.log(auxOffice04);


      dispatch({ type: GET_OFFICE_SUCCESS, data });
    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : 'Erro desconhecido';
      dispatch({ type: GET_OFFICE_FAILURE, message });
    });
};
