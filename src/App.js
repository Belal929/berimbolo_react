import "./App.css"
import React from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Feature from "./Pages/Feature";
import Project from "./Pages/Project";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Service" element={< Service/>} />
        <Route path="/Feature" element={<Feature/>} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
     
    </div>
     
  );


}



export default App;