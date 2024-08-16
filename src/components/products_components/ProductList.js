import React from "react";
import "./ProductList.css";

const ProductList = ({ prodname }) => {
    const products = prodname;

    return (
        <>
            <div className="prods-container">
                {
                    products.products_list.map((prod, idx) => (
                        < div className="prod_new" style={{ animationDelay: idx + "s" }}>
                            <img src={prod.pic} className="prod-image_new"></img>
                            <p className="prod-title_new">{prod.name}
                                <a href={prod.link} target="_blank"><img src="icons\arrow.svg" class="arrow-icon"></img></a>
                            </p>
                        </div>
                    ))
                }
            </div >
        </>
    )
}
export default ProductList