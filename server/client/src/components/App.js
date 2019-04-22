import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
// get all action creators
import * as actions from '../actions';
// import history from '../history';

// component boilerplate for routes
import Header from './Header';
import Home from './Home';
import AddPin from './AddPin';
import HomeFeed from './HomeFeed';
import Profile from './Profile';
import PinPage from './PinPage';

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className = "ui container">
          <BrowserRouter >
            <div >
              <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/HomeFeed" component={HomeFeed} />
              <Route exact path="/AddPin" component={AddPin} />
              <Route exact path="/Profile/:user_id" component={Profile} />
              <Route exact path="/Pin/:pin_id" component={PinPage} />
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
