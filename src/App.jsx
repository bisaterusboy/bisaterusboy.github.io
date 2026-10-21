//import Button from "@mui/material/Button";
import "./App.css";
//import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
// import ScrollToTopButton from "./components/ScrollToTopBotton";
// import whatsapp from "./assets/img/wa.png";

import LoadingScreen from "./components/LoadingScreen";

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/6287727999117?text=Hallo, saya ingin bertanya tentang layanan internet Mitracom ISP"
      //       className="position-fixed"
      // style={{
      //   bottom: '20px',
      //   right: '10px',
      //   zIndex: 1000,
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
        
      // }}
      className="wa-float-container"
      target="_blank"
      rel="noopener noreferrer"
      title="Hubungi Kami via WhatsApp"
      aria-label="Hubungi Kami via WhatsApp"
    >
      <div className="wa-float-btn">
        <div className="wa-content">
          <div className="wa-header">
            <span className="wa-status-dot"></span>
            <span className="wa-status-text">Online</span>
          </div>
          <span className="wa-label">Hubungi Kami</span>
        </div>
        <div className="wa-icon-wrapper">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
    </a>
  );
};

function App() {
  return (
    <>
      <LoadingScreen />
      <Router>
        <Navbar />
        <MainContent/>
        <Footer/>
      </Router>
      {/* <ScrollToTopButton/> */}
      <WhatsAppFloat/>
    </>
  );
}

export default App;
