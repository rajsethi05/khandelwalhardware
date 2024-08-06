import React from "react";
import "./Category.css";
import data from "../resources/categories.json"
import { Link } from "react-router-dom";
// import "./Video.css";

export default function Categories() {

    return (
        <div>
            <img className="heading" src="icons/hindware.png" alt="hindware"></img>
            <div className="line" key="" />
            <div>
                {data.map((item, idx) => (
                    <Link className="category" to='/products' state={{ prod_name: item.page }}>
                        <img src={item.src} alt={idx} key={idx} className="img" />
                        <h3 className="txt">{item.title}</h3>
                        <p className="txt">{item.desc}</p>
                    </Link>
                ))}
            </div>
            <div className="btn-div">
                <a href='documents\\Full_Catalogue.pdf' download="Full_Catalogue.pdf">
                    <button className="video-button download-btn">Download Full Catalogue
                        <img src="icons\cloud_down.svg" alt="play" className="download-icon"></img>
                    </button>
                </a>
            </div>
        </div>
    )
}
