import React from "react";
import "./Category.css";
import data from "../resources/categories.json"
import { Link } from "react-router-dom";

export default function Categories(){

    return(
        <div>
            <img className="heading" src="icons/hindware.png" alt="hindware"></img>
            <div className="line" key=""/>
            <div>
                {data.map((item,idx) => (
                    <Link className="category" to='/products' state={{prod_name:item.page}}>
                    <img src={item.src} alt={idx} key={idx} className="img" />
                    <h3 className="txt">{item.title}</h3>
                    <p className="txt">{item.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
