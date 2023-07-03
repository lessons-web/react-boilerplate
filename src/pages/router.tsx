import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Layout from '@/components/layout';
import Dashboard from './dashboard';
import Login from './login';
import Register from './register';
import Billing from './billing';
import Tables from './tables';
import Profile from './profile';

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/",
		element: <Navigate to="/dashboard" replace />,
	},
	{
		path: "/",
		element: <Layout><Outlet /></Layout>,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "billing",
				element: <Billing />,
			},
			{
				path: "tables",
				element: <Tables />,
			},
			{
				path: "profile",
				element: <Profile />,
			}
		]
	},
	// 如果没找到页面，重定向到 /dashboard
	{
		path: "*",
		element: <Navigate to="/dashboard" replace />,
	}
]);

export default router;