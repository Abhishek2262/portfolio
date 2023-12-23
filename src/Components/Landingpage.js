import React from "react";
import "./Landingpage.css";
import gp2 from "./photos/mypichorizontal.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import MovingText from "react-moving-text";

export default function LandingPage() {
  const Navigate = useNavigate();
  const goToAboutme = () => {
    Navigate("/aboutme");
  };
  const goToPortfolio = () => {
    Navigate("/portfolio");
  };
  return (
    <>
      <div className="overall-landing">
        <div className="l-nav">
          <Navbar />
        </div>

        <div className="hero-section" >
          <div className="left-side">
            <img className="img1"   src={gp2} alt="ABhishek" />
          </div>
          <div className="right-side">
        
            <h3>HI THERE !</h3>
            <div>
              <MovingText
                type="flipHorizontal"
                duration="1000ms"
                delay="5s"
                direction="left"
                timing="ease"
                iteration="infinite"
                fillMode="none"
              >
                <p className="mtext">I Am Abhishek </p>
              </MovingText>
            </div>
            <p className="l2">
              I'm a student of Mathemactis and Computing and Software and Web
              Developer based in Jharkhand, Dhanbad. I strives to build
              immersive and beautiful web applications through carefully crafted 
              code and user-centric design. 
            </p>
            <div className="btn">
              <button className="btn1" onClick={goToPortfolio}>
                Portfolio
              </button>
              <button className="btn2" onClick={goToAboutme}>
                More about me{" "}
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
