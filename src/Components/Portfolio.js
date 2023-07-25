import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Portfolio.css";
import rtr from "./photos/rtr.png";
import gp1 from "./photos/gp1.png";
import gp2 from "./photos/gp2.png";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

const Portfolio = () => {
  const [isItemDisplay, setisItemDisplay] = useState({show: false, index: 0});
//   const [currentItem, setcurrentItem] = useState(0);

  const data = [{
    title: "Rotaract Website0",
    image: rtr,
    project: "Website",
    duration: "4 Months",
    description: "",
    tech: "",
    github: "https://google.com",
  }, {
    title: "Rotaract Website1",
    image: gp1,
    project: "Website",
    duration: "4 Months",
    description: "",
    tech: "",
    github: "https://rishiksahu.in",
  }, {
    title: "Rotaract Website2",
    image: gp2,
    project: "Website",
    duration: "4 Months",
    description: "",
    tech: "",
    github: "https://bard.google.com",
  }];

  function display(idx) {

    setisItemDisplay({show:true, index: idx});
  }

  return (
    <>
      {isItemDisplay.show ? <PortfolioItem setisItemDisplay={setisItemDisplay} data={data[isItemDisplay.index]} /> : <></>}

      <div className="bgportfolio">
        <div className="nav-b">
          {" "}
          <Navbar />
        </div>
        <div className="portfoliocntr">
          <h1 className="heading-portfolio"> My Portfolio</h1>
          <div style={{ display: "flex", paddingTop: "2rem" }}>
            <div className="portfolioline" />
            <div className="pitch-line">
              A FEW RECENT PROJECTS BUILD AND CODE PROJECT. WANT TO SEE MORE
              EMAIL ME.{" "}
            </div>
            <div className="portfolioline" />
          </div>
          <div className="box-cntr">
            <div className="box-1" onClick={() => display(0)}>
              <div className="heading1">
                Rotarct Website of BIT Mesra Ranchi
              </div>
            </div>
            <div className="box-1" onClick={() => display(1)}>
              <div className="heading1">Fee Management</div>{" "}
            </div>
            <div className="box-1" onClick={() => display(2)}>
              <div className="heading1">Portfolio Website</div>{" "}
            </div>
          </div>
        </div>

      
      </div>

    </>
  );
};
export default Portfolio;
