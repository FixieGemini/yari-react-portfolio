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
            <p>Hello there! I'm Yariel Crespo, but you can call me Yari. I'm a passionate and dedicated individual who's embarking on an exciting career transition from retail to web development. With nearly 20 years of experience in customer service and sales, I've honed my skills in providing exceptional service and building strong relationships with clients.</p>

            <p>Born and raised in Tucson, Arizona, I have a deep appreciation for the beauty of the Sonoran desert. However, my true passion lies in the world of web development. I aspire to become a proficient full stack web developer, collaborating with others to solve complex problems and create captivating web applications.</p>

            <p>Recently, I completed a rigorous coding and web development boot camp through the University of Arizona, earning a B+ grade. This intensive program allowed me to gain practical experience in a wide range of technologies. I've worked extensively with HTML, CSS, bootstrap, JavaScript, Git, GitHub, Heroku, Node.js, JSON, mySQL, MongoDB, express.js, and React.js.</p>

            <p>During the boot camp, I also acquired valuable knowledge in areas such as search engine optimization, object-oriented programming, responsive design, agile methodologies, coding best practices, and computer science fundamentals. With a thirst for knowledge, I'm eager to continue learning and expanding my skills in order to stay ahead in this rapidly evolving industry.</p>

            <p>I invite you to explore my portfolio, which showcases my work and the projects I've completed. If you're interested in collaborating or have any inquiries, feel free to reach out using the contact information provided.</p>

            <p>Let's connect and bring your web development ideas to life!</p>
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