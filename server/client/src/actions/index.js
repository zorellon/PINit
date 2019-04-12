import axios from 'axios';
import {
    FETCH_USER, 
    FETCH_PINS,
    FETCH_USER_PINS,
    FETCH_MY_PINS,
    CREATE_PIN
} from './types';


export const fetchUser = () => 
    async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    };

export const createPin = (formValues, history) => 
    async (dispatch) => {
        const res = await axios.post('/api/pin/new', formValues);
        history.push('/');
        dispatch({
            //type: FETCH_USER,
            type: CREATE_PIN,
            payload: res.data
        });
    };

export const fetchPins = () => 
    async dispatch => {
        const res = await axios.get('/api/pins');
      
        dispatch({ 
            type: FETCH_PINS, 
            payload: res.data 
        });
    };

export const fetchUserPins = (id) => 
    async dispatch => {
        const res = await axios.get(`/api/pins/${id}`);

    dispatch ({
        type: FETCH_USER_PINS,
        payload: res.data
    });
};

export const fetchMyPins = (id) => 
    async dispatch => {
        const res = await axios.get(`/api/pins/${id}`);

    dispatch ({
        type: FETCH_MY_PINS,
        payload: res.data
    });
};
