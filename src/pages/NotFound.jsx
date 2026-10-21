import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/notfound.css";

function NotFound() {
  const quickLinks = [
    { title: "Paket Internet", path: "/services", icon: "bi bi-wifi" },
    { title: "Tentang Kami", path: "/about", icon: "bi bi-building" },
    { title: "Daftar Harga", path: "/pricelist", icon: "bi bi-tag" },
    { title: "Kontak & Lokasi", path: "/contact", icon: "bi bi-geo-alt" }
  ];

  return (
    <div className="notfound-wrapper">
      {/* Background ambient lighting */}
      <div className="notfound-ambient" aria-hidden="true" />

      {/* Main 404 Glass Card */}
      <div className="notfound-card">
        {/* Disconnect Network Floating Icon */}
        <div className="notfound-icon-wrap">
          <div className="notfound-icon-circle">
            <i className="bi bi-wifi-off"></i>
          </div>
        </div>

        {/* 404 Number with Centered Gradient */}
        <div className="notfound-code-wrap">
          <div className="notfound-code">404</div>
        </div>

        {/* Network Status Pill Container */}
        <div className="notfound-badge-wrap">
          <div className="notfound-badge">
            <span className="notfound-pulse-dot" />
            <span>Status 404 • Halaman Tidak Ditemukan</span>
          </div>
        </div>

        {/* Title & Explanation */}
        <h1 className="notfound-title">Ups! Halaman Yang Dituju Hilang</h1>
        <p className="notfound-desc">
          Mohon maaf, halaman yang Anda cari mungkin telah dipindahkan, tautan sudah kadaluarsa, atau alamat URL yang dimasukkan kurang tepat.
        </p>

        {/* Primary Action Buttons */}
        <div className="notfound-actions">
          <Link to="/" className="nf-btn nf-btn-primary">
            <i className="bi bi-house-door-fill"></i>
            <span>Kembali ke Beranda</span>
          </Link>

          <button 
            type="button" 
            className="nf-btn nf-btn-secondary" 
            onClick={() => window.history.back()}
          >
            <i className="bi bi-arrow-left"></i>
            <span>Halaman Sebelumnya</span>
          </button>

          <a 
            href="https://wa.me/6287727999117?text=Halo%20Mitracom,%20saya%20mengalami%20kendala%20halaman%20tidak%20ditemukan%20di%20website" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nf-btn nf-btn-support"
          >
            <i className="bi bi-whatsapp"></i>
            <span>Bantuan CS</span>
          </a>
        </div>

        {/* Quick Suggestions / Popular Pages */}
        <div className="notfound-suggestions">
          <div className="notfound-sug-title">
            <i className="bi bi-compass me-1 text-primary"></i> Mungkin Anda Mencari:
          </div>
          <div className="notfound-links-grid">
            {quickLinks.map((item, idx) => (
              <Link key={idx} to={item.path} className="nf-link-chip">
                <i className={item.icon}></i>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
