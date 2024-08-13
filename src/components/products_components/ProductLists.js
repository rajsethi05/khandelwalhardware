import React from "react";
import products from "../../resources/bathtubs.json"


export default function ProductList() {
    console.log(products[0].products);
    return (
        <>
            <div className="prods-container">
                {
                    products[0].products.map((prod, idx) => (
                        < div className="prod-container">
                            <img src={prod.pic} className="prod-image"></img>
                            <div className="prod-desc-container">
                                <h2 className="prod-heading txt">{prod.name}</h2>
                                <span className="txt">₹ {prod.price}</span>
                                <a href={prod.link} target="_blank" className="txt details-link">Product Details</a>
                                <img src={prod.pic.replace(".jpg", "") + "_qr.png"} className="qr-code"></img>
                            </div>
                        </div>
                    ))}
            </div >
        </>
    )
}