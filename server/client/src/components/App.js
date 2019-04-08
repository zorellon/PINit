import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="/auth/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            PINit
          </a>
        </header>
      </div>
    );
  }
}

export default App;
