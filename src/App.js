import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;


import React from 'react'
import ReactDOM from 'react-dom'
import { AppKitProvider } from './AppKitProvider'  // Ensure this points to the correct file where AppKitProvider is defined
import ConnectButton from './ConnectButton'  // Ensure this points to the correct file where ConnectButton is defined

function App() {
  return (
    <AppKitProvider>
      <div>
        <h1>Test WalletConnect Button</h1>
        <ConnectButton />  {/* This renders the WalletConnect button */}
      </div>
    </AppKitProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
