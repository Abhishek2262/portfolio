import React from "react";
import "./Aboutme.css";
import Navbar from "./Navbar";
import { MdDownload } from "react-icons/md";
import mypic from "./photos/mypic.png";
import CV from "./CV/Resume.pdf";
import SkillItem from "./SkillItem/SkillItem";
import Experience from "./ExperinceItems/Experience";
import EducationItem from "./EducationItem/EducationItem";

export default function Abhoutme() {
  return (
    <>
      <div className="abtme">
        <div style={{ zIndex: "2" }}>
          <Navbar />
        </div>
        <div className="hello">
          <div className="abt1">
            <h1 className="abth1">ABOUT ME</h1>
            <div className="quote1">
              <div className="hr1"></div>{" "}
              <h3>I Code and Build Beauitful Things, AND I LOVE WHAT I Do </h3>
              <div className="hr2"></div>
            </div>
          </div>
          <div className="cont1">
            <div className="profpic">
              <div className="inside">
                <img className="abt-img" src={mypic} alt="Abhi" />
              </div>
            </div>
            <div className="abt2">
              <div className="p1">
                <div className="int2">Name : Abhishek Pandey </div>
                <div className="int2">Birthdate : 14-05-2000</div>
                <div className="int2">Nationality : Indian</div>
                <div className="int2">Address : Dhanbad, Jharkhand, India</div>
              </div>
              <div className="p1">
                <div className="int2">Language : English , Hindi</div>
                <div className="int2">Phone number : 6203321160</div>
                <div className="int2">Email : abhishekpandey1480@gmail.com</div>
                <div className="int2">
                  Github : https://github.com/Abhishek2262
                </div>
              </div>
              <a
                href={CV}
                download="Abhishek-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className="cvbtn">
                  <MdDownload className="icon" />
                  DOWNLOAD MY CV
                </button>
              </a>
            </div>
          </div>

          <div style={{width:"90%", padding:"1%"}}><div className="hr3"></div></div>

          <div className="resumecntr">
            <div className="expcntr">
              <h2 className="exph">Experience</h2>

              <div className="gigcntr">
                <div>
                  <div className="dot"></div> <div className="expl"></div>
                </div>
                <Experience
                  startyear={"01/2022"}
                  endyea={"04/2022"}
                  role={"SEO Head"}
                  comapny_name={"Gigzoe"}
                  job_discription={
                    "Gigzoe is freelancer company, also it gives service for your business."
                  }
                />
              </div>
              <div className="gigcntr">
                <div>
                  <div className="dot"></div> <div className="expl"></div>
                </div>
                <Experience
                  startyear={"07/2021"}
                  endyear={"09/2021"}
                  role={"Digital Marketing"}
                  comapny_name={" Gobookmart"}
                  job_discription={
                    "It is a print media company, they review the best books and conduct interviews with the authors."
                  }
                />
              </div>
              <div className="dot"></div>
              <div className="expl"></div>
            </div>
            <div className="educntr">
              <h2 className="eduh">Education</h2>
              <div className="gigcntr">
                <div>
                  <div className="dot"></div> <div className="edul"></div>
                </div>

                <EducationItem
                  startyear={"07/2019"} 
                  endyear={"Present"}
                  course={"Mathematics & Computing"}
                  institute={"Birla Institute Of Technology "}
                  work_description={"Mathematics & Computing"}
                />
              </div>
              <div className="gigcntr">
                <div>
                  <div className="dot"></div> <div className="edul"></div>
                </div>

                <EducationItem
                  startyear={"03/2017"}
                  endyear={"03/2019"}
                  course={" Higher Secondary (HSC)"}
                  institute={" Rajkamal Saraswati Vidhaya Mandir "}
                  work_description={"  Dhanbad, Jharkhand, Pincode - 826001. "}
                />
              </div>
              <div className="gigcntr">
                <div>
                  <div className="dot"></div> <div className="expl"></div>
                </div>
                <EducationItem
                  startyear={"03/2009"}
                  endyear={"03/2017"}
                  course={" Secondary School (SSC) "}
                  institute={"Indian School of Learning "}
                  work_description={"  Dhanbad, Jharkhand, Pincode - 826001. "}
                />
              </div>
            </div>
          </div>
          <div className="skillcntr">
            <h2>SKILLS</h2>
            <div className="skills-inner">
              {/* <div className="cntr1"> */}
              <SkillItem name={"HTML"} progress={80} />
              <SkillItem name={"CSS"} progress={70} />
              <SkillItem name={"Java Script"} progress={50} />

              {/* </div> */}
              {/* <div className="cntr2"> */}
              <SkillItem name={"React JS"} progress={70} />
              <SkillItem name={"Tailwind CSS"} progress={75} />
              <SkillItem name={"SEO"} progress={80} />
              {/* </div> */}
              {/* <div className="cntr3"> */}
              <SkillItem name={"Digital marketing"} progress={80} />
              <SkillItem name={"operating System"} progress={75} />
              <SkillItem name={"C++"} progress={80} />
              {/* </div> */}
              {/* <div className="cntr4"> */}
              <SkillItem name={"Next Js"} progress={65} />
              <SkillItem name={"Data structures & Algorithms"} progress={70} />
              <SkillItem name={"My SQL"} progress={70} />
              {/* </div> */}
              {/* <div className="cntr5"> */}
              <SkillItem name={"DBMS"} progress={55} />
              <SkillItem name={"Python"} progress={70} />
              <SkillItem name={"OOPs"} progress={75} />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
