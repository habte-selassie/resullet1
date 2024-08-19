import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MetaMaskProvider } from "@metamask/sdk-react";
// import App from './App';
// import Appa from './Login/exampleSafeWallet';
// import Login from './Login/login';
// import AuthComponent from './AuthComponent'; // Your social login component
// import OAuthCallback from './OAuthCallback'; // Your OAuth callback component
import './index.css';


  // // index.js
  // import React from 'react';
  // import ReactDOM from 'react-dom';
  import App1 from './Wallets/walletConnect-integration/App1';
  import { AppKitProvider } from './Wallets/walletConnect-integration/AppKitProvider';
  import ConnectButton from './Wallets/walletConnect-integration/ConnectButton';
  import { Buffer } from 'buffer'
	window.Buffer = Buffer;
 
const Main = () => {
  return (
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
        <Routes>
      
  <AppKitProvider>
    <ConnectButton />
    <App1 />
  </AppKitProvider>,
 
          {/* <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<AuthComponent />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
          <Route path="/example-safe-wallet" element={<Appa />} /> */}
        </Routes>
      </Router>
    </MetaMaskProvider>
  );
};

// Render the Main component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
