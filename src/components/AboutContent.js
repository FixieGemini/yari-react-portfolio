import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import Avatar from "../assets/avatar.jpeg";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <div className="img-container">
                <img src={Avatar} className="img" alt="Yariel Crespo" />
            </div>
        </div>

        <div className="right">
            <h1>Who am I?</h1>
            <p>I am an aspiring full stack web developer. I love solving complex problems and creating amazing apps!</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent


// import React from "react";

// export default function About() {

//     const introduction ={
//         resize: {
//             height: "66vmin",
//             width: "auto",
//         }
//     };

//     return (
//         <section id="">
//             <div className="">
//                 <div className="">
//                     <h1 style={introduction}>
//                         Hi, I'm Yari.
//                         <br className="" />I love building amazing apps!
//                     </h1>
//                     <p className="">
//                         I am an aspiring full stack web developer from Tucson Arizona.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }

// import React from 'react';

// function About() {
//     return (
//         <main>
//             <h2>About Me</h2>
//             <img className="avatar" src={require('../../assets/images/avatar.jpeg')} alt="avatar"/>
//             <p>Hi, my name is Yari.</p>
//         </main>
//     );
// }

// export default About;