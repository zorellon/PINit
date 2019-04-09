import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// component boilerplate for router
import Header from './Header';
const Home = () => <h2>Home</h2>
const Profile = () => <h2>Profile</h2>
const AddPin = () => <h2>AddPin</h2>

class App extends Component {
  render() {
    return (
      <div >
          <BrowserRouter>
            <div>
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

export default App;
