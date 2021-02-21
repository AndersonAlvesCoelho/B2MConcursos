import {
  GET_DICIPLINE_REQUEST,
  GET_DICIPLINE_SUCCESS,
  GET_DICIPLINE_FAILURE,
} from '../constants/dicipline.constants';

import api from '../services/api';

//GET DICIPLINE
export const getDicipline = () => (dispatch) => {
  dispatch({ type: GET_DICIPLINE_REQUEST });
  api.get('/subjects')
    .then((res) => {
      const { data } = res;

      // Formatando data para ficar compativel com o select tree do ant
      const formatData = data.map((dicipline, a) => ({
        title: dicipline.name_dicipline,
        value: `0-${a}`,
        id: dicipline.id_dicipline,
        children: dicipline.length !== 0 && dicipline.subject_niv_1.map((subject01, b) => {
          {
            return ({
              title: subject01.name_subject,
              value: `0-${a}-${b}`,
              id: subject01.id_subject_niv_1,
              children: subject01.length !== 0 && subject01.subject_niv_2.map((subject02, c) => {
                {
                  return ({
                    title: subject02.name_subject,
                    value: `0-${a}-${b}-${c}`,
                    id: subject02.id_subject_niv_2,
                    children: subject02.length !== 0 && subject02.subject_niv_3.map((subject03, d) => {
                      {
                        return ({
                          title: subject03.name_subject,
                          value: `0-${a}-${b}-${c}-${d}`,
                          id: subject03.id_subject_niv_3,
                          // children: subject03.length !== 0 && subject03.subject_niv_4.map((subject04, e) => {
                          //   {
                          //     return ({
                          //       title: subject04.name_subject,
                          //       value: `0-${a}-${b}-${c}-${d}-${e}`,
                          //       key: `0-${a}-${b}-${c}-${d}-${e}`,
                          //       children: subject04.length !== 0 && subject04.subject_niv_5.map((subject05, f) => {
                          //         {
                          //           return ({
                          //             title: subject05.name_subject,
                          //             value: `0-${a}-${b}-${c}-${d}-${e}-${f}`,
                          //             key: `0-${a}-${b}-${c}-${d}-${e}-${f}`,
                          //             children: subject05.length !== 0 && subject05.subject_niv_6.map((subject06, g) => {
                          //               {
                          //                 return ({
                          //                   title: subject06.name_subject,
                          //                   value: `0-${a}-${b}-${c}-${d}-${e}-${f}-${g}`,
                          //                   key: `0-${a}-${b}-${c}-${d}-${e}-${f}-${g}`,
                          //                   children: subject06.length !== 0 && subject06.subject_niv_7.map((subject07, h) => {
                          //                     {
                          //                       return ({
                          //                         title: subject07.name_subject,
                          //                         value: `0-${a}-${b}-${c}-${d}-${e}-${f}-${g}`,
                          //                         key: `0-${a}-${b}-${c}-${d}-${e}-${f}-${g}`,
                          //                       })
                          //                     }
                          //                   })
                          //                 })
                          //               }
                          //             })
                          //           })
                          //         }
                          //       })
                          //     })
                          //   }
                          // })
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

      dispatch({ type: GET_DICIPLINE_SUCCESS, formatData });
    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : 'Erro desconhecido';
      dispatch({ type: GET_DICIPLINE_FAILURE, message });
    });
};
