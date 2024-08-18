import React, { Component } from 'react';
import './App.css';
import { ResumePage } from './screens';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ResumePage />
      </Provider>        
    );
  }
};

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
