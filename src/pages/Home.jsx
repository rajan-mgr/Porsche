import React from 'react';
import "../styles/Home.css";
import video from "../assets/porce2.mp4"; 
import {Link} from "react-router-dom"
import Cars from '../pages/Car';  
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      {/* Video Background Section */}
      <div className='home-container' id='home'>
        <video className='home-video' autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Content overlay */}
        <div className='home-content'>
          <h1>Taycan</h1>
         <a href='#cars-section'>
          <button>Discover More</button>
          </a>
        </div>
      </div>

      {/* Cars Section below the video */}
      <Cars />
      <Footer />
    </div>
  );
}

export default Home;
