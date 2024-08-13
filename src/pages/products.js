import React from "react";
import { useLocation } from "react-router-dom";
import "../components/products_components/products.css";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import ProductList from "../components/products_components/ProductLists";
function Products() {

    const location = useLocation();

    return (
        // <h1 style={{ color: "#a6a6a6" }}>{location.state.prod_name}</h1>
        <>
            <Header />
            <ScrollToTop />
            <div className="container">
                < img src="products\bathtubs\bathtube_header.jpg" className="image" ></img >
                <h1 className="text-overlay txt">BATHTUBS</h1>
            </div>
            <ProductList />
        </>
    )
}

export default Products