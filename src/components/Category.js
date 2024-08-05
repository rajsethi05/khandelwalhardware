import React from "react";
import "./Category.css";

function Categories(){
    const category_images=[
        "categories/bath_tubs.png",
        "categories/cisterns.jpeg",
        "categories/faucets.jpg",
        "categories/shower_enclosures.jpeg",
        "categories/showers.jpeg",
        "categories/urinals.jpg",
        "categories/wash_basins.jpg",
        "categories/water_closets.jpg"
    ]
    return(
        <div>
            {/* <h1 className="heading">Our Range</h1> */}
            <img className="heading" src="icons/hindware.png"></img>
            <div className="line"/>
            <div>
                {category_images.map((image,idx) => (
                    <div className="category">
                    <img src={image} alt={idx} key={idx} className="img" />
                    <h3 className="txt">Bath Tubs</h3>
                    <p className="txt">Choosing the best basin for your bathroom can ​be an uphill task, especially with our wide range ​of products. With our wide range of basins, now ​you can choose something that fits your ​requirements and needs to perfection.</p>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Categories