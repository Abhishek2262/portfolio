import React from 'react'
import "./Experience.css";
import { FaCalendarAlt } from "react-icons/fa";

const Experience = ({startyear, endyear,role,comapny_name,job_discription}) => {
  return (
    <div className="gigcn">
                  <div className="gig1">
                    <div className="expy">
                      <FaCalendarAlt />
                      <div className="expyear">{startyear} - {endyear}</div>
                    </div>
                    <div className="cmpnyt">{role}-{comapny_name}</div>
                    <div className="work-discription">
                     {job_discription}
                    </div>
                  </div>
                </div>
  )
}

export default Experience