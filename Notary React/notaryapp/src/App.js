import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Practice from './Components/Practice';
import Testim from './Components/Testim';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Homepage/>}/>
        <Route path ="/Practice" element={<Practice/>}/>
        <Route path ="/Testim" element={<Testim/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/Contact" element={<Contact/>}/>
        {/* <Route path ="/" element={<Homepage/>}/> */}
      </Routes>
      <Footer/>
    </Router>



   
    </>
   
  );
}

export default App;
