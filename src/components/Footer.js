import "./FooterStyles.css";

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                <div>
                  <p>10290 N. Renard Pl.</p>
                  <p>Tucson, AZ.</p>
                </div>
            </div>
            <div className="phone">
              <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              520 332-9541
              </h4>
            </div>
            <div className="email">
              <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              yariel.crespo@gmail.com
              </h4>
            </div>
          </div>

            <div className="right">
              <h4>About Site</h4>
              <p>This portfolio was made using html, css, node.js and react.js with the help of Fahimul Kabir and their Tech2etc tutorial. Thank you for checking it out!</p>
              <div className="social">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
              <FaInstagram size={30} style={{ color: "#fff", marginRight: "2rem" }} />
              </div>
            </div>
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