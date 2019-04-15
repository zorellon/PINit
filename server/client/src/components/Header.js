import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {

    renderLoggedInOption(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return <li className ="item"><a href="/auth/github" >Log In with GitHub </a></li>;
            default:
                return [
                    <li key="1" className ="item"><a href="/AddPin" >Add Pin </a></li>,
                    <li key="2" className ="item"><a href="/api/logout" >Log Out </a></li>
                    
                ];
        }
    }

    render(){
        return(
            <div className="ui secondary pointing menu">
                <div className="left menu">
                    <Link 
                        to= '/'
                        className ="item"
                    >
                        PIN it
                    </Link>
                </div>        
                <div className="right menu">
                    <li key="3" className ="item"><a href="/PinList" >Pin List </a></li>
                    {this.renderLoggedInOption()}         
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{auth: state.auth };
}

export default connect(mapStateToProps)(Header);