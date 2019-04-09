import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
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
                <Link to="/auth/github" className ="item">
                    Login with Github
                </Link>
                
                </div>
            </div>
        );
    }
}

export default Header;