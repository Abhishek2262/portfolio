import React from "react";
import "./Portfolio.css";

const Portfolio=()=>{
    return(
        <>
        <div className="bgportfolio">
           <div className="portfoliocntr">
               <h1 className="heading-portfolio">  My Portfolio</h1>
                <div style={{display:"flex",  paddingTop:"2rem"}}>
                      <div className="portfolioline"/>
                         <div className="pitch-line">A FEW RECENT PROJECTS BUILD AND CODE PROJECT. WANT TO SEE MORE EMAIL ME. </div>
                      <div className="portfolioline"/>
                </div>
                <div className="box-cntr">
                    <div className="box-1"><div className="heading1">Rotarct Website of BIT Mesra Ranchi</div></div>
                    <div className="box-1"><div className="heading1">Fee Management</div> </div>
                    <div className="box-1"><div className="heading1">Portfolio Website</div> </div>
                   

                </div>
           </div>

        </div>
        </>
    )
}
export default Portfolio;