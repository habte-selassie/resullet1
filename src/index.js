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
