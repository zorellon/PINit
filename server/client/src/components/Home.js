import React from 'react';
//{ Component }
//import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
//import axios from 'axios';
import PinList from './PinList';
//import {fetchPins} from '../actions';

const Home = () => {

        return(
            <div>
                <h2>Welcome to Pin it!</h2>
                <PinList />
            </div>
        ); 
}

export default Home;