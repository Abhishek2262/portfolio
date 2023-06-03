import React from 'react';
import LandingPage from './Components/Landingpage';
import Aboutme from './Components/Aboutme';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" element ={<LandingPage/>}  />
        <Route path="/Aboutme" element ={<Aboutme/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
