import React from "react";
import "./PortfolioItem.css";
// import "../Portfolio.css";
import { RxCross2 } from "react-icons/rx";

const PortfolioItem = (props) => {
  const data = props.data;
  return (
    <div className="dialog_container">
      <div
        className="left"
        onClick={() => {
          props.setisItemDisplay(false);
        }}
      ></div>
      <div className="right"> 
        <RxCross2
          className="close_btn"
          onClick={() => {
            props.setisItemDisplay(false);
          }}
        />

        <div className="image_container">
          <img className="portfolio-rtr" src={data.image} alt="logo" />
        </div>
        <h1 style={{ fontSize: "1.9rem" }}>{data.title}</h1>
        <p className="p-item1">Project: {data.project}</p>
        <p className="p-item2">Duration: {data.duration}</p>
        <p className="p-item3">Technology Used: {data.tech}</p>
        <p className="p-item4">Discription : {data.description}</p>

        <button className="portfolio-btn">
          {" "}
          <a
            href={data.github}
            target="_blank"
            rel="noopener   noreferrer"
            style={{ color: "whitesmoke", textDecoration: "none" }}
          >
            Github
          </a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
