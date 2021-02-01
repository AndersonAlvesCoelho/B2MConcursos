import { combineReducers } from 'redux';
import bank from './bank.reducer';

const rootReducer = combineReducers({
    bank,
});

export default rootReducer;
