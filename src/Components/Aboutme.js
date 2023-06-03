    import React from "react";
    import "./Aboutme.css";
    import Navbar from "./Navbar";
    import {FaCalendarAlt} from "react-icons/fa"
    import {MdDownload}  from "react-icons/md";
    import{TfiComment} from "react-icons/tfi";
   



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
                            
                            <div className="resumecntr">
                                
                                <div className="expcntr">
                                    <h2 className="exph">Experience</h2>

                                    <div className="gigcntr">
                                        <div>
                                        <div className="dot">
                                       
                                       </div> <div className="expl"></div>
                                        </div>
                                    
                                       <div className="gigcn">
                                         <div className="gig1">
                                            <div className="expy"><FaCalendarAlt/>
                                             <div className="expyear">01/2023 - 04/2023</div>
                                             
                                         </div>
                                         <div className="cmpnyt">SEO Head - Gigzoe</div>
                                         <div className="work-discription">Gigzoe is freelancer company, also it gives service for your business.</div>
                                         </div>
                                        
                                      </div>
                                     
                                    </div>
                                    <div className="gigcntr">
                                        <div>
                                        <div className="dot">
                                       
                                       </div> <div className="expl"></div>
                                        </div>
                                    
                                       <div className="gigcn">
                                         <div className="gig1">
                                            <div className="expy"><FaCalendarAlt/>
                                             <div className="expyear">07/2023 - 09/2023</div>
                                             
                                         </div>
                                         <div className="cmpnyt">Digital Marketing - Gobookmart</div>
                                         <div className="work-discription">
                                         It is a print media company, they review the best books and conduct interviews with the authors.

                                         </div>
                                         </div>
                                        
                                      </div>
                                     
                                    </div>
                                    <div className="dot"></div>
                                    <div className="expl"></div>


                                </div>
                                <div className="educntr">
                                    <h2 className="eduh">Education</h2>
                                    <div className="gigcntr">
                                        <div>
                                        <div className="dot">
                                       
                                       </div> <div className="edul"></div>
                                        </div>
                                    
                                       <div className="gigcn">
                                         <div className="gig1">
                                            <div className="expy"><FaCalendarAlt/>
                                             <div className="expyear">07/2019 -  Present</div>
                                             
                                         </div>
                                         <div className="cmpnyt">Mathematics & Computing</div><div>Birla Institute Of Technology</div>
                                         <div className="work-discription-edu">Courses
                                         <div>Mathematics & Computing</div>
                                         </div>
                                         </div>
                                        
                                      </div>
                                     
                                    </div>
                                    <div className="gigcntr">
                                        <div>
                                        <div className="dot">
                                       
                                       </div> <div className="edul"></div>
                                        </div>
                                    
                                       <div className="gigcn">
                                         <div className="gig1">
                                            <div className="expy"><FaCalendarAlt/>
                                             <div className="expyear">03/2017 -  03/2019</div>
                                             
                                         </div>
                                         <div className="cmpnyt">Higher Secondary (HSC)</div><div>Rajkamal Saraswati Vidhaya Mandir</div>
                                         <div className="work-discription-edu"> Dhanbad, Jharkhand, Pincode - 826001.
                                         
                                         </div>
                                         </div>
                                        
                                      </div>
                                     
                                    </div>
                                    <div className="gigcntr">
                                        <div>
                                        <div className="dot">
                                       
                                       </div> <div className="expl"></div>
                                        </div>
                                    
                                       <div className="gigcn">
                                         <div className="gig1">
                                            <div className="expy"><FaCalendarAlt/>
                                             <div className="expyear">03/2009 -  03/2017</div>
                                             
                                         </div>
                                         <div className="cmpnyt">Secondary School (SSC)</div><div>Indian School of Learning</div>
                                         <div className="work-discription-edu"> Dhanbad, Jharkhand, Pincode - 826001.
                                         
                                         </div>
                                         </div>
                                        
                                      </div>
                                     
                                    </div>

                                
                                </div>
                            </div>
                            <div className="skillcntr">
                                <h2>SKILLS</h2>
                                <div className="skills-meter">
                                    <div className="skill-html">
                                        <span className=""><div className="skill-h">HTML</div></span>
                                        <div className="item-progress"></div>
                                       
                                        
                                           <TfiComment className="percent-icon"/>
                                            <span className="percentage">80%</span>
                                       
                                      
                                        <div className="item-line"></div>
                                    </div>
                                    <div className="skill-html2">
                                        <span className=""><div className="skill-h">HTML</div></span>
                                        <div className="item-progress"></div>
                                       
                                        
                                           <TfiComment className="percent-icon"/>
                                            <span className="percentage">80%</span>
                                       
                                      
                                        <div className="item-line"></div>
                                    </div>
                                     <div className="skill-html3">
                                        <span className=""><div className="skill-h">HTML</div></span>
                                        <div className="item-progress"></div>
                                       
                                        
                                           <TfiComment className="percent-icon"/>
                                            <span className="percentage">80%</span>
                                       
                                      
                                        <div className="item-line"></div>
                                    </div>
                                    <div className="skill-html4">
                                        <span className=""><div className="skill-h">HTML</div></span>
                                        <div className="item-progress"></div>
                                       
                                        
                                           <TfiComment className="percent-icon"/>
                                            <span className="percentage">80%</span>
                                       
                                      
                                        <div className="item-line"></div>
                                    </div>
                                    <div className="skill-html4">
                                        <span className=""><div className="skill-h">HTML</div></span>
                                        <div className="item-progress"></div>
                                       
                                        
                                           <TfiComment className="percent-icon"/>
                                            <span className="percentage">80%</span>
                                       
                                      
                                        <div className="item-line"></div>
                                    </div>


                                </div>
                            </div>
                            
                            
                    </div>
                   
                

                    
                    
                    
                </div>
            </>
        );
    }