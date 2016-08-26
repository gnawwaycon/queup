import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to QueUp</h2>
        </div>
        <p className="App-intro">
        <a class="button" href="https://queup3000.herokuapp.com/api/auth">Login</a>
        </p>
      </div>
    );
  }
}

export default App;
