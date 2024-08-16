import React from "react";
import "./products.css"

const AllProducts = ({ prodname }) => {
    return (
        <>
            <div className="all-prod-container">
                <a href={prodname.more_link} className="all-prods" target="_blank">
                    <h2 className="all-prods txt"> Explore All Products
                        <img src="icons/arrow-right-long.svg" className="all-prod-arrow"></img>
                    </h2>
                </a>
            </div>
        </>
    )
}

export default AllProducts;