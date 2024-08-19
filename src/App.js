import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ResumePage, Home, Login, Register } from './screens';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';


import ReactDOM from 'react-dom';
import App1 from 'Wallets/walletConnect-integration/App';
import { AppKitProvider } from './Wallets/walletConnect-integration/AppKitProvider';
import ConnectButton from './Wallets/walletConnect-integration/ConnectButton';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MetaMaskProvider
          debug={true}
          sdkOptions={{
            dappMetadata: {
              name: "Example React Dapp",
              url: window.location.href,
            },
            checkInstallationImmediately: true,
            checkInstallationOnAllCalls: true,
            communicationServerUrl: "https://metamask-sdk-socket.metafi.codefi.network/",
            infuraAPIKey: process.env.INFURA_API_KEY,
          }}
        >
          <Router>
            <nav className="navbar">
              {/*
              <Link to="/" className="brand">RESULLET</Link>
               <div className="links">
                <Link to="/" className="home-link">Home</Link>
                <Link to="/resume" className="resume-link">Resume</Link>
                 <Link to="/appa" className="appa-link">Appa</Link> 
                <Link to="/login" className="login-link">Login</Link>
                <Link to="/regist" className="login-link">Register</Link>
              </div> 
              */}
            </nav>
    
            <Routes>
              <Route path="/" element={<Home />} />
               <AppKitProvider>
                <ConnectButton />
                 <App1 />
               </AppKitProvider>

              {/* <Route path="/appa" element={<About />} /> */}
              {/* <Route path="/login" element={<Login />} />
              <Route path="/regist" element={<Register />} />
              <Route path="/resume" element={<ResumePage />} /> */}
            </Routes>
          </Router>
        </MetaMaskProvider>
      </Provider>
    );
  }
};

export default App;
