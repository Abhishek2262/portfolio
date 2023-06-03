import React from "react";
import "./Aboutme.css";
import Navbar from "./Navbar";
import {MdDownload}  from "react-icons/md";



export default function Abhoutme (){
    return(
        <>
            <div className="abtme">
                <div><Navbar/></div>
                <div className="hello">
                  <div className="abt1" >
               
                         <h1 className="abth1">ABOUT ME</h1>
                        <div><div className="hr1"></div> <h3>I Code and Build Beauitful Things, AND I LOVE WHAT I Do </h3>
                        <div className="hr2"></div></div>
                   
                      </div>
                          <div className="cont1">
                                <div className="profpic"><div className="inside">HI</div></div>
                                <div className="abt2">
                                <div className="p1">
                                <div className="int2">Name : Abhishek Pandey </div>
                                <div className="int2">Birthdate : 14-05-2000</div>
                                <div className="int2">Nationality : Indian</div>
                                <div className="int2">Address : Dhanbad, Jharkhand, India</div>
                                </div>
                                <div className="p1">
                                <div className="int2">Language : English , Hindi</div>
                                <div className="int2">Phonr number : 6203321160</div>
                                <div className="int2">Email : abhishekpandey1480@gmail.com</div>
                                <div className="int2">Github : https://github.com/Abhishek2262</div>
                                </div>
                                <button className="cvbtn"> <MdDownload className="icon"/> DOWNLOAD MY CV</button>
                          </div>
                          </div>
                          
                         <div className="hr3"></div> 
                         <div>HELELO</div>
                </div>
               

                
                
                
            </div>
        </>
    );
}