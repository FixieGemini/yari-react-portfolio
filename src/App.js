import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
          <Routes>
            <Route path="/yari-react-portfolio" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
        </>
    );
}

export default App;

// import React, {useState} from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";

// //Components name and order
// export default function App() {
//     const [page, setPage] = useState("About");
//     const renderPage =(currentPage)=>{
//         switch(currentPage){
//             case "About": return <About/>;
//             case "Projects": return <Projects/>;
//             case "Contact": return <Contact/>;
//             case "Skills": return <Skills/>;
//             default: return <About/>
//         }
//     }
//     return (
//         <main>
//             <Navbar page= {page} setPage ={setPage}/>
//             {renderPage(page)}
//             {/* <About />
//             <Projects />
//             <Skills />
//             <Contact /> */}
//         </main>
//     );
// }

// import React, { useState } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";

// function App() {
// 	const [currentTab, setCurrentTab] = useState("about");

// 	const renderTab = () => {
// 		switch (currentTab) {
// 			case "about":
// 				return <About />;
// 			case "portfolio":
// 				return <Portfolio />;
// 			case "contact":
// 				return <Contact />;
// 			case "resume":
// 				return <Resume />;
// 			default:
// 				return null;
// 		}
// 	};

// 	return (
// 		<div>
// 			<div>
// 				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
// 			</div>
// 			<div>
// 				<main>{renderTab()}</main>
// 			</div>
// 			<div>
// 				<Footer></Footer>
// 			</div>
// 		</div>
// 	);
// }

// export default App;