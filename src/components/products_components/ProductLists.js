import React from "react";
import products from "../../resources/bathtubs.json"


export default function ProductList() {
    return (
        <>
            <div className="prods-container">
                {
                    products[0].products.map((prod, idx) => (
                        < div className="prod-container" key={"prodCont-" + idx}>
                            <img src={prod.pic} className="prod-image" alt="jsx-a11y/alt-text" key={"prodPic-" + idx}></img>
                            <div className="prod-desc-container">
                                <h2 className="prod-heading txt">{prod.name}</h2>
                                <span className="txt">₹ {prod.price}</span>
                                <a href={prod.link} target="_blank" className="txt details-link" rel="noopener noreferrer">Product Details</a>
                                <img src={prod.pic.replace(".jpg", "") + "_qr.png"} className="qr-code" alt="jsx-a11y/alt-text"></img>
                            </div>
                        </div>
                    ))}
            </div >
        </>
    )
}