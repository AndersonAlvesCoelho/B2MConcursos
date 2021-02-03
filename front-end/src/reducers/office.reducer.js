import {
    GET_OFFICE_REQUEST,
    GET_OFFICE_SUCCESS,
    GET_OFFICE_FAILURE,
  } from '../constants/office.constants';
  
  const officeInstitution = {
    loading: false,
    office: [],
    message: '',
  };
  
  export default function officeReducer(state = officeInstitution, action) {
    switch (action.type) {
  
      //GET OFFICE
      case GET_OFFICE_REQUEST:
        return { ...state, loading: true };
  
      case GET_OFFICE_SUCCESS: {
        const { formatData } = action;
        return { ...state, office: formatData, loading: false, };
      }
      case GET_OFFICE_FAILURE:
        return { ...state, loading: false };
  
  
      default:
        return state;
    }
  }
  