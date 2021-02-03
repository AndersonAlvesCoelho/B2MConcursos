import { combineReducers } from 'redux';
import bank from './bank.reducer';
import institution from './institution.reducer';
import office from './office.reducer';

const rootReducer = combineReducers({
    bank,
    institution,
    office,
});

export default rootReducer;
