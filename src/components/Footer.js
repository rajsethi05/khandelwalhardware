import React from "react";
import "../components/Footer.css"

export default function Footer() {
    return (
        <>
            <div className="line" key="1" style={{ opacity: "0.6", marginBottom: "10px" }} />
            <div className="footer-container">
                <div>
                    <span className="footer-txt">
                        KHANDELWAL HARDWARE is a Brand Store of all Hindware Products.&nbsp;
                        <a className="footer-txt" href="https://hindware.com/dealer-locator/chhattisgarh/durg/" target="_blank">Check details</a><br />
                        {/* A Subsidary of Rhytm Traders.<br /> */}
                    </span>

                    <span className="footer-txt" style={{ fontSize: "0.75rem" }}>
                        Copyright © 2024 KHANDELWAL HARDWARE All rights reserved.<br /><br />
                    </span>
                </div>
                <div>
                    <span className="footer-txt">
                        Addess : Khandelwal Hardware & Building Material Suplier<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Near Naveen ITI, Dhanora, Durg, <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chhattisgarh, 491001
                    </span>
                </div>
            </div>
        </>
    )
}