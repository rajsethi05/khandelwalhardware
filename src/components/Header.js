import React from "react";
import "./Header.css";
import { useMediaQuery } from "react-responsive";

export default function Header() {

  const navigationIcons = ["icons/phone.svg", "icons/whatsapp-1.svg", "icons/location.svg"]
  const navLinks = ["tel:+91 9962049900",
    "https://wa.me/+919962049900?text=Hi",
    "https://maps.app.goo.gl/kjJqxsXxRSGyafvJ6"]
  const navTexts = ["+91-9962049900", "+91-9962049900", "Locate Us"]


  const isLaptop = useMediaQuery({ query: '(min-width:1224px)' })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: landscape)' })
  // TODO: can implement for tablet

  return (
    <div className="header">
      <div className="header-container">
        <img
          src="icons/logo.svg"
          alt="Logo"
          className="logo"
        ></img>
        <div className={isMobile ? "sub-container-mob" : "sub-container"}>
          <a href="/" className="brand">KHANDELWAL
            <div className="sub-brand">HARDWARE</div>
          </a>
          <div className={isMobile ? "navs-mob" : "navs"}>
            {navigationIcons.map((navIcon, idx) => (
              <div className="nav-item" key={'navItem-' + idx}>
                {isLaptop ? (
                  <>
                    <img src={navIcon} alt="phone" className="icons" key={"navIcon-" + idx} />
                    <a href={navLinks[idx]} target="_blank" rel="noopener noreferrer" className="icon-text" key={"navLink-" + idx}>{navTexts[idx]}</a>
                  </>) : (
                  <a href={navLinks[idx]}><img src={navIcon} alt="phone" className="icons" key={"navLink-" + idx} /></a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}