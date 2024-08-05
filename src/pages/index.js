// Filename - pages/index.js

import React from "react";
import Slideshow from "../components/Slideshow";
import Video from "../components/Video";
import Categories from "../components/Category"

const Home = () => {
	return (
		<>
            <Slideshow/>
			<Video/>
			<Categories/>
		</>
	);
};

export default Home;
