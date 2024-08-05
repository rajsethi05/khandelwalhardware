import React from "react";
import "./Category.css";
import data from "../resources/categories.json"
import { Link } from "react-router-dom";

function Categories(){
    return(
        <div>
            <img className="heading" src="icons/hindware.png" alt="hindware"></img>
            <div className="line"/>
            <div>
                {data.map((item) => (
                    <Link className="category" to={item.page}>
                    <img src={item.src} alt="1" key="1" className="img" />
                    <h3 className="txt">{item.title}</h3>
                    <p className="txt">{item.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories