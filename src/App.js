import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { WebRouter, AdminRouter } from "./router";

function App() {
	return (
		<BrowserRouter>
			<AdminRouter />
			<WebRouter />
		</BrowserRouter>
	);
}

export default App;
