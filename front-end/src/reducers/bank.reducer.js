import {
  GET_BANK_REQUEST,
  GET_BANK_SUCCESS,
  GET_BANK_FAILURE,
} from '../constants/bank.constants';

const initialState = {
  loading: false,
  bank: [],
  message: '',
};

export default function askingQuestionsReducer(state = initialState, action) {
  switch (action.type) {


    //GET BANK
    case GET_BANK_REQUEST:
      return { ...state, loading: true };

    case GET_BANK_SUCCESS: {
      const { formatData } = action;
      return { ...state, bank: formatData, loading: false, };
    }
    case GET_BANK_FAILURE:
      return { ...state, loading: false };



    default:
      return state;
  }
}
