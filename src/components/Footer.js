import "./FooterStyles.css";

import React from 'react'

import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome />
                </div>
            </div>

            <div className="right"></div>
        </div>
    </div>
  )
}

export default Footer


// import React from "react";

// function Footer() {
// 	return (
// 		<footer>
// 			<a href="https://github.com/FixieGemini" target="_blank"><img className="footerContact" src={require("../../assets/icons/github.png")} alt="Github"/></a>
// 			<a href="https://www.linkedin.com/in/yariel-crespo-6622b4249/" target="_blank"><img className="footerContact" src={require("../../assets/icons/linkedin.png")} alt="LinkedIn"/></a>
// 			<a href="tel:5203329541" target="_blank"><img className="footerContact" src={require("../../assets/icons/phone.jpg")} alt="Phone"/></a>
// 			<a href="mailto:yariel.crespo@gmail.com" target="_blank"><img className="footerContact" src={require("../../assets/icons/email.jpg")} alt="Email"/></a>
// 		</footer>
// 	);
// }

// export default Footer;