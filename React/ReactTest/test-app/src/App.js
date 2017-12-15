import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Test App</h1>
        </header>
        <p className="App-intro">
          This is a test page <strong>don't panic</strong> all will be okay. Maybe.
        </p>
        <img alt="panic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKc-3xGXRxfXH22DOOsKIjyh8gXPRHdj3ZIr-jq-0Q_foSIEtT" />
      </div>
    );
  }
}

export default App;
