import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../layouts";
import { Auth, Blog, Menu, Newsletter, Products } from "../pages/admin";

export function AdminRouter() {
	// const { user } = useAuth();
	const loadLayout = (Layout, Page) => {
		return (
			<Layout>
				<Page />
			</Layout>
		);
	};
	return (
		<Routes>
			<Route
				path="/admin/*"
				element={<Auth />}
			/>
			<>
				{["/admin", "/admin/blog"].map((path) => (
					<Route
						key={path}
						path={path}
						element={loadLayout(AdminLayout, Blog)}
					/>
				))}
				{/* <Route
						path="/admin/users"
						element={loadLayout(AdminLayout, Users)}
					/>
					<Route
						path="/admin/courses"
				/>
						element={loadLayout(AdminLayout, Courses)} */}
				<Route
					path="/admin/menu"
					element={loadLayout(AdminLayout, Menu)}
				/>
				<Route
					path="/admin/products"
					element={loadLayout(AdminLayout, Products)}
				/>
				<Route
					path="/admin/newsletter"
					element={loadLayout(AdminLayout, Newsletter)}
				/>
			</>
		</Routes>
	);
}
