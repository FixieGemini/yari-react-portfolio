import React from 'react';
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import ResumeContent from '../components/ResumeContent';

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        {<ResumeContent />}
        <Footer />
    </div>
  );
};

export default Home