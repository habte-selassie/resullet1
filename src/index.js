import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

const clientId =
	"824238455882-nd0psroe4t6gck1p9sek24d1lsuk0qqe.apps.googleusercontent.com";
// import Appa from "./Login/exampleSafeWallet";
import App from "./App";
const rootTag = document.getElementById("root");
const root = ReactDOM.createRoot(rootTag);
root.render(
	<GoogleOAuthProvider clientId={clientId}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</GoogleOAuthProvider>
);
