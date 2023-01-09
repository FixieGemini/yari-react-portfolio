import React, {useState} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

//Components name and order
export default function App() {
    const [page, setPage] = useState("About");
    const renderPage =(currentPage)=>{
        switch(currentPage){
            case "About": return <About/>;
            case "Projects": return <Projects/>;
            case "Contact": return <Contact/>;
            case "Skills": return <Skills/>;
            default: return <About/>
        }
    }
    return (
        <main>
            <Navbar page= {page} setPage ={setPage}/>
            {renderPage(page)}
            {/* <About />
            <Projects />
            <Skills />
            <Contact /> */}
        </main>
    );
}