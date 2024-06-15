import React from "react";
import { HashRouter } from "react-router-dom";
import { WebRouter, AdminRouter } from "./router";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
	return (
		<AuthProvider>
			<HashRouter>
				<AdminRouter />
				<WebRouter />
			</HashRouter>
		</AuthProvider>
	);
}
