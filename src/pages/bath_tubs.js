import React from "react";
import { useLocation } from "react-router-dom";

function BathTubs(){

    const location=useLocation();

    return(
        <h1 style={{color:"#a6a6a6"}}>{location.state.prod_name}</h1>
    )
}

export default BathTubs