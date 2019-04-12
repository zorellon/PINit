import {combineReducers} from 'redux';
import authReducer from './authReducer';
import pinReducer from './pinReducer';
// is made in redux form automatically
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    pins: pinReducer
});