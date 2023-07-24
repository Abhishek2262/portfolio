import React from "react";
import Navbar from "./Navbar";
import "./Portfolio.css";
import {RxCross2} from "react-icons/rx";
import rtr from "./photos/rtr.png";



const Portfolio=()=>{
    function display(el){
        document.getElementById('master-popup').classList.remove("master-popup-hide")
      
    }
    function hide(el){
        document.getElementById('master-popup').classList.add("master-popup-hide")
    }
    function display1(el){
        document.getElementById('master-popup1').classList.remove("master-popup1-hide")
      
    }
    function hide1(el){
        document.getElementById('master-popup1').classList.add("master-popup1-hide")
    }
    function display2(el){
        document.getElementById('master-popup1').classList.remove("master-popup1-hide")
      
    }
    function hide2(el){
        document.getElementById('master-popup1').classList.add("master-popup1-hide")
    }
    return(
        <>
        <div className="bgportfolio">
          <div className="nav-b">  <Navbar/></div>
           <div className="portfoliocntr">
            
               <h1 className="heading-portfolio">  My Portfolio</h1>
                <div style={{display:"flex",  paddingTop:"2rem"}}>
                      <div className="portfolioline"/>
                         <div className="pitch-line">A FEW RECENT PROJECTS BUILD AND CODE PROJECT. WANT TO SEE MORE EMAIL ME. </div>
                      <div className="portfolioline"/>
                </div>
                <div className="box-cntr">
                    <div className="box-1"  onClick={display}><div className="heading1">Rotarct Website of BIT Mesra Ranchi</div></div>
                    <div className="box-1" onClick={display1}><div className="heading1">Fee Management</div> </div>
                    <div className="box-1" onClick={display2}><div className="heading1">Portfolio Website</div> </div>
                   

                </div>
           </div>
          <div className="master-popup master-popup-hide" id="master-popup"><div className="popup" id="popup">
                <div className="popup-in"><img className="portfolio-rtr" src={rtr} alt="logo"/></div>
                 <div className="portfolio-heading"> <h1 style={{fontSize:"1.9rem"}}>Rotaract club of BIT Mesra</h1>
                    <div className="portfolio-close-btn" onClick={hide}><div style={{padding:"0.3rem", marginLeft:'10px'}}><RxCross2/></div><p style={{padding:"0.2rem"}}>Close</p></div>
                 </div>
                     <div className="portfolio-list">
                    <div>Project: Website</div>
                    <div>Duration: 4 Months</div>
                    <div>Technology Used: React JS, CSS, Tailwind CSS, Node JS, Next JS , DB Mongo</div>    
                     </div>
                    <button className="portfolio-btn"> <a href="https://github.com/Abhishek2262/rotaract-website" target="_blank"  rel="noopener   noreferrer" style={{color:"whitesmoke",textDecoration:"none"}}>Github</a></button>
                </div>
         </div>
          <div className="master-popup1 master-popup1-hide" onClick={hide1} id="master-popup1"> <div className="popup1" id="popup1"></div>
                
          </div>
          <div className="master-popup2 master-popup2-hide" onClick={hide2} id="master-popup2"> <div className="popup2" id="popup2"></div></div>

        </div>
        </>
    )
}
export default Portfolio;