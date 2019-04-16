import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
// for css image grid styling
import './PinList.css';

class PinList extends Component {


    componentDidMount(){
        this.props.fetchPins();
        //this.props.fetchUser();

    }

    renderShareButtons(pin){
        return(
            <div className="left floated content">
            <button 
                    //history
                    onClick={() => this.props.sharePin(pin._id)}
                    className="ui button"
                >
                    Share
                </button>
            </div>
        );
    }

    renderPins() {
        //className="pin-list" 
        //{this.renderShareButtons(pin)}
        //<a href="/Profile" > by: {pin.pinAuthor} <a>
        return this.props.pins.reverse().map(pin => {
            return(
                <div   key = {pin._id}>
                <div className="ui card" >
                    <div  className="image">
                        <img 
                            key = {pin._id}
                            src={pin.pinURL}
                            alt="invalid url"
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