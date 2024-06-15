import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../layouts";
import { Auth, Products, Blog, Menu, Newsletter, User } from "../pages/admin";
import { useAuth } from "../hooks";

export function AdminRouter() {
	const { user } = useAuth();
	const loadLayout = (Layout, Page) => {
		return (
			<Layout>
				<Page />
			</Layout>
		);
	};
	return (
		<Routes>
			{!user ? (
				<Route
					path="/admin/*"
					element={<Auth />}
				/>
			) : (
				<>
					{["/admin", "/admin/product"].map((path) => (
						<Route
							key={path}
							path={path}
							element={loadLayout(AdminLayout, Products)}
						/>
					))}

					<Route
						path="/admin/product"
						element={loadLayout(AdminLayout, Products)}
					/>
					<Route
						path="/admin/user"
						element={loadLayout(AdminLayout, User)}
					/>
					<Route
						path="/admin/menu"
						element={loadLayout(AdminLayout, Menu)}
					/>
					<Route
						path="/admin/newsletter"
						element={loadLayout(AdminLayout, Newsletter)}
					/>
					<Route
						path="/admin/blog"
						element={loadLayout(AdminLayout, Blog)}
					/>
				</>
			)}
		</Routes>
	);
}
