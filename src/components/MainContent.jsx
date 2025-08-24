import React from "react";
import * as bootstrap from "bootstrap";
// import { Outlet } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Disclaimer from "../pages/Disclaimer";
import Sitemap from "../pages/Sitemap";
import Contact from "../pages/Contact";
import Iklan from "../pages/Iklan";
import Service from "../pages/Service";
import NotFound from "../pages/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import Business from "../pages/Business";
import Konsultan from "../pages/Konsultan";
import Kamera from "../pages/Kamera";
import Maintenanceinternet from "../pages/Maintenanceinternet";
import Hardwaresoftware from "../pages/Hardwaresoftware";
import Marketing from "../pages/Marketing";
import Aplikasiweb from "../pages/Aplikasiweb";
import Webdesign from "../pages/Webdesign";

const MainContent = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      {/* <sidebar className="col-xs-12 col-ml-3" style={{ width: "200px" }}>
       
      </sidebar> */}
      {/* <Sidebar /> */}

      <main className="col-xs-12 col-ml-9 main-content" style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/services" element={<Service />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business" element={<Business />} />
          <Route path="/konsultan" element={<Konsultan />} />
          <Route path="/kamera" element={<Kamera />} />
          <Route path="/maintenanceinternet" element={<Maintenanceinternet />} />
          <Route path="/hardwaresoftware" element={<Hardwaresoftware />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/aplikasiweb" element={<Aplikasiweb />} />
          <Route path="/webdesign" element={<Webdesign />} />
          <Route path="/pricelist" element={<Iklan />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainContent;
