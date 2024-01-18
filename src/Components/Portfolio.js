import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Portfolio.css";
import rtr from "./photos/rtr.png";
import gp1 from "./photos/gp1.png";
import gp2 from "./photos/gp2.png";
import gp3 from "./photos/Group 63.png";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

const Portfolio = () => {
  const [isItemDisplay, setisItemDisplay] = useState({ show: false, index: 0 });
  //   const [currentItem, setcurrentItem] = useState(0);

  const data = [
    {
      title: "Rotaract Website",
      image: rtr,
      project: "Website",
      duration: "4 Months",
      description:
        "Designed a prominent showcase website for BIT Mesra’s Rotaract Club. Utilized ReactJs/Next.Js to create an intuitive frontend. Seamlessly worked with the backend team to integrate necessary databases and functionality",
      tech: " React JS, Next JS, CSS, Tailwind CSS, HTML, AOS(Animate on Scroll Library)",
      github: "https://github.com/Abhishek2262/rotaract-website",
    },
    {
      title: "Fee Management",
      image: gp1,
      project: "Website",
      duration: "4 Months",
      description:
        "Developed the front-end of a prototype website for school fee management.Used React for front-end.My contribution is to frame the front-end of the Website using React.",
      tech: "ReactJs, CSS, HTML",
      github: "https://github.com/Abhishek2262/fee-management",
    },
    {
      title: "Porfolio Website",
      image: gp2,
      project: "Website",
      duration: "4 Months",
      description:
        "Developed my portfolio website to showcase all my projects and skills.Used React for front-end.Learnt to use browser router to successfully route within pages.",
      tech: "ReactJs, CSS, HTML",
      github: "https://github.com/Abhishek2262/portfolio",
    },
    {
      title: "Library Management System ",
      image: gp3,
      project: "Website",
      duration: " 28- Dec - 2023 -  Working....",
      description: "This Project is under construction, coming-soon",
      tech: "ReactJs, CSS, HTML, JavaScript, Node.JS, Express.",
      github:
        "https://github.com/Abhishek2262/Libarary-management--System--Frontend",
    },
    {
      title: " Fix-Health Assignment :- Landing Page ",
      image: gp3,
      project: "Landing Page Only",
      duration: " 17-Jan-2024 - 18-Jan-2024",
      description:
        "This Project is assign by Fix-health, Here I build new landing page in dark mode, with An attractive hero image,Consultation booking form, Testimonials,The booking form should have these steps: 1 step- Name + Phone number, 2 step-Age + City + Company, 3 step Chief complaints, 4 step- Any previous experience with physiotherapy, 5 set- Any previous experience with physiotherapy  ",
      tech: "ReactJs, CSS, HTML, JavaScript, Node.JS, Express.",
      github:
        "https://github.com/Abhishek2262/Fix-health-Assignment",
    },
  ];


  function display(idx) {
    setisItemDisplay({ show: true, index: idx });
  }

  return (
    <>
      {isItemDisplay.show ? (
        <PortfolioItem
          setisItemDisplay={setisItemDisplay}
          data={data[isItemDisplay.index]}
        />
      ) : (
        <></>
      )}

      <div className="bgportfolio">
        <div className="nav-b">
          {" "}
          <Navbar />
        </div>
        <div className="portfoliocntr">
          <h1 className="heading-portfolio"> My Portfolio</h1>
          <div style={{ display: "flex", padding: "1rem" }}>
            <div className="portfolioline" />
            <div className="pitch-line">
              A FEW RECENT PROJECTS BUILD AND CODE PROJECT. WANT TO SEE MORE
              EMAIL ME.{" "}
            </div>
            <div className="portfolioline" />
          </div>
          <div className="box-cntr">
            <div className="box-1" onClick={() => display(0)}>
              <div className="bg-h1">
                <div className="heading1">
                  Rotaract Website of BIT Mesra Ranchi
                </div>
              </div>
            </div>
            <div className="box-1" onClick={() => display(1)}>
              <div className="bg-h1">
                <div className="heading1">Fee Management</div>
              </div>{" "}
            </div>
            <div className="box-1" onClick={() => display(2)}>
              <div className="bg-h1">
                <div className="heading1">Portfolio Website</div>
              </div>{" "}
            </div>
            <div className="box-1" onClick={() => display(3)}>
              <div className="bg-h1">
                <div className="heading1">
                  Library Management System <br></br> <br></br>( Coming soon)
                </div>
              </div>{" "}
            </div>
            <div className="box-1" onClick={() => display(4)}>
              <div className="bg-h1">
                <div className="heading1">
                  Assignment of Fixhealth :- Landing Page<br></br>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
