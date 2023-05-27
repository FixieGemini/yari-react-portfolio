import "./NavbarStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
        <Link to="/yari-react-portfolio">
            <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to ="/yari-react-portfolio">Home</Link>
            </li>
            <li>
                <Link to ="/project">Project</Link>
            </li>
            <li>
                <Link to ="/about">About</Link>
            </li>
            <li>
                <Link to ="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

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