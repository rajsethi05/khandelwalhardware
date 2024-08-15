import React from "react";

const CatalogueButton = ({ btnName }) => {
    btnName = btnName.replace("_", " ")
    btnName = btnName.split(" ").map(word => word.charAt(0).toUpperCase() +
        word.slice(1)).join(" ");
    return (
        <div className="btn-div">
            <a href={`documents/${btnName}_Catalogue.pdf`} download={`${btnName}_Catalogue.pdf`}>
                <button className="video-button download-btn">Download {btnName} Catalogue
                    <img src="icons\cloud_down.svg" alt="play" className="download-icon"></img>
                </button>
            </a>
        </div >
    )
}

export default CatalogueButton;