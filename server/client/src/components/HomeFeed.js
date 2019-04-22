import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
// for css image grid styling
import PinList from './PinList';

class HomeFeed extends Component {


    componentDidMount(){
       this.props.fetchPins();
        //const currentUserId = this.props.fetchUser();
        //console.log(currentUserId);
    }

    //className="pin-list" 
    // pass current user into pin aswell
    render(){
        const { pins, loading } = this.props.pins;

        if (pins === null || loading) {
            return (
                <div>
                    Loading..
                </div>
            );
        } else {
            return(
                <PinList pins={pins} />
            );
        }
    }
}

const mapStateToProps = (state) => ({
        pins: state.pins,
        //currentUserId: state.auth._id,
});

export default connect(mapStateToProps, actions)(withRouter(HomeFeed));