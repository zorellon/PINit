import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// component boilerplate for router
const Header = () => <h2>Header</h2>
const Home = () => <h2>Home</h2>
const Profile = () => <h2>Profile</h2>
const AddPin = () => <h2>AddPin</h2>

class App extends Component {
  render() {
    return (
      <div >
          <a>
            PINit
          </a>
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
