import {
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
} from '../constants/comment.constants';

const initialState = {
  loading: false,
  message: '',
  newComment: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {

    //SALVAR COMENTARIO DO USUARIO
    case POST_COMMENT_REQUEST:
      return { ...state, loading: true };

    case POST_COMMENT_SUCCESS: {
      const { data } = action;
      return { ...state, newComment: data, loading: false, };
    }
    case POST_COMMENT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
