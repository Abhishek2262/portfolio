import React from "react";
import "./SkillItem.css";
import { TfiComment } from "react-icons/tfi";

const SkillItem = ({ name, progress }) => {
  const wd = progress * 2.1;
  return (
    <div className="skill-html2">
      <span className="">
        <div className="skill-h">{name}</div>
      </span>

      <div
        style={{
          width: `${wd}px`,
        }}
        className="item-progress-css"
      ></div>

      <TfiComment
        style={{
          marginLeft: `${wd}px`,
        }}
        className="percent-icon"
      />
      
      <span className="percentage">{progress}%</span>

      <div className="item-line"></div>
    </div>
  );
};

export default SkillItem;
