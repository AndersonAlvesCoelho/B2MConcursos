import { combineReducers } from 'redux';
import bank from './bank.reducer';
import institution from './institution.reducer';
import office from './office.reducer';
import dicipline from './dicipline.reducer';

const rootReducer = combineReducers({
    bank,
    institution,
    office,
    dicipline,
});

export default rootReducer;
