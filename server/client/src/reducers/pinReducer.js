import {
    FETCH_PINS,
    FETCH_USER_PINS,
    FETCH_MY_PINS,
    CREATE_PIN
} from '../actions/types';

export default function(state = [], action){
    switch (action.type){
        case FETCH_PINS:
            return action.payload;
        case FETCH_USER_PINS:
            return action.payload;
        case FETCH_MY_PINS:
            return action.payload;
        case CREATE_PIN:
            return action.payload;    
        default:
            return state;
    }
}