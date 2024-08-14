import React from "react";
import { useLocation } from "react-router-dom";
import "../components/products_components/products.css";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
// import ProductList from "../components/products_components/ProductLists";
import ProductBanner from "../components/products_components/ProductBanner";
import ProdListExp from "../components/products_components/ProdListExp";
import CatalogueButton from "../components/CatalogueButton";

export default function Products() {

    const location = useLocation();

    return (
        // <h1 style={{ color: "#a6a6a6" }}>{location.state.prod_name}</h1>
        <>
            <Header />
            <ScrollToTop />
            <ProductBanner />
            <ProdListExp />
            <CatalogueButton btnName={location.state.prod_name} />
        </>
    )
}