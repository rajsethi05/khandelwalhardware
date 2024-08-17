import React from "react";


const ProductBanner = ({ prodname }) => {

    return (
        <div className="container">
            < img src={prodname.heading_pic} className="prod-banner-image" alt="jsx-a11y/alt-text" ></img >
            <div className="text-overlay"><span className="txt">{prodname.prod_name}</span></div>
        </div>
    )
}

export default ProductBanner;