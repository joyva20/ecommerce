import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import tech_icon from "../Assets/tech_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW TECH ONLY</h2>
        <div>
          <div className="hero-tech-icon">
            <p>new</p>
            <img src={tech_icon} alt="" />
          </div>
          <p>technologies</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Product</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
