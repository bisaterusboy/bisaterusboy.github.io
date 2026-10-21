import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import bisnis1 from "../assets/img/bisnis1.png";

function Business() {
  const whatsappUrl =
    "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20tertarik%20untuk%20berlangganan%20Layanan%20Internet%20Home%20atau%20Business";

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
              <span className="current">Layanan Internet</span>
            </div>
          </nav>

          <span className="service-detail-badge">
            <i className="bi bi-globe"></i>
            Internet Service Provider (ISP)
          </span>

          <div className="row align-items-center g-5 mt-1">
            <div className="col-lg-7">
              <h1 className="service-detail-title">
                Layanan Internet <span className="text-primary">Home & Business</span>
              </h1>
              <p className="service-detail-lead">
                Mitracom adalah penyedia layanan internet yang berdedikasi untuk menghadirkan koneksi cepat, stabil, dan aman bagi masyarakat dan pelaku usaha di wilayah Kabupaten Indramayu. Kami memahami bahwa kebutuhan akan akses digital yang andal semakin penting dalam kehidupan sehari-hari, baik untuk keperluan pribadi maupun profesional.
              </p>
              <p className="text-secondary lh-lg mb-4">
                Kami menawarkan solusi internet yang dirancang khusus untuk rumah tangga dan bisnis, dengan berbagai pilihan paket yang fleksibel dan dapat disesuaikan dengan kebutuhan pengguna. Didukung oleh tim teknis yang ramah, responsif, dan profesional, Mitracom memastikan setiap pelanggan mendapatkan pengalaman layanan yang optimal—mulai dari proses instalasi hingga dukungan teknis berkelanjutan.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-wa"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Pasang Internet Sekarang</span>
                </a>
                <Link to="/pricelist" className="service-pill-btn">
                  <i className="bi bi-tag-fill"></i>
                  <span>Lihat Daftar Harga Paket</span>
                </Link>
              </div>

              {/* Quick Stats Bar */}
              <div className="service-quick-stats">
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-house-door-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Internet Rumah</h5>
                    <small>Hingga 100 Mbps Unlimited</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-building-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Internet Bisnis</h5>
                    <small>Dedicated IP & SLA 99.9%</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Dukungan 24/7</h5>
                    <small>Teknisi Lokal Responsif</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="service-detail-img-box">
                <img
                  src={bisnis1}
                  alt="Layanan Internet Mitracom"
                  className="service-detail-img"
                />
                <div className="service-detail-img-caption">
                  <span>
                    <i className="bi bi-geo-alt text-primary me-1"></i> Coverage Area Indramayu & Sekitarnya
                  </span>
                  <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
                    Fiber Optic ISP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Cards Grid: Internet Rumah & Internet Bisnis */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-wifi"></i>
              Paket Layanan Kami
            </span>
            <h2 className="service-detail-title fs-2">Solusi Internet Rumah & Bisnis</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
              Pilihan paket fleksibel yang dirancang khusus untuk memenuhi kebutuhan konektivitas Anda.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: Layanan Internet Rumah */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #0284c7 0%, #007bff 100%)" }}>
                  <i className="bi bi-house-fill"></i>
                </div>
                <h3 className="feature-card-title">Layanan Internet Rumah</h3>
                <p className="feature-card-desc mb-3">
                  Nikmati kenyamanan berinternet di rumah dengan kecepatan tinggi dan koneksi stabil, cocok untuk seluruh anggota keluarga.
                </p>
                <div className="mb-2">
                  <strong className="text-primary d-block mb-2">Fitur Utama:</strong>
                  <ul className="text-secondary ps-3 lh-lg mb-0">
                    <li className="mb-1">Kecepatan hingga 100 Mbps</li>
                    <li className="mb-1">Kuota unlimited</li>
                    <li className="mb-1">Instalasi cepat & gratis</li>
                    <li className="mb-0">Dukungan teknis 24/7</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Layanan Internet Bisnis */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #059669 0%, #047857 100%)" }}>
                  <i className="bi bi-hospital"></i>
                </div>
                <h3 className="feature-card-title">Layanan Internet Bisnis</h3>
                <p className="feature-card-desc mb-3">
                  Dukung operasional bisnis Anda dengan koneksi internet yang tangguh dan dapat disesuaikan dengan kebutuhan perusahaan.
                </p>
                <div className="mb-2">
                  <strong className="text-primary d-block mb-2">Fitur Utama:</strong>
                  <ul className="text-secondary ps-3 lh-lg mb-0">
                    <li className="mb-1">Dedicated bandwidth</li>
                    <li className="mb-1">IP publik statis</li>
                    <li className="mb-1">SLA 99.9% uptime</li>
                    <li className="mb-0">Monitoring & dukungan prioritas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Paragraf Komitmen Pelayanan */}
          <div className="mt-5 p-4 rounded-4 shadow-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderLeft: "5px solid var(--primary-color)" }}>
            <p className="text-secondary mb-0 lh-lg fs-6" style={{ textAlign: "justify" }}>
              Didukung oleh tim teknis yang ramah, responsif, dan profesional, Mitracom memastikan setiap pelanggan mendapatkan pengalaman layanan yang optimal—mulai dari proses instalasi hingga dukungan teknis berkelanjutan.
            </p>
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="service-cta-box">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3>Ingin Cek Jangkauan Area atau Pasang Internet?</h3>
              <p>
                Hubungi tim sales Mitracom sekarang untuk pengecekan lokasi secara cepat dan gratis. Dapatkan promo instalasi menarik bulan ini!
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
                  <span>Chat Sales via WhatsApp</span>
                </a>
                <Link to="/pricelist" className="btn-cta-back">
                  <i className="bi bi-card-checklist"></i>
                  <span>Cek Paket Internet</span>
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
            <Link to="/hardwaresoftware" className="service-pill-btn">
              <i className="bi bi-pc-display"></i> Service Komputer
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

export default Business;
