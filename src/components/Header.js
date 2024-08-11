import React from "react";
import "./Header.css";
import { useMediaQuery } from "react-responsive";

function Header() {

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
              <div className="nav-item">
                {isLaptop ? (
                  <>
                    <img src={navIcon} alt="phone" className="icons" />
                    <a href={navLinks[idx]} target="_blank" rel="noopener noreferrer" className="icon-text">{navTexts[idx]}</a>
                  </>) : (
                  <a href={navLinks[idx]}><img src={navIcon} alt="phone" className="icons" /></a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
export default Header;