// Filename - App.js
import React from "react";
import Header from "./components/Header";
import {
	HashRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

function App() {
	return (
		<HashRouter>
      <Header />
			<Routes>
			<Route exact path="/" element={<Home />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
