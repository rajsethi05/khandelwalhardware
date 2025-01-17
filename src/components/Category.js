import React from "react";
import "./Category.css";
import data from "../resources/categories.json"
import { Link } from "react-router-dom";
import CatalogueButton from "./CatalogueButton";

export default function Categories() {
    return (
        <div>
            <img className="heading" src="icons/hindware.png" alt="hindware"></img>
            <div className="line" key="1" />
            <div>
                {data.map((item, idx) => (
                    <Link className="category" key={idx} to='/products' state={{ prod_name: item.page }} onClick={window.scrollTo(0, 0)}>
                        <img src={item.src} alt={idx} key={'img-{idx}'} className="img" />
                        <h3 className="txt" key={'h3-{idx}'}>{item.title}</h3>
                        <p className="txt" key={'p-{idx}'}>{item.desc}</p>
                    </Link>
                ))}
            </div>
            <CatalogueButton btnName="Full" />
        </div >
    )
}
