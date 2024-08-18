import React from "react";
import Slideshow from "../components/Slideshow";
import Video from "../components/Video";
import Categories from "../components/Category"
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<Header />
			<Slideshow />
			<Video />
			<Categories />
			<Footer />
		</>
	)
}

export default Home;
