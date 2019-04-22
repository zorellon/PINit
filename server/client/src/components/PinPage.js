import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

import Pin from './Pin';

// URL  "/Pin/:pin_id"
class PinPage extends Component{

    componentDidMount(){
        const pin_id = this.props.match.params.pin_id;
        this.props.fetchPin(pin_id);
         //const currentUserId = this.props.fetchUser();
         //console.log(currentUserId);
     }

                //className="pin-list" 
    // pass current user into pin aswell
    render() {
        const pin_id = this.props.match.params.pin_id;
        const { pins } = this.props.pins;
        //console.log(pins);
    
        return(
            pins.map((pin) => {
                if(pin._id === pin_id){
                    return(<Pin 
                        key = {pin_id} 
                        pin= {pin} 
                    />
                    );
                }
            })  

           );
            
    };
    
};
    

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps);

    return{ 
        //pin: state.pins.find(pin => pin.id === pinId),
        user_id: ownProps.match.params.user_id,

        //currentUserId: state.auth._id,
        pins: state.pins,
        auth: state.auth
    };
};

export default connect(mapStateToProps, actions)(withRouter(PinPage));
