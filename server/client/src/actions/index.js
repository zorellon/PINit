import axios from 'axios';

import {
    FETCH_USER, 
    FETCH_PIN,
    FETCH_PINS,
    FETCH_USER_PINS,
    PIN_LOADING,
    CREATE_PIN,
    DELETE_PIN
} from './types';

//These are pin CRUD actions 
// ones with dispatch are put in redux store

export const fetchUser = () => 
    async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    };

// export const fetchPin = (pin_id) => 
//     async (dispatch) => {
//         const res = await axios.get(`/api/pin/${pin_id}`);
//         dispatch({
//             type: FETCH_PIN,
//             payload: res.data
//         });
//     };

export const fetchPin = (pin_id) => (dispatch) => {
        axios.get(`/api/pin/${pin_id}`)
            .then(res => 
                dispatch({
                    type: FETCH_PIN,
                    payload: res.data
                })
            )
            .catch(err =>
                dispatch({
                    type: FETCH_PIN,
                    payload: null
                })
            );
    };

export const fetchPins = () => 
    async dispatch => {
        const res = await axios.get('/api/pin/all');
        dispatch({ 
            type: FETCH_PINS, 
            payload: res.data 
        });
    };

export const fetchUserPins = (user_id) => 
    async dispatch => {
        const res = await axios.get(`/api/pin/user/${user_id}`);
    dispatch ({
        type: FETCH_USER_PINS,
        payload: res.data
    });
};

//history.push('/HomeFeed'),
export const createPin = (formValues, history) => dispatch => {
    axios.post('/api/pin/new', formValues)
      .then(res => 
        dispatch({
          type: CREATE_PIN,
          payload: res.data
        })
      )
      history.push('/');
  };

    //,history
export const deletePin = (pin_id, history) => 
    async (dispatch) => {
        const res = await axios.delete(`/api/pin/delete/${pin_id}`);
        history.push('/');
        dispatch({
            type: DELETE_PIN,
            payload: res.data
        });
    };

// Set loading state
export const setPinLoading = () => {
    return {
      type: PIN_LOADING
    };
  };



