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
            //<a href="/Profile" >Profile </a>
                return [
                    <li key="1" className ="item"><Link to={`/Profile/${this.props.auth._id}`}> Profile </Link></li>,
                    <li key="2" className ="item"><Link to="/AddPin"> Add Pin </Link></li>,
                    <li key="3" className ="item"><a href="/api/logout"> Log Out  </a></li>
                    
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
                    <li key="4" className ="item"><Link to="/HomeFeed"> HomeFeed  </Link></li>
                    {this.renderLoggedInOption()}         
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth 
    };
}

export default connect(mapStateToProps)(Header);