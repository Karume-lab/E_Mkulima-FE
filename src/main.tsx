import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import { About, Contact } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			// {
			// 	path: "/",
			// 	element: <App />,
			// },
			// {
			// 	path: "/",
			// 	element: <App />,
			// },
			// {
			// 	path: "/",
			// 	element: <App />,
			// },
		],
	},
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
