import React from "react";
import { Link } from "react-router-dom";
// import ScrollToTop from "./ScrollToTop";
import eLogo1 from "../assets/img/eslog2.png";
import "../assets/css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const servicesLinks = [
    { name: "Home Broadband", link: "/services" },
    { name: "Business Internet", link: "/services" },
    { name: "Wifi Hotspot", link: "/services" },
    { name: "Dedicated Internet", link: "/services" },
    { name: "Cloud CCTV", link: "/services" },
  ];

  const hoursItems = [
    { label: "Office", value: "Senin - Jumat 08.00–17.00" },
    { label: "Teknis", value: "Senin - Minggu 08.00–24.00" },
  ];

  const contacts = [
    { label: "Telepon", display: "+62 821-1777-7187", href: "tel:+6282117777187" },
    { label: "Email", display: "info@mitracom.id", href: "mailto:info@mitracom.id" },
    { label: "Website", display: "mitracom.id", href: "https://mitracom.id", external: true },
  ];

  const columns = [
    { key: 'brand', type: 'brand' },
    { key: 'services', type: 'links', title: 'Layanan Kami', items: servicesLinks },
    { key: 'hours', type: 'hours', title: 'Jam Operasional', items: hoursItems },
    { key: 'contacts', type: 'contacts', title: 'Kontak Kami', items: contacts },
  ];
  return (
    <>
      <div
        className="info pt-3 pb-3"
        style={{
          backgroundImage:
            "linear-gradient(-10deg, rgb(220, 53, 69) 9%, rgb(7, 127, 255) 33%, rgba(83, 225, 179, 0.85) 66%)", 
          backgroundSize: "120% 120%",
          // borderTop: "3px solid var(--primary-color)",
          // borderBottom: "3px solid var(--primary-color)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className=" d-flex flex-column justify-content-between">
                <div className="mb-3" style={{ height: "40px" }}> {/* Container untuk logo */}
                  <img src={eLogo1} alt="Logo" style={{ 
                      height: "50px" 
                    }}
                                                        
                  />
                </div>
                <address className="footer-contact pt mb-0" style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>
                  <div><span style={{ marginRight: "8px" }}></span>PT. MITRACOM SOLUSI TEKNOLOGI </div>
                  <div><span style={{ marginRight: "8px" }}></span>The Best Partner Your Internet Connection</div>
                  {/* <div className="mt-3">
                    <strong><span style={{ marginRight: "6px" }}></span>Phone:</strong> <span>+62 877-2799-9117</span>
                  </div> */}
                  {/* <div>
                    <strong><span style={{ marginRight: "6px" }}>📩</span>Email:</strong>{" "}
                    <a
                      href="mailto:info@mitracom.id"
                      style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
                    >
                      info@mitracom.id
                    </a>
                  </div> */}
                </address>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="py h-100">
                <h4 className="mx-2" style={{ color: "#fff", letterSpacing: "1px" ,}}>Layanan Kami</h4>
                <ul className="list-unstyled mx-2">
                    {[
                      { name: "Internet Home", icon: "🏠", link: "/" },
                      { name: "Internet Dedicated", icon: "👥", link: "/" },
                      { name: "Service Komputer", icon: "🛠️", link: "/" },
                      { name: "Penjualan", icon: "📄", link: "/" },
                      { name: "CCTV", icon: "🔒", link: "/" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        {/* <a
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
                        > */}
                          <span style={{ marginRight: "6px" }}>{item.icon}</span>{item.name}
                        {/* </a> */}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="py h-100">
                <h4 className="mx-2" style={{ color: "#fff", letterSpacing: "1px" }}>
                  
                  Jam Operasional
                </h4>
                <div className="operational-hours">
                  <div className="mx-2">
                    <h5 style={{ color: "#fff", marginBottom: "8px" }}>
                      
                      Office
                    </h5>
                    <div style={{ color: "var(--text-light)" }}>
                      <div>
                        Senin - Sabtu: <span style={{ fontWeight: "500" }}>08:00-17:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="mx-2"> 
                    <h5 style={{ color: "#fff", marginBottom: "8px" }}>
                      Teknis
                    </h5>
                    <div style={{ color: "var(--text-light)" }}>
                      <div>
                        Senin - Minggu: <span style={{ fontWeight: "500" }}>08:00-24:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-12">
              <div className="py h-8 d-flex flex-column justify-content-between">
                <h4 className="mx-2" style={{ color: "#fff", letterSpacing: "1px" }}>Kontak Kami</h4>
                              <ul className="list-unstyled mb-0">
                    
                    {[
                      { name: "Kontak", icon: "📞", link: "/contact" },
                      { name: "info@mitracom.id", icon: "📩", link: "mailto:info@mitracom.id" }, 
                      { name: "mitracom.id", icon: "🌐", link: "/" },
                      { name: "Kebijakan & Privasi", icon: "🔒", link: "/privacy-policy" },
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
      {/* <ScrollToTop /> */}
    </>
  );
};

// ...existing code...
export default Footer;
