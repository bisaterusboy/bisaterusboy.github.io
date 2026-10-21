import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import marketing1 from "../assets/img/marketing1.png";

function Marketing() {
  const whatsappUrl =
    "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20tertarik%20berkonsultasi%20mengenai%20Jasa%20Digital%20Marketing%20dan%20Promosi%20Online";

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
              <span className="current">Marketing</span>
            </div>
          </nav>

          <span className="service-detail-badge">
            <i className="bi bi-bar-chart-line-fill"></i>
            Promosi Online & Pemasaran Digital
          </span>

          <div className="row align-items-center g-5 mt-1">
            <div className="col-lg-7">
              <h1 className="service-detail-title">
                Jasa Pemasaran Digital <span className="text-primary">Profesional</span>
              </h1>
              <p className="service-detail-lead">
                Di era digital, promosi tidak lagi terbatas pada media cetak atau televisi. Agar bisnis Anda bisa menjangkau audiens yang lebih luas dan relevan, Anda memerlukan strategi pemasaran digital yang terintegrasi dan efektif. Pemasaran digital adalah serangkaian upaya untuk mempromosikan produk atau layanan menggunakan media digital, yang memungkinkan Anda terhubung langsung dengan calon pelanggan di mana pun mereka berada.
              </p>
              <p className="text-secondary lh-lg mb-4">
                Kami hadir sebagai mitra Anda untuk memaksimalkan potensi pemasaran digital. Layanan kami dirancang untuk membantu Anda meningkatkan visibilitas, membangun merek, dan mendorong pertumbuhan bisnis.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-wa"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Konsultasi Strategi Promosi</span>
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
                    <i className="bi bi-megaphone-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Social Media Ads</h5>
                    <small>Meta, TikTok & LinkedIn</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-file-text-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Content Marketing</h5>
                    <small>Artikel Blog & Visual</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Email Marketing</h5>
                    <small>Retensi & Hubungan Pelanggan</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="service-detail-img-box">
                <img
                  src={marketing1}
                  alt="Digital Marketing Mitracom"
                  className="service-detail-img"
                />
                <div className="service-detail-img-caption">
                  <span>
                    <i className="bi bi-lightning-charge text-warning me-1"></i> Pertumbuhan Bisnis Berkelanjutan
                  </span>
                  <span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25">
                    Digital Marketing Pro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Cards Grid: Strategi Pemasaran Digital Kami */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-pie-chart-fill"></i>
              Layanan Utama
            </span>
            <h2 className="service-detail-title fs-2">Strategi Pemasaran Digital Terintegrasi</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
              Kami membantu bisnis Anda terhubung langsung dengan audiens tertarget melalui saluran digital yang paling efektif.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: Social Media Marketing */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" }}>
                  <i className="bi bi-megaphone-fill"></i>
                </div>
                <h3 className="feature-card-title">1. Pemasaran Media Sosial</h3>
                <p className="feature-card-desc mb-3">
                  Jutaan orang menghabiskan waktu di media sosial setiap hari. Kami akan membantu Anda memanfaatkan platform ini untuk terhubung dengan pelanggan dan membangun komunitas:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0 small">
                  <li className="mb-2">
                    <strong>Manajemen Akun:</strong> Kami akan mengelola akun media sosial Anda, mulai dari pembuatan konten yang menarik, penjadwalan postingan, hingga interaksi dengan pengikut.
                  </li>
                  <li className="mb-0">
                    <strong>Iklan Berbayar:</strong> Kami akan merancang dan menjalankan kampanye iklan yang menargetkan demografi, minat, dan perilaku spesifik audiens Anda di platform seperti Facebook, Instagram, TikTok, dan LinkedIn.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Content Marketing */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)" }}>
                  <i className="bi bi-file-earmark-text-fill"></i>
                </div>
                <h3 className="feature-card-title">2. Pemasaran Konten (Content)</h3>
                <p className="feature-card-desc mb-3">
                  Konten adalah raja dalam pemasaran digital. Kami akan membantu Anda membuat dan mendistribusikan konten yang bernilai untuk menarik, mendidik, dan mempertahankan audiens:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0 small">
                  <li className="mb-2">
                    <strong>Penulisan Artikel & Blog:</strong> Kami membuat artikel blog yang informatif dan relevan untuk menjawab pertanyaan audiens Anda.
                  </li>
                  <li className="mb-0">
                    <strong>Materi Visual:</strong> Kami mengembangkan infografis, video pendek, dan visual menarik lainnya yang mudah dibagikan.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Email Marketing */}
            <div className="col-lg-4 col-md-12">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" }}>
                  <i className="bi bi-envelope-check-fill"></i>
                </div>
                <h3 className="feature-card-title">3. Email Marketing</h3>
                <p className="feature-card-desc mb-3">
                  Email marketing tetap menjadi salah satu alat pemasaran paling efektif untuk membangun hubungan jangka panjang dengan pelanggan. Kami akan membantu Anda:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0 small">
                  <li className="mb-2">
                    <strong>Membangun Daftar Email:</strong> Membangun daftar kontak email yang berkualitas dan tertarget.
                  </li>
                  <li className="mb-2">
                    <strong>Kampanye Personal:</strong> Membuat kampanye email yang personal, menarik, dan relevan.
                  </li>
                  <li className="mb-0">
                    <strong>Analisis Performa:</strong> Menganalisis performa kampanye untuk mendapatkan hasil konversi terbaik.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paragraf Penutup */}
          <div className="mt-5 p-4 rounded-4 shadow-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderLeft: "5px solid var(--primary-color)" }}>
            <p className="text-secondary mb-0 lh-lg fs-6" style={{ textAlign: "justify" }}>
              Dengan layanan pemasaran digital kami, Anda tidak hanya berpromosi, tetapi juga berinvestasi pada pertumbuhan bisnis yang berkelanjutan. Hubungi kami sekarang untuk mendapatkan konsultasi gratis dan rancang strategi digital yang tepat untuk Anda.
            </p>
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="service-cta-box">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3>Siap Melipatgandakan Omzet Bisnis Anda di Ranah Digital?</h3>
              <p>
                Diskusikan target penjualan dan anggaran iklan Anda dengan spesialis digital marketing Mitracom. Dapatkan sesi konsultasi awal gratis untuk membedah potensi bisnis Anda!
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
                  <span>Chat Tim Marketing via WA</span>
                </a>
                <Link to="/contact" className="btn-cta-back">
                  <i className="bi bi-envelope"></i>
                  <span>Kontak Kami</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Links */}
        <div className="service-related-section">
          <h4 className="fw-bold mb-3 fs-5">Layanan Terkait Lainnya:</h4>
          <div className="d-flex flex-wrap gap-2">
            <Link to="/webdesign" className="service-pill-btn">
              <i className="bi bi-palette"></i> Web Design
            </Link>
            <Link to="/aplikasiweb" className="service-pill-btn">
              <i className="bi bi-laptop"></i> Web Development
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

export default Marketing;