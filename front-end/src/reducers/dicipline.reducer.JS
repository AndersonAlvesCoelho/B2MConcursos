import {
    GET_DICIPLINE_REQUEST,
    GET_DICIPLINE_SUCCESS,
    GET_DICIPLINE_FAILURE,
  } from '../constants/dicipline.constants';
  
  const initialDicipline = {
    loading: false,
    dicipline: [],
    message: '',
  };
  
  export default function Reducer(state = initialDicipline, action) {
    switch (action.type) {
  
      //GET DICIPLINE
      case GET_DICIPLINE_REQUEST:
        return { ...state, loading: true };
  
      case GET_DICIPLINE_SUCCESS: {
        const { formatData } = action;
        return { ...state, dicipline: formatData, loading: false, };
      }
      case GET_DICIPLINE_FAILURE:
        return { ...state, loading: false };
        
      default:
        return state;
    }
  }
  