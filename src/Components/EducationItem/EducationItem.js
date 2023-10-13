import React from 'react'
import './Education.css';
import { FaCalendarAlt } from "react-icons/fa";

function EducationItem({startyear,endyear,course, institute,work_description}) {
  return (
    <div className="gigcn">
    <div className="gig1">
      <div className="expy">
        <FaCalendarAlt />
        <div className="expyear">{startyear} - {endyear}</div>
      </div>
      <div className="cmpnyt">{course}</div>
      <div>{institute}</div>
      <div className="work-discription-edu">
        Courses
        <div>{work_description}</div>
      </div>
    </div>
  </div>
  )
}

export default EducationItem