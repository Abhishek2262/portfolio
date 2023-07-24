import React from "react";
import{MdWhatsapp} from "react-icons/md";
import{AiOutlineMail} from "react-icons/ai";
import{BsPersonFill} from"react-icons/bs";
import {BsSend} from"react-icons/bs";
import {ImLocation2} from "react-icons/im";
import {FaFacebook, FaTwitter,FaLinkedin} from "react-icons/fa";
import Navbar from "./Navbar";
import{CiMail} from"react-icons/ci";
import{FiInstagram} from "react-icons/fi";

import "./Contact.css";

const Contact=()=>{
    return(
        <>
            <div className="bg-contact">
              <div className="nav-cnt1">  <Navbar/></div>
                <div className="contact-cntr">
                    <h1 className="contact-heading">GET <span className="s1">IN TOUCH</span></h1>
                    <div className="subhead">
                        <div className="linecnt"></div><div>I'M ALWAYS OPEN TO DISCUSSING WEB DEVELOPMENT & DATA STRUTRES</div>
                        <div className="linecnt2"></div>
                    </div>
                    <div className="contact-detail-cntr">
                        <div className="info-dest">
                            <div className="phn-cnt">Phone</div>
                            <div className="phn-cnt"><MdWhatsapp className="icon-cnt"/> +91-6203321160</div>
                            <div className="email-cnt1">Email</div>
                            <div className="email-cnt1"><AiOutlineMail className="icon-cnt"/> abhishekpandey1480@gmail.com</div>
                            <div className="address-cnt">Address</div>
                            <div className="address-cnt"><ImLocation2 className="icon-cnt"/>PandeyMuhalla, Near BLC Hirapur, Dhanbad, Jharkhand</div>
                            <div className="social-cnt">Social Profile</div>
                            <div className="icon-cnt-social"> <div><a href= {"https://www.facebook.com/profile.php?id=100006377015116"}><FaFacebook className="icon-f" /></a></div> <div><a href={"https://www.instagram.com/abhishekpandey22/"}><FiInstagram className="icon-i"/></a></div> <div><a href={"https://twitter.com/abhishe14002262"}><FaTwitter className="icon-t"/></a></div><div><a href={"https://www.linkedin.com/in/abhishek-pandey-6953201b7/"}><FaLinkedin className="icon-l"/></a></div></div>
                        </div>
                        <div className="input-desk">
                            <div>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</div>
                            <div className="input-cntr">
                            <div className="input-cntr1">
                            <div className="name-cnt"><BsPersonFill/><input className="input-box" placeholder="Your Name" ></input></div> <div className="email-cnt"><CiMail/><input className="input-box" placeholder="Your Email" ></input></div>
                            </div>
                            <div className="messg-cnt"><textarea placeholder="Your Message" className="input-box"  rows="10"></textarea></div>
                            </div>

                            <div><button className="btn-cnt"><BsSend/> SEND MESSAGE</button></div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Contact;