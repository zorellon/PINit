//import _ from 'lodash';
import {
    FETCH_PIN,
    FETCH_PINS,
    FETCH_USER_PINS,
    CREATE_PIN,
    DELETE_PIN,
    PIN_LOADING
} from '../actions/types';

const initialState = {
    pins: [],
    pin: {},
    loading: false
}

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type){
        case FETCH_PIN:
            return {
                ...state,
                pin: action.payload,
                loading: false
            };
        case FETCH_PINS:
            return {
                ...state, 
                pins: action.payload,
                loading: false
            }; 
        case FETCH_USER_PINS:
            return {
                ...state,
                pins: action.payload,
                loading: false
            };
        case CREATE_PIN:
            //, ...state.pins
            return {
                ...state, 
                pins: [action.payload]
            }; 
        case DELETE_PIN:
            return {
                ...state,
                pins: state.pins.filter(pin => pin._id !== action.payload)  
                };
        case PIN_LOADING:
            return {
                ...state,
                loading: true
            }; 
        default:
            return state;
    }
}

