import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


class PinList extends Component {

    componentDidMount(){
        this.props.fetchPins();
    }

    renderPins(){
        return this.props.pins.reverse()(pin => {
            return(
                <div>
                    <div class="ui card">
                        <a class="image" href="#">
                        <img src={pin.pinURL}/>
                        </a>
                        <div class="content">
                            <a class="header" href="#">
                                {pin.pinTitle}
                            </a>
                            <div class="meta">
                                <a>
                                {pin.pinDescription}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <h2>PinList</h2>
                {this.renderPins}
            </div>
        );
    }
}

function mapStateToProps(pins) {
    //console.log(state);
    return { pins};
}


export default connect(mapStateToProps, actions)(PinList);