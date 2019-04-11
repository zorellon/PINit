import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {

    renderLogGithub(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return <li className ="item"><a href="/auth/github" >Log In with GitHub </a></li>;
            default:
                return  <li className ="item"><a href="/api/logout" >Log Out </a></li>;
        }
    }
    renderAddPin(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return;
            default:
                return  (
                <li className ="item">
                    <a href="/AddPin" >AddPin </a>
                </li>
                );
        }
    }
    render(){
        return(
            <div className="ui secondary pointing menu">
                <div className="left menu">
                <Link 
                    to= "/"
                    className ="item"
                >
                    PIN it
                </Link>
                </div>
                
                <div className="right menu">
                    {this.renderAddPin()}
                    {this.renderLogGithub()}         
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{auth: state.auth };
}

export default connect(mapStateToProps)(Header);