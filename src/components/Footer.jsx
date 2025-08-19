import React from "react";
import "../assets/css/Footer.css"; // Assuming you have a CSS file for Footer styles
import ScrollToTopButton from "./ScrollToTopBotton";

import eLogo1 from "../assets/img/eslog2.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
     <div
        className="info pt-5 pb-4"
        style={{
          backgroundColor: "#111",
          borderTop: "3px solid var(--primary-color)",
          borderBottom: "3px solid var(--primary-color)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }} 
        id="footer-top"
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="py-5 h-100 d-flex flex-column justify-content-between">
                <div className="mb-3" style={{ height: "40px" }}> {/* Container untuk logo */}
                  <img src={eLogo1} alt="Logo" style={{ 
                    width: "70%", height: "70px" 
                    }}
                                                        
                  />
                </div>
                <address className="footer-contact pt-3 mb-0" style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>
                  <div><span style={{ marginRight: "8px" }}></span>PT. MITRACOM SOLUSI TEKNOLOGI </div>
                  <div><span style={{ marginRight: "8px" }}></span>The Best Partner For Your Business</div>
                  <div className="mt-3">
                    <strong><span style={{ marginRight: "6px" }}></span>Phone:</strong> <span>+62 877-2799-9117</span>
                  </div>
                  <div>
                    <strong><span style={{ marginRight: "6px" }}>📩</span>Email:</strong>{" "}
                    <a
                      href="mailto:info@mitracom.id"
                      style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
                    >
                      info@mitracom.id
                    </a>
                  </div>
                </address>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="py-5 h-100">
                <h4 className="mb-3" style={{ color: "#fff", letterSpacing: "1px" }}>Layanan Kami</h4>
                <ul className="list-unstyled mb-0">
                    {[
                      { name: "Internet Home", icon: "🏠", link: "/" },
                      { name: "Internet Dedicated", icon: "👥", link: "/about" },
                      { name: "Service Komputer", icon: "🛠️", link: "/services" },
                      { name: "Penjualan", icon: "📄", link: "/terms-of-service" },
                      { name: "CCTV", icon: "🔒", link: "/privacy-policy" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.link}
                          className="footer-link"
                          style={{
                            color: "var(--text-light)",
                            textDecoration: "none",
                            transition: "color 0.3s, border-bottom 0.3s",
                            borderBottom: "2px solid transparent",
                            paddingLeft: "2px",
                          }}
                          onMouseOver={e => {
                            e.target.style.color = "var(--primary-color)";
                            e.target.style.borderBottom = "2px solid var(--primary-color)";
                          }}
                          onMouseOut={e => {
                            e.target.style.color = "var(--text-light)";
                            e.target.style.borderBottom = "2px solid transparent";
                          }}
                        >
                          <span style={{ marginRight: "6px" }}>{item.icon}</span>{item.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="py-5 h-100">
                <h4 className="mb-3" style={{ color: "#fff", letterSpacing: "1px" }}>
                  
                  Jam Operasional
                </h4>
                <div className="operational-hours">
                  <div className="mb-3">
                    <h5 style={{ color: "#fff", marginBottom: "8px" }}>
                      
                      Administrasi
                    </h5>
                    <div style={{ color: "var(--text-light)" }}>
                      <div>
                        Senin - Sabtu: <span style={{ fontWeight: "500" }}>08:00-16:30</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 style={{ color: "#fff", marginBottom: "8px" }}>
                      Teknis
                    </h5>
                    <div style={{ color: "var(--text-light)" }}>
                      <div>
                        Senin - Minggu: <span style={{ fontWeight: "500" }}>08:00-22:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-12">
              <div className="py-5 h-8 d-flex flex-column justify-content-between">
                <h4 className="mb-3" style={{ color: "#fff", letterSpacing: "1px" }}>Kontak Kami</h4>
                              <ul className="list-unstyled mb-0">
                    {[
                      { name: "Home", icon: "🏠", link: "/" },
                      { name: "About us", icon: "👥", link: "/about" },
                      { name: "Services", icon: "🛠️", link: "/services" },
                      { name: "Terms of service", icon: "📄", link: "/terms-of-service" },
                      { name: "Privacy policy", icon: "🔒", link: "/privacy-policy" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.link}
                          className="footer-link"
                          style={{
                            color: "var(--text-light)",
                            textDecoration: "none",
                            transition: "color 0.3s, border-bottom 0.3s",
                            borderBottom: "2px solid transparent",
                            paddingLeft: "2px",
                          }}
                          onMouseOver={e => {
                            e.target.style.color = "var(--primary-color)";
                            e.target.style.borderBottom = "2px solid var(--primary-color)";
                          }}
                          onMouseOut={e => {
                            e.target.style.color = "var(--text-light)";
                            e.target.style.borderBottom = "2px solid transparent";
                          }}
                        >
                          <span style={{ marginRight: "6px" }}>{item.icon}</span>{item.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Credit Section */}
      <footer className="footer" id="footer-credit" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div id="credit-center">
            {/* <a
              href="http://webanakcirebon.blogspot.com"
              rel="nofollow"
              target="_blank"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              Blog Gado Gado
            </a>{" "} */}
            
            {/* <a
              href="http://indomediakita.blogspot.com"
              rel="nofollow"
              target="_blank"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              Indo Media Kita
            </a>{" "} */}
            
            {/* <a
              href="http://gistechindo.blogspot.com"
              rel="nofollow"
              target="_blank"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              Gistechindo
            </a>{" "} */}
            
            {/* <a
              href="http://wongaslicirebon.blogspot.com"
              rel="nofollow"
              target="_blank"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              Wong Asli Cirebon
            </a> */}
            
            © Copyright {currentYear} | All Rights Reserved by 
            <a
              className="sitename"
              href="https://mitracom.id/"
              title="Terjangkau hingga pelosok negri"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              mitracom.id
            </a>
            
          </div>
          {/* <div id="credit-kanan">
            Design by{" "}
            <a href="http://www.duniakomputer.net/" title="Mas Kholis" style={{ color: 'var(--text-light)' }}>
              {" "}
              MITRACOM
            </a>
            <br />
            powered by <a href="//www.blogger.com"> </a>
          </div> */}
        </div>
      </footer>
      <ScrollToTopButton />
    </>
  );
};

// ...existing code...
export default Footer;
