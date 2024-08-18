import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Sidebar from "./routes/sidebar";
import Sidebar from "./routes/sidebar";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		// element: <Sidebar />,
		element: <Sidebar />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App';
import Login from './Login/login';
import { MetaMaskProvider } from "@metamask/sdk-react";
import './index.css';
import Appa from './Login/exampleSafeWallet';

// Create a Parent component to render both App and Login
//const Main: React.FC = () => {
// root.render(
//   <React.StrictMode>
//     <MetaMaskProvider
//       debug={false}
//       sdkOptions={{
//         dappMetadata: {
//           name: "Example React Dapp",
//           url: window.location.href,
//         },
//         infuraAPIKey: process.env.INFURA_API_KEY,
//         // Other options.
//       }}
//     >
//       <App />
//     </MetaMaskProvider>
//   </React.StrictMode>
// );

// Create a Parent component to render both App and Login
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
        
        // Handling deeplinks
        // openDeeplink: (link) => {
        //   if (canOpenLink) {
        //     Linking.openURL(link); // Opens the deeplink
        //   }
        // },
      }}
    >
      <div>
        <App />
        <Appa />
        <Login />
      </div>
    </MetaMaskProvider>
  );
};

// Render the Parent component
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Main />);
        
        
//         infuraAPIKey: process.env.INFURA_API_KEY,
//         // Other options.
      
//       }}
//     >
//      <div>
//       <App />
//       <Login />
//     </div>
//     </MetaMaskProvider>
   
//   );
// };

// Render the Parent component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);



// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );



