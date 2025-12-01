import React from "react";
import "../styles/Car.css";

// Import images from src folder
import carImage from "../assets/911.jpg";                  
import carGif from "../assets/gif/911.gif";   
import PanameraImg from "../assets/panamera.jpg"
import Panameragif from "../assets/gif/panamera.gif" 
import MartiniImg from "../assets/martini.jpg"
import MartiniGIF from "../assets/gif/martini.gif"
import Porsche911GT3CupImg from "../assets/Porsche 911 GT3 Cup.png"
import Porsche911GT3CupGif from "../assets/gif/Porsche 911 GT3 Cup.gif"
import PorschePanameraTurboI from "../assets/Porsche Panamera Turbo.jpg"
import PorschePanameraTurboG from "../assets/gif/Porsche Panamera Turbo.gif"

const cars = [
  {
    name: "911 Carrera",
    image: carImage,
    gif: carGif,
  },
  {
    name: "Panamera",
    image: PanameraImg,  
    gif: Panameragif,      
  },
  {
    name:"Martini",
    image:MartiniImg,
    gif:MartiniGIF,

  },
  {
    name:"Porsche 911 GT3 Cup",
    image:Porsche911GT3CupImg,
    gif:Porsche911GT3CupGif,
  },
  {
    name:"Porsche Panamera Turbo",
    image:PorschePanameraTurboI,
    gif:PorschePanameraTurboG,
  },
];

export default function Car() {
    
  return (
    <div className="cars-section" id="cars-section">
      <h1>Your Porsche journey starts now.</h1>
      <div className="cars-container">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} className="car-image" />
            <img src={car.gif} alt={car.name} className="car-gif" />
            <h2>{car.name}</h2>
            <button className="btn-explore">Explore More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
