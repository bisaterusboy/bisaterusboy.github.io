import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import servicepc1 from "../assets/img/servicepc1.png";

function Hardwaresoftware() {
  const whatsappUrl =
    "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20ingin%20konsultasi%20atau%20servis%20Komputer%20dan%20Laptop";

  return (
    <div className="service-detail-page">
      <div className="service-detail-ambient" aria-hidden="true" />

      <div className="container">
        {/* Header & Hero Section */}
        <header className="service-detail-header">
          <nav aria-label="breadcrumb">
            <div className="service-detail-breadcrumb">
              <Link to="/">Beranda</Link>
              <i className="bi bi-chevron-right text-muted" style={{ fontSize: "0.75rem" }}></i>
              <Link to="/services">Layanan & Produk</Link>
              <i className="bi bi-chevron-right text-muted" style={{ fontSize: "0.75rem" }}></i>
              <span className="current">Service Komputer & Laptop</span>
            </div>
          </nav>

          <span className="service-detail-badge">
            <i className="bi bi-tools"></i>
            Hardware & Software Repair
          </span>

          <div className="row align-items-center g-5 mt-1">
            <div className="col-lg-7">
              <h1 className="service-detail-title">
                Jasa Service Komputer & Laptop: <span className="text-primary">Hardware & Software</span>
              </h1>
              <p className="service-detail-lead">
                Komputer dan laptop adalah alat vital dalam kehidupan sehari-hari, baik untuk pekerjaan, pendidikan, maupun hiburan. Ketika perangkat Anda mengalami masalah, produktivitas bisa terhenti total. Kami hadir untuk memberikan solusi cepat dan terpercaya dengan layanan Service Komputer & Laptop yang komprehensif, mencakup masalah hardware dan software.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-wa"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Konsultasi Kerusakan via WA</span>
                </a>
                <Link to="/services" className="service-pill-btn">
                  <i className="bi bi-grid-fill"></i>
                  <span>Lihat Semua Layanan</span>
                </Link>
              </div>

              {/* Quick Stats Bar */}
              <div className="service-quick-stats">
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-gear-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Layanan Hardware</h5>
                    <small>Komponen, Layar, Baterai, Pembersihan</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-floppy"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Layanan Software</h5>
                    <small>Instalasi OS, Virus, Data Recovery</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-patch-check"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Garansi Servis</h5>
                    <small>Teknisi Profesional & Terpercaya</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="service-detail-img-box">
                <img
                  src={servicepc1}
                  alt="Service Komputer & Laptop Mitracom"
                  className="service-detail-img"
                />
                <div className="service-detail-img-caption">
                  <span>
                    <i className="bi bi-check-circle-fill text-success me-1"></i> Teknisi Handal & Terverifikasi
                  </span>
                  <span className="badge bg-warning bg-opacity-10 text-dark border border-warning border-opacity-25">
                    Hardware & Software Center
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Cards Grid: Layanan Hardware & Software */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-wrench-adjustable-circle"></i>
              Cakupan Layanan Kami
            </span>
            <h2 className="service-detail-title fs-2">Solusi Perbaikan Terpadu Komputer & Laptop</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
              Kami menangani seluruh kendala perangkat keras dan lunak dengan peralatan diagnostik canggih serta garansi servis terjamin.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: Layanan Hardware */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)" }}>
                  <i className="bi bi-gear-fill"></i>
                </div>
                <h3 className="feature-card-title">Layanan Hardware (Perangkat Keras)</h3>
                <p className="feature-card-desc mb-3">
                  Masalah hardware bisa sangat mengganggu, mulai dari perangkat yang tidak menyala hingga komponen yang rusak. Kami memiliki teknisi berpengalaman yang siap menangani berbagai perbaikan hardware, antara lain:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0">
                  <li className="mb-2">
                    <strong>Perbaikan dan Penggantian Komponen:</strong> Kami memperbaiki atau mengganti komponen yang rusak, seperti motherboard, RAM, kartu grafis, dan prosesor.
                  </li>
                  <li className="mb-2">
                    <strong>Perbaikan Layar Laptop:</strong> Solusi untuk layar pecah, bergaris, atau tidak menampilkan gambar.
                  </li>
                  <li className="mb-2">
                    <strong>Penggantian Baterai & Keyboard:</strong> Mengembalikan performa laptop Anda dengan baterai baru atau keyboard yang responsif.
                  </li>
                  <li className="mb-0">
                    <strong>Pembersihan & Perawatan:</strong> Kami membersihkan debu dan kotoran dari dalam perangkat untuk mencegah overheating dan meningkatkan performa.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Layanan Software */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" }}>
                  <i className="bi bi-floppy"></i>
                </div>
                <h3 className="feature-card-title">Layanan Software (Perangkat Lunak)</h3>
                <p className="feature-card-desc mb-3">
                  Masalah software seringkali tidak terlihat, tetapi dapat membuat komputer Anda lemot, tidak stabil, atau bahkan tidak bisa digunakan. Layanan kami mencakup:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0">
                  <li className="mb-2">
                    <strong>Instalasi & Pembaruan Sistem Operasi:</strong> Kami membantu Anda menginstal atau memperbarui sistem operasi (Windows, macOS, Linux) agar berjalan lancar.
                  </li>
                  <li className="mb-2">
                    <strong>Pembersihan Virus & Malware:</strong> Kami menghapus virus, malware, dan perangkat lunak berbahaya lainnya yang dapat merusak data atau memperlambat kinerja.
                  </li>
                  <li className="mb-2">
                    <strong>Optimalisasi Performa:</strong> Kami melakukan pengaturan dan pembersihan yang diperlukan untuk meningkatkan kecepatan dan responsivitas komputer Anda.
                  </li>
                  <li className="mb-0">
                    <strong>Pemulihan Data:</strong> Jika data penting Anda hilang akibat kerusakan software atau terhapus tidak sengaja, kami akan berusaha memulihkannya.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mengapa Memilih Layanan Kami */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-check2-circle"></i>
              Keunggulan Servis
            </span>
            <h2 className="service-detail-title fs-2">Mengapa Memilih Layanan Kami?</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card-modern p-4 text-center">
                <div className="process-step-number mx-auto mb-3">
                  <i className="bi bi-person-check-fill"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Profesional & Terpercaya</h4>
                <p className="feature-card-desc">
                  Tim kami terdiri dari teknisi yang ahli dan berpengalaman dalam menangani berbagai merek dan model komputer/laptop.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card-modern p-4 text-center">
                <div className="process-step-number mx-auto mb-3">
                  <i className="bi bi-puzzle-fill"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Layanan Komprehensif</h4>
                <p className="feature-card-desc">
                  Kami menyediakan solusi terintegrasi, mengatasi masalah hardware dan software dalam satu tempat.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card-modern p-4 text-center">
                <div className="process-step-number mx-auto mb-3">
                  <i className="bi bi-patch-check-fill"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Garansi Perbaikan</h4>
                <p className="feature-card-desc">
                  Kami memberikan garansi untuk setiap perbaikan yang kami lakukan, memberikan Anda ketenangan pikiran.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraf Penutup */}
          <div className="mt-5 p-4 rounded-4 shadow-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderLeft: "5px solid var(--primary-color)" }}>
            <p className="text-secondary mb-0 lh-lg fs-6" style={{ textAlign: "justify" }}>
              Jangan biarkan masalah teknis menghambat produktivitas Anda. Hubungi kami sekarang untuk konsultasi dan dapatkan solusi terbaik untuk komputer atau laptop Anda.
            </p>
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="service-cta-box">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3>Perangkat Komputer atau Laptop Anda Bermasalah?</h3>
              <p>
                Bawa perangkat Anda ke workshop Mitracom atau hubungi kami untuk konsultasi perbaikan. Dapatkan estimasi biaya transparan dan garansi resmi!
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex flex-wrap gap-3 justify-content-lg-end justify-content-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-wa"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Hubungi Teknisi via WA</span>
                </a>
                <Link to="/contact" className="btn-cta-back">
                  <i className="bi bi-geo-alt"></i>
                  <span>Alamat Bengkel Kami</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Links */}
        <div className="service-related-section">
          <h4 className="fw-bold mb-3 fs-5">Layanan Terkait Lainnya:</h4>
          <div className="d-flex flex-wrap gap-2">
            <Link to="/maintenanceinternet" className="service-pill-btn">
              <i className="bi bi-diagram-3"></i> Maintenance Jaringan
            </Link>
            <Link to="/kamera" className="service-pill-btn">
              <i className="bi bi-camera-video"></i> CCTV & Security
            </Link>
            <Link to="/business" className="service-pill-btn">
              <i className="bi bi-wifi"></i> Layanan Internet
            </Link>
            <Link to="/konsultan" className="service-pill-btn">
              <i className="bi bi-lightbulb"></i> IT Solution & Konsultasi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hardwaresoftware;