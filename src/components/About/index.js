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

import React from 'react';

function About() {
    return (
        <main>
            <h2>About Me</h2>
            <img className="avatar" src={require('../../assets/images/avatar.jpeg')} alt="avatar"/>
            <p>Hi, my name is Yari.</p>
        </main>
    );
}

export default About;