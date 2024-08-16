import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../components/products_components/products.css";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import ProductList from "../components/products_components/ProductList";
import ProductBanner from "../components/products_components/ProductBanner";
import CatalogueButton from "../components/CatalogueButton";
import AllProducts from "../components/products_components/AllProducts";

export default function Products() {

    const location = useLocation();
    const category = location.state?.prod_name;
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            if (!category) {
                console.error("Category is not defined.");
                return;
            }
            try {
                const importedData = await import(`../resources/${category}.json`)
                console.log(importedData);
                setData(importedData.default);
            } catch (error) {
                console.error("Error loading file:", error)
            }
        };
        loadData();
    }, [category]);


    return (
        <>
            <Header />
            <ScrollToTop />
            {data && <ProductBanner prodname={data} />}
            {data && <ProductList prodname={data} />}
            {data && data.more_link && < AllProducts prodname={data} />}
            <CatalogueButton btnName={location.state.prod_name} />

        </>
    )
}