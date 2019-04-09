import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {

    renderContent(){
        switch (this.props.auth){
            case null:
                return 'Waiting';
            case false:
                return <li className ="item"><a href="/auth/github" >Log In with GitHub </a></li>;
            default:
                return  <li className ="item"><a href="/api/logout" >Log Out </a></li>;
        }
    }
    render(){
        return(
            <div className="ui secondary pointing menu">
                <Link to="/" className ="item">
                    PIN it
                </Link>
                <div className="right menu">
                <Link to="/AddPin" className ="item">
                    Add Pin
                </Link>
            
                {this.renderContent()}
                
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{auth: state.auth };
}

export default connect(mapStateToProps)(Header);