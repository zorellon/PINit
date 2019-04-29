import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

import Pin from './Pin';

// URL  "/Pin/:pin_id"
class PinPage extends Component{

    componentDidMount(){
        // const pin_id = this.props.match.params.pin_id;
        //const pin_id = this.props.pin_id;
        //this.props.fetchPin(pin_id);
         //const currentUserId = this.props.fetchUser();
         //console.log(currentUserId);
         this.props.fetchPins();

     }

    renderSinglePin(pins,pin_id,auth_id){

        

        const UrlPin = pins.find( (pin) => pin._id === pin_id);
        var showDelete = "false"
        if (UrlPin.pinAuthor === auth_id._id){
            showDelete = "true";
        }

        return  (
            <Pin 
                key={UrlPin._id} 
                pin={UrlPin} 
                showDelete = {showDelete}
            /> 
        ); 
    }
    //className="pin-list" 
    // pass current user into pin aswell
    render() {
        //const pin_id = this.props.match.params.pin_id;
        const pin_id = this.props.pin_id;
        //console.log(pin_id);
        const { pins, loading } = this.props.pins;

        // const auth_id = this.props.auth._id;
        // console.log(auth_id);

        
        var auth_id = "00000";
        if(this.props.auth === null){
            auth_id = this.props.auth._id;

        }

        if (pins === null || loading || auth_id === null ) {
            return (
                <div>
                    Loading..
                </div>
            );
        } else {
            return(
                //<PinList pins={pins} />
                <div>
                    {this.renderSinglePin(pins,pin_id,auth_id)}
                </div>
            );
        }
            
    };
    
};
    

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps);

    return{ 
        //pin: state.pins.find(pin => pin.id === pinId),
        pin_id: ownProps.match.params.pin_id,
        // pin_id = this.props.match.params.pin_id,
        //currentUserId: state.auth._id,
        pins: state.pins,
        auth: state.auth
    };
};

export default connect(mapStateToProps, actions)(withRouter(PinPage));
