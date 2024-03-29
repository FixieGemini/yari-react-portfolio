import "./HeroImgStyles.css";
import { Link } from "react-router-dom";

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
           <p>Yariel Crespo</p> 
           <h1>Full Stack Developer</h1>
           <div>
             <Link to="/project" className="btn">Projects</Link>
             <Link to="/contact" className="btn btn-light">Contact</Link>
           </div>
        </div>
    </div>
  )
}

export default HeroImg