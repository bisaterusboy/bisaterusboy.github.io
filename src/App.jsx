//import Button from "@mui/material/Button";
import "./App.css";
//import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ScrollToTopButton from "./components/ScrollToTopBotton";
import whatsapp from "./assets/img/wa.png";

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/6287727999117?text=Hallo, saya ingin bertanya tentang layanan internet Mitracom ISP"
      className="btn btn-success rounded-circle position-fixed"
      style={{
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}
      target="_blank"
      rel="noopener noreferrer"
      title="Hubungi Kami via WhatsApp"
    >
      <img
       src={whatsapp}
       alt="Logo"
       style={{ width:"300px",height: "100px" }}
      />
    </a>
  );
};

function App() {
  return (
    <>
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
