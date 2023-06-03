import React from "react";
import "./Landingpage.css";
import gp1 from "./photos/gp1.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import MovingText from 'react-moving-text';

export default function LandingPage (){
    const Navigate = useNavigate();
        const goToAboutme =()=>{
            Navigate("/Aboutme")
        }
        const goToPortfolio = ()=>{
            Navigate("/Portfolio")
        }
    return(
        <>
       
      <div className="Landingpg">
      
              <div><Navbar/></div>
             <img  className="img1" src={gp1} alt="ABhishek"/>
         <div className="l1"> <h3>HI THERE !</h3>
                 <div>
                  <MovingText
                 type="flipHorizontal"
                  duration="1000ms"
                 delay="5s"
                  direction="left"
                  timing="ease"
                  iteration="infinite"
                   fillMode="none"
                  ><div className="mtext">I Am Abhishek </div></MovingText>
    
                 </div>
                 <div className="l2">I'm a student of Mathemactis and Computing and Software and Web Developer based in Jharkhand, Dhanbad. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</div>
                 <div className="btn">
                    <button className="btn1" onClick={goToPortfolio}>Portfolio</button>
                    <button className="btn2" onClick={goToAboutme}>More about me  </button>
                 </div>
            
             </div>
         
      </div>
          
           
            
        
        </>
    );

}