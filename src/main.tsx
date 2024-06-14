import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import { CategoryList, Dashboard, LocationList, Login, Message, ProduceDetail, ProduceList, SellCriteriaList, SignUp } from "./pages";

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
				path: "/auth/sign_up",
				element: <SignUp />,
			},
			{
				path: "/auth/login",
				element: <Login />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/dashboard/produce/buy",
				element: <ProduceList />,
			},
			{
				path: "/dashboard/produce/buy/id",
				element: <ProduceDetail />,
			},
			{
				path: "/dashboard/produce/buy/id/message",
				element: <Message />,
			},
			{
				path: "/dashboard/produce/buy/locations",
				element: <LocationList />,
			},
			{
				path: "/dashboard/produce/sell",
				element: <SellCriteriaList />,
			},
			{
				path: "/dashboard/produce/sell/locations",
				element: <LocationList />,
			},
			{
				path: "/dashboard/produce/sell/categories",
				element: <CategoryList />,
			},
			{
				path: "/dashboard/produce/sell/categories/produce_detail",
				element: <ProduceDetail />,
			},
			{
				path: "/dashboard/produce/sell",
				element: <SellCriteriaList />,
			},
			{
				path: "/dashboard/produce/sell",
				element: <SellCriteriaList />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
