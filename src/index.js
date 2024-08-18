import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Sidebar from "./routes/sidebar";
// import "./index.css";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Sidebar />,
// 	},
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<RouterProvider router={router} />
// 	</React.StrictMode>
// );

// import App from './App';
import Login from "./Login/login";
import { MetaMaskProvider } from "@metamask/sdk-react";
import "./index.css";
import Appa from "./Login/exampleSafeWallet";

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
				communicationServerUrl:
					"https://metamask-sdk-socket.metafi.codefi.network/",
				infuraAPIKey: process.env.INFURA_API_KEY,
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
