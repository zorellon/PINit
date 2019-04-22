import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// manual testing api route from browser
import axios from 'axios';
window.axios = axios;

// initial redux state
const initialState = {};

const store = createStore(
    reducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
