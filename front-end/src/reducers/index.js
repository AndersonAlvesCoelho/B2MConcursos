import { combineReducers } from 'redux';
import bank from './bank.reducer';
import institution from './institution.reducer';
import office from './office.reducer';
import dicipline from './dicipline.reducer';
import question from './question.reducer';
import user from './user.reducer';
import userAnswersQuestion from './userAnswersQuestion.reducer';
import comment from './comment.reducer';

const rootReducer = combineReducers({
    bank,
    institution,
    office,
    dicipline,
    question,
    user,
    userAnswersQuestion,
    comment
});

export default rootReducer;
