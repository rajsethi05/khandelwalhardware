import React from "react";
import { useLocation } from "react-router-dom";
import "../components/products_components/products.css";

function Products() {

    const location = useLocation();

    return (
        // <h1 style={{ color: "#a6a6a6" }}>{location.state.prod_name}</h1>
        <>
            <div className="container">
                < img src="products\bathtubs\bathtube_header.jpg" className="image" ></img >
                <h1 className="text-overlay txt">BATHTUBS</h1>
            </div>
            <div className="prods-container">
                <div className="prod-container">
                    <img src="products\bathtubs\Hindware_Marina_Bathtub.jpg" className="prod-image"></img>
                    <div className="prod-desc-container">
                        <h2 className="prod-heading txt">Hindware Marina Bathtub</h2>
                        <span className="txt">₹ 15,990</span>
                        <a href="https://hindware.com/product/marina-bathtub/" target="_blank" className="txt details-link">Product Details</a>
                        <img src="products\bathtubs\Hindware_Marina_Bathtub_qr.png" className="qr-code"></img>
                    </div>
                </div>
                <div className="prod-container">
                    <img src="products\bathtubs\Hindware_Marina_Bathtub.jpg" className="prod-image"></img>
                    <div className="prod-desc-container">
                        <h2 className="prod-heading txt">Hindware Marina Bathtub</h2>
                        <span className="txt">₹ 15,990</span>
                        <a href="https://hindware.com/product/marina-bathtub/" target="_blank" className="txt details-link">Product Details</a>
                        <img src="products\bathtubs\Hindware_Marina_Bathtub_qr.png" className="qr-code"></img>
                    </div>
                </div>
                <div className="prod-container">
                    <img src="products\bathtubs\Hindware_Marina_Bathtub.jpg" className="prod-image"></img>
                    <div className="prod-desc-container">
                        <h2 className="prod-heading txt">Hindware Marina Bathtub</h2>
                        <span className="txt">₹ 15,990</span>
                        <a href="https://hindware.com/product/marina-bathtub/" target="_blank" className="txt details-link">Product Details</a>
                        <img src="products\bathtubs\Hindware_Marina_Bathtub_qr.png" className="qr-code"></img>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Products