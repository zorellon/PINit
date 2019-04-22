import React, { Component }  from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
// for css image grid styling
import PinList from './PinList';

// const Profile = ({  auth,pins, deletePin,fetchPins, history }) => {
class Profile extends Component {

    componentWillMount(){
        const user_id = this.props;
        this.props.fetchUserPins(user_id);
       
    }

    render(){
        //const user_id = this.props;
        //console.log(user_id);

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

const mapStateToProps = (state, ownProps) => {
    //getting value from url Pins/:user_id
    console.log(ownProps);
    console.log(ownProps.match.params.user_id);

    return{ 
        //pin: state.pins.find(pin => pin.id === pinId),
        user_id: ownProps.match.params.user_id,

        //currentUserId: state.auth._id,
        pins: state.pins,
        auth: state.auth
    };
};

export default connect(mapStateToProps, actions)(withRouter(Profile)); 