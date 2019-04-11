import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
// get all action creators
import * as actions from '../actions';

// component boilerplate for router
import Header from './Header';
import Home from './Home';
import AddPin from './AddPin';
const Profile = () => <h2>Profile</h2>

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className = "ui container">
          <BrowserRouter>
            <div >
              <Header />
              <Route exact path="/" component={Home} />
              <Route path="/AddPin"component={AddPin} />
              <Route path="/Profile/:id"component={Profile} />
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null, 
  actions
)(App);
