// Filename - pages/index.js

import React from "react";
import Slideshow from "../components/Slideshow";
import Video from "../components/Video";
import Categories from "../components/Category"
import Header from "../components/Header";

function Home() {
	return (
		<>
		<Header />
            <Slideshow/>
			<Video/>
			<Categories/>
		</>
	)
}

export default Home;
