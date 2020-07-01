import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import sayHiReducer from './sayHiReducer';

export default combineReducers({
    counter: counterReducer,
    sayHi: sayHiReducer
});