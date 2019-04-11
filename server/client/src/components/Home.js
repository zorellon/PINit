import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import {fetchPins} from '../actions';

class Home extends React.Component {

    // Initialized state empty array
    state = {pins: [] };
    // OR
    constructor(props){
        super(props);
            this.state = {pins: []};
    }

    componentDidMount(){
        axios.get('/api/pin')
            .then(response => {
                this.setState({pins: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }

    
    render(){
        return(
            <div>
                <h2>Home</h2>

            </div>
        );
    }
}

// function mapStateToProps(state){
//     return{auth: state.auth };
// }

//export default connect(mapStateToProps)(Home);
export default Home;