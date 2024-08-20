import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ResumePage, Home, Login, Register } from './screens';
import { Provider } from 'react-redux';
import store from './store/store';
import lightImage from 'assets/images/bright.png'
import darkImage from 'assets/images/brightness.png'
import './App.css';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

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
          <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <nav className="navbar">
              <Link to="/" className="brand">RESULLET</Link>
              <div className="nav-links">
                <button className="theme-toggle" onClick={toggleDarkMode}>
                  <img src={isDarkMode ? darkImage : lightImage} alt='' width={24} />
                </button>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/resume" className="nav-link">Resume</Link>
                {/* <Link to="/appa" className="nav-link">Appa</Link> */}
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/regist" className="nav-link">Register</Link>
              </div>
            </nav>
    
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/appa" element={<About />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/regist" element={<Register />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </div>
        </Router>
      </MetaMaskProvider>
    </Provider>
  );
};

export default App;
