import {
  UPLOAD_PDF_REQUEST,
  UPLOAD_PDF_SUCCESS,
  UPLOAD_PDF_FAILURE,

  REGISTER_QUESTIONS_REQUEST,
  REGISTER_QUESTIONS_SUCCESS,
  REGISTER_QUESTIONS_FAILURE
} from '../constants/registerQuestions.constants';
  
  const initialState = {
    loading: false,
    pdf: [],
    message: '',
  };
  
  export default function registerQuestionsReducer(state = initialState, action) {
    switch (action.type) {
  
      case UPLOAD_PDF_REQUEST:
        return { ...state, loading: true };
  
      case UPLOAD_PDF_SUCCESS: {
        const { formatData } = action;
        return { ...state, pdf: formatData, loading: false, };
      }
      case UPLOAD_PDF_FAILURE:
        return { ...state, loading: false };


      case REGISTER_QUESTIONS_REQUEST:
        return { ...state, loading: true };

      case REGISTER_QUESTIONS_SUCCESS: {
        return { ...state,  loading: false, };
      }
      case REGISTER_QUESTIONS_FAILURE:
        return { ...state, loading: false };
  
      default:
        return state;
    }
  }
  