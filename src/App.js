// Filename - App.js
import React from "react";
import Products from "./pages/products";
import {
	HashRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/products" element={<Products />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
