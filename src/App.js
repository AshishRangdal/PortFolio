import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        
        <Routes>
          {/* Route for Home */}
          <Route path="/" element={<Home />} />
          
          {/* Route for Projects */}
          <Route path="/project" element={<Projects />} />
          
          {/* Route for About */}
          <Route path="/about" element={<About />} />
          
          {/* Route for Resume */}
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
