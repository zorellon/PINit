import React, { Component } from 'react';

// for css image grid styling
import Pin from './Pin';

class PinList extends Component {

    //className="pin-list" 
    // pass current user into pin aswell
    render(){
        const {pins} = this.props;

        return  pins.map( (pin) => <Pin key={pin._id} pin={pin} /> );    
    }  
}

export default PinList;