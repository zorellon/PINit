import React from 'react';
//{ Component }
//import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
//import axios from 'axios';
//import PinList from './PinList';
//import {fetchPins} from '../actions';

const Home = () => {

        return(
            <div>
                <h2>Welcome to Pin it!</h2>
                <h5>User Stories:</h5>
                <ul className="ui list">
                    <li>As an unauthenticated user, I can login with GitHub.</li>
                    <li>As an authenticated user, I can link to images.</li>
                    <li>As an authenticated user, I can delete images that I’ve linked to.</li>
                    <li>As an authenticated user, I can see a Pinterest-style (infinite scrolling) wall of all the images I’ve linked to.</li>
                    <li>As an unauthenticated user, I can browse other users’ walls of images.</li>
                    <li>As an authenticated user, I can generate shortened urls of images that I’ve linked to.</li>
                </ul>
            </div>
        ); 
}

export default Home;