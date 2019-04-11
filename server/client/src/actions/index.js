import axios from 'axios';
import {FETCH_USER, CREATE_PIN} from './types';
//import history from '../history';

export const fetchUser = () => 
    async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER,payload: res.data});
    };

export const createPin = (formValues) => 
    async (dispatch) => {
        const res = await axios.post('/api/pins/new', formValues)
        dispatch({type: CREATE_PIN,payload: res.data});
    };


// export const createPin2 = formValues => async (dispatch, getState) => {
//     const {userId} = getState().auth;
//     const response = await axios.post('/api/pins/new', {...formValues, userId});

//     dispatch ({
//         type: CREATE_PIN,
//         payload: response.data
//     });
    // Navigating to main page after stream creation
    //history.push('/');
//};