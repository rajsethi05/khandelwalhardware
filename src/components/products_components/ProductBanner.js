import React from "react";
import { useLocation } from "react-router-dom";


export default function ProductBanner() {
    const location = useLocation();
    const prodName = location.state.prod_name;
    console.log(prodName);

    return (
        <div className="container">
            < img src="products\bathtubs\bathtube_header.jpg" className="image" alt="jsx-a11y/alt-text" ></img >
            <h1 className="text-overlay txt">BATHTUBS</h1>
        </div>
    )
}