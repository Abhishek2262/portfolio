import React from 'react';
import LandingPage from './Components/Landingpage';
import Aboutme from './Components/Aboutme';
import Portfolio from './Components/Portfolio';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Contact from './Components/Contact';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" element ={<LandingPage/>} />
        <Route path="/Aboutme" element ={<Aboutme/>} />
        <Route path="/Portfolio" element ={<Portfolio/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
