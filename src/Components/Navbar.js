import React from "react";
import "./Landingpage.css";
import {AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";



export default function Navbar (){
    const [buttonDimensions,setButtonDimensions] = useState({height:4, width:4, borderRadius:50});
    const [isToggled, setIsToggled] = useState(false);
    
   
    const changeButtonDimensions=()=>{
      if(isToggled){
        setButtonDimensions({
            height: 17,
            width:4,
            borderRadius:40
            
            
        }); 
      }else{
        setButtonDimensions({
            height: 4,
            width:4,
            borderRadius:50
        });
      }
      setIsToggled(!isToggled);
    };
  
    return(
        <>
     <button className="nav" style={{height:`${buttonDimensions.height}rem`, width:`${buttonDimensions.width}rem`, borderRadius: `${buttonDimensions.borderRadius}px`}} onClick={changeButtonDimensions}><AiOutlineMenu/></button>
        </>
    );

}