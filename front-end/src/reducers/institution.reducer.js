import {
    GET_INSTITUTION_REQUEST,
    GET_INSTITUTION_SUCCESS,
    GET_INSTITUTION_FAILURE,
  } from '../constants/institution.constants';
  
  const initialInstitution = {
    loading: false,
    institution: [],
    message: '',
  };
  
  export default function institutionReducer(state = initialInstitution, action) {
    switch (action.type) {
  
      //GET INSTITUTION
      case GET_INSTITUTION_REQUEST:
        return { ...state, loading: true };
  
      case GET_INSTITUTION_SUCCESS: {
        const { formatData } = action;
        return { ...state, institution: formatData, loading: false, };
      }
      case GET_INSTITUTION_FAILURE:
        return { ...state, loading: false };
  
  
  
      default:
        return state;
    }
  }
  