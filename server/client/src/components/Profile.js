import React, { Component }  from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
// for css image grid styling
import PinList from './PinList';
import Pin from './Pin';


// const Profile = ({  auth,pins, deletePin,fetchPins, history }) => {
class Profile extends Component {

    componentWillMount(){
        //const user_id = this.props;
        //this.props.fetchUserPins(user_id);
        this.props.fetchPins();
    }

    renderProfileList(pins,user_id,auth_id){

        var showDelete = "false"
        if (user_id === auth_id._id){
            showDelete = "true";
        }

        const pinArray = pins.filter( (pin) => pin.pinAuthor === user_id);
        return  pinArray.map( (pin) => (
            <Pin 
                key={pin._id} 
                pin={pin} 
                showDelete = {showDelete}
            /> 
        )); 
    }

    render(){
        const user_id = this.props.user_id;
        //console.log(user_id);
        const auth_id = this.props.auth;
        
        console.log(auth_id);

        const { pins, loading } = this.props.pins;
        // const {pins} = this.props;
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
                    {this.renderProfileList(pins,user_id,auth_id)}
                </div>
            );
        }      
    }
}

const mapStateToProps = (state, ownProps) => {
    //getting value from url Pins/:user_id
    //console.log(ownProps);
    //console.log(ownProps.match.params.user_id);

    return{ 
        //pin: state.pins.find(pin => pin.id === pinId),
        user_id: ownProps.match.params.user_id,

        //currentUserId: state.auth._id,
        pins: state.pins,
        auth: state.auth
    };
};

export default connect(mapStateToProps, actions)(withRouter(Profile)); 