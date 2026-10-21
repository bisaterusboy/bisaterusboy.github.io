import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import eLogo1 from "../assets/img/eslog2.png";
import "../assets/css/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Internet Home & Business", icon: "bi bi-wifi", path: "/business" },
    { name: "IT Solution & Konsultasi", icon: "bi bi-cpu", path: "/konsultan" },
    { name: "Service Komputer & Laptop", icon: "bi bi-laptop", path: "/hardwaresoftware" },
    { name: "Maintenance Jaringan", icon: "bi bi-hdd-network", path: "/maintenanceinternet" },
    { name: "CCTV & Security System", icon: "bi bi-camera-video", path: "/kamera" },
    { name: "Web & Aplikasi Custom", icon: "bi bi-code-slash", path: "/aplikasiweb" },
  ];

  return (
    <footer className="site-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="row gy-4 gx-lg-5">
            {/* Column 1: Brand & Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand-section">
                <Link to="/" className="d-inline-block text-decoration-none">
                  <img
                    src={eLogo1}
                    alt="PT Mitracom Solusi Teknologi"
                    className="footer-brand-logo"
                  />
                </Link>
                <div className="footer-company-name">
                  PT. MITRACOM SOLUSI TEKNOLOGI
                </div>
                <div className="footer-tagline">
                  &ldquo;The Best Partner for Your Internet Connection&rdquo;
                </div>
                <p className="footer-desc">
                  Penyedia layanan internet broadband berkecepatan tinggi, integrasi
                  infrastruktur IT, keamanan CCTV, serta pemeliharaan teknis terpercaya
                  untuk kebutuhan rumah tangga, perkantoran, dan instansi.
                </p>

                {/* Social Media Links */}
                <ul className="footer-social-list">
                  <li>
                    <a
                      href="https://www.facebook.com/mitracomindramayu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-btn fb"
                      aria-label="Facebook Mitracom"
                      title="Facebook"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mitracom.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-btn ig"
                      aria-label="Instagram Mitracom"
                      title="Instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@mitracom.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-btn tt"
                      aria-label="TikTok Mitracom"
                      title="TikTok"
                    >
                      <FontAwesomeIcon icon={faTiktok} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@mitracom_id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-btn yt"
                      aria-label="YouTube Mitracom"
                      title="YouTube"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Layanan Kami */}
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading">Layanan Kami</h4>
              <ul className="footer-links-list">
                {services.map((service, idx) => (
                  <li key={idx} className="footer-link-item">
                    <Link to={service.path} className="footer-nav-link">
                      <span className="link-icon">
                        <i className={service.icon}></i>
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Jam Operasional */}
            <div className="col-lg-2 col-md-6">
              <h4 className="footer-heading">Jam Operasional</h4>
              <div className="operational-block">
                <div className="hour-card">
                  <div className="hour-card-header">
                    <span className="hour-card-title">
                      <i className="bi bi-building"></i> Office
                    </span>
                  </div>
                  <p className="hour-card-detail">
                    Senin - Sabtu<br />
                    <span className="hour-highlight">08:00 - 17:00 WIB</span>
                  </p>
                </div>

                <div className="hour-card">
                  <div className="hour-card-header">
                    <span className="hour-card-title">
                      <i className="bi bi-headset"></i> NOC / Support
                    </span>
                    <span className="hour-badge-online">
                      <span className="pulse-dot"></span> 24/7
                    </span>
                  </div>
                  <p className="hour-card-detail">
                    Senin - Minggu<br />
                    <span className="hour-highlight">24 Jam Nonstop</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4: Kontak & Alamat */}
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading">Kontak Kami</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <div className="contact-icon-bubble">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-text-wrap">
                    <span className="contact-label">Telepon / CS</span>
                    <a
                      href="tel:+6282117777187"
                      className="contact-value-link"
                    >
                      +62 821-1777-7187
                    </a>
                  </div>
                </li>

                <li className="footer-contact-item">
                  <div className="contact-icon-bubble">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div className="contact-text-wrap">
                    <span className="contact-label">WhatsApp Support</span>
                    <a
                      href="https://wa.me/6287727999117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-value-link"
                    >
                      +62 877-2799-9117
                    </a>
                  </div>
                </li>

                <li className="footer-contact-item">
                  <div className="contact-icon-bubble">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="contact-text-wrap">
                    <span className="contact-label">Email Resmi</span>
                    <a
                      href="mailto:info@mitracom.id"
                      className="contact-value-link"
                    >
                      info@mitracom.id
                    </a>
                  </div>
                </li>

                <li className="footer-contact-item">
                  <div className="contact-icon-bubble">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-text-wrap">
                    <span className="contact-label">Lokasi Kantor</span>
                    <span className="contact-value-link" style={{ cursor: "default" }}>
                      Indramayu, Jawa Barat - Indonesia
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar / Copyright */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copy-text">
              © Copyright 2010 - {currentYear} <strong>PT. MITRACOM SOLUSI TEKNOLOGI</strong>. All Rights Reserved.
            </p>
            <ul className="footer-bottom-links">
              <li>
                <Link to="/" className="footer-bottom-link">
                  Beranda
                </Link>
              </li>
              <li className="footer-link-divider">•</li>
              <li>
                <Link to="/about" className="footer-bottom-link">
                  Tentang Kami
                </Link>
              </li>
              <li className="footer-link-divider">•</li>
              <li>
                <Link to="/services" className="footer-bottom-link">
                  Layanan
                </Link>
              </li>
              <li className="footer-link-divider">•</li>
              <li>
                <Link to="/contact" className="footer-bottom-link">
                  Kontak
                </Link>
              </li>
              <li className="footer-link-divider">•</li>
              <li>
                <Link to="/privacy-policy" className="footer-bottom-link">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
