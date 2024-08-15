import React from "react";


const ProductBanner = ({ prodname }) => {
    prodname = prodname[0];

    return (
        <div className="container">
            < img src={prodname.heading_pic} className="image" alt="jsx-a11y/alt-text" ></img >
            <h1 className="text-overlay txt">{prodname.prod_name}</h1>
        </div>
    )
}

export default ProductBanner;