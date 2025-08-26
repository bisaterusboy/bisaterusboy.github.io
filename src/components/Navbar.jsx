import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram} from "@fortawesome/free-brands-svg-icons";
import eLogo from "../assets/img/eslog1.png";

// Icon Component with fallback
const Icon = ({ iconClass, size = "fs-6" }) => {
  return (
    <i 
      className={`${iconClass} ${size}`} 
      style={{ 
        fontFamily: '"bootstrap-icons" !important',
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
      title={iconClass.replace('bi bi-', '')}
    />
  );
};



function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Initialize dark mode based on system preference or stored preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  // Handle scroll for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        const newMode = e.matches;
        setIsDarkMode(newMode);
        document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${showNavbar ? '' : 'navbar-hidden'}`}
        id="menutop-wrapper"
        style={{ 
          backgroundColor: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-color)',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={eLogo}
              alt="Logo"
              style={{ height: "30px" }}
            />
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ 
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-decoration-none" to="/" style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-decoration-none" to="/about" style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>
                  Tentang Kami
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-decoration-none" to="/services" style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>
                  Layanan & Produk
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link fw-bold text-decoration-none" to="/disclaimer" style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>
                  Disclaimer
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link fw-bold text-decoration-none" to="/pricelist" style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>
                  Pasang Iklan
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link fw-bold text-decoration-none" to="/contact" style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>
                  Kontak
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link fw-bold text-decoration-none" to="/sitemap" style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>
                  Sitemap
                </Link>
              </li>  */}
            </ul>
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold text-decoration-none"
                  href="https://www.facebook.com/mitracomindramayu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}
                  title="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold text-decoration-none"
                  href="https://www.instagram.com/mitracom.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}
                  title="instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link fw-bold text-decoration-none"
                  href="https://www.linkedin.com/in/cbblogger"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}
                  title="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link fw-bold text-decoration-none"
                  href="https://api.whatsapp.com/send/?phone=6287727999117&text=Hallo%2C+saya+tertarik+ingin+memesan+layanan+Internetnya&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}
                  title="whatsapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
      
      <div style={{ paddingTop: '40px' }}></div>
    </>
  );
}

export default Navbar;