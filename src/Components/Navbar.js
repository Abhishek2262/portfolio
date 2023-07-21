import React from "react";
import "./Landingpage.css";
import {AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import{RxCross2} from "react-icons/rx";
import{FaHome} from"react-icons/fa";
import{BsFillPersonFill} from"react-icons/bs";
import{CgToolbox} from"react-icons/cg";
import{HiOutlineChatBubbleLeftRight} from"react-icons/hi2";



export default function Navbar (){
    const [buttonDimensions,setButtonDimensions] = useState({height:4, width:4, borderRadius:50  , icon:<AiOutlineMenu/> });
    const [isToggled, setIsToggled] = useState(false);
    useEffect(() => {
      if(isToggled){
        setButtonDimensions({
            height: 17,
            width:3.8,
            borderRadius:40
            
            
          
            
        }); 
      }else{
        setButtonDimensions({
            height: 4,
            width:4,
            borderRadius:50,
            icon: <AiOutlineMenu/>

            
        });
      }
    }, [isToggled])
    
   
    const changeButtonDimensions=()=>{
      
      setIsToggled(!isToggled);
    };
  
    return(
        <>
        {isToggled ?  <button className="nav" 
        style={{height:`${buttonDimensions.height}rem`, 
        width:`${buttonDimensions.width}rem`, 
        borderRadius: `${buttonDimensions.borderRadius}px`}} 
        > <div className="icon-cntr-nav">
            <div><RxCross2 onClick={changeButtonDimensions}/></div>
                    <div className="icon-cntr-2">
                        <div className="box1-icon-nav" 
                        ><div ><FaHome/></div><div className="home-nav">HOME</div></div>
                        <div className="box1-icon-nav1"><div><BsFillPersonFill/></div><div className="home-nav">ABOUT</div></div>
                        <div className="box1-icon-nav2"><div><CgToolbox/></div> <div className="home-nav" >PORTFOLIO</div></div>
                        <div className="box1-icon-nav3"><div><HiOutlineChatBubbleLeftRight/></div> <div className="home-nav" >CONTACT</div></div>
                   </div>
          </div>
          </button>
        : (
         <button className="nav" style={{height:`${buttonDimensions.height}rem`, 
         width:`${buttonDimensions.width}rem`, 
         borderRadius: `${buttonDimensions.borderRadius}px`}} 
         onClick={changeButtonDimensions}>
          <AiOutlineMenu/></button>
         
        )}
     
    
        </>
    );

}