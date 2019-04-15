import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
//import _ from 'lodash';
// for css image grid styling
import './PinList.css';

class PinList extends Component {


    componentDidMount(){
        this.props.fetchPins();
        //this.props.fetchUser();

    }

    renderDeleteButtons(pin,auth){
        if(this.props.auth._id != null){
            if (pin.pinAuthor === this.props.auth._id) {
                return(
                    <div className="left floated content">
                       <button 
                            //href="/api/pin/delete" 
                            //history
                            onClick={() => this.props.deletePin(pin._id)}
                            className="ui button negative"
                        >
                            Delete 
                        </button>
                    </div>
                );
            }
        }

    }

    renderPins() {
        //className="pin-list" 
        //const pinCards this.
        return this.props.pins.reverse().map(pin => {
            return(
                <div   key = {pin._id}>
                <div className="ui card" >
                    <div  className="image">
                        <img 
                            key = {pin._id}
                            src={pin.pinURL}
                            alt=""
                        />
                    </div>
                    <div className="content">
                        <div className="header">
                            {pin.pinTitle}
                        </div>
                        <div className="description">
                            {pin.pinDescription}
                        </div>
                        <span className="left floated">
                            by: {pin.pinAuthor}
                        </span>
                    </div>
                    <div className="extra content"> 
                            {this.renderDeleteButtons(pin,pin.pinAuthor)}
                        <span className="right floated">
                            Posted: {new Date(pin.dateCreated).toLocaleDateString()}
                        </span>
                    </div>
                </div>
                <br></br>

                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <div>{this.renderPins()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        pins: state.pins,
        auth: state.auth
    };
}


export default connect(mapStateToProps, actions)(withRouter(PinList));