import "./NavbarStyles.css";

import React, {useState} from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);  

  return (
    <div className="header">
        <Link to="/yari-react-portfolio">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to ="/yari-react-portfolio">Home</Link>
            </li>
            <li>
                <Link to ="/project">Projects</Link>
            </li>
            <li>
                <Link to ="/about">About</Link>
            </li>
            <li>
                <Link to ="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
            <FaBars size={20} style={{ color: "#fff" }} /> 
            )}
        </div>
    </div>
  );
};

export default Navbar


// import React from "react";

// export default function Navbar(props) {
//     const tabs = ["About", "Skills", "Projects", "Contact"]
//     return (
//         <nav className="navbg d-flex justify-content-around align-items-center text-white text-nowrap">
//             <h2>Yariel Crespo</h2>

//         <div>
//         {tabs.map(tab =>
            
//             <a href={"#"+ tab}
//             onClick= {()=>props.setPage(tab)}
//             >{tab} |{"      "}</a>)}
//         </div>

//         </nav>
//     )
// }