import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import jaringan1 from "../assets/img/jaringan1.webp";
import jaringan2 from "../assets/img/jaringan2.jpg";
import jaringan3 from "../assets/img/jaringan3.jpg";

function Maintenanceinternet() {
  const whatsappUrl =
    "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20tertarik%20konsultasi%20mengenai%20Layanan%20Maintenance%20Jaringan%20LAN%20dan%20WiFi";

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
              <span className="current">Maintenance Jaringan</span>
            </div>
          </nav>

          <span className="service-detail-badge">
            <i className="bi bi-router-fill"></i>
            Infrastruktur Jaringan LAN & WiFi
          </span>

          <div className="row align-items-center g-5 mt-1">
            <div className="col-lg-7">
              <h1 className="service-detail-title">
                Layanan Maintenance <span className="text-primary">Jaringan Mitracom</span>
              </h1>
              <p className="service-detail-lead">
                Mitracom hadir untuk mengatasi semua masalah tersebut dengan layanan maintenance jaringan yang terencana dan terstruktur. Tim teknisi kami yang berpengalaman akan melakukan serangkaian pemeriksaan dan tindakan pencegahan untuk memastikan jaringan Anda beroperasi dengan performa terbaik.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-wa"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Jadwalkan Kunjungan Teknisi</span>
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
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Perawatan Preventif</h5>
                    <small>Hardware, Kabel & Firmware</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Monitoring 24/7</h5>
                    <small>Deteksi Anomali Real-Time</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-tools"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Troubleshooting</h5>
                    <small>Respons Perbaikan Cepat</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="service-detail-img-box">
                <img
                  src={jaringan1}
                  alt="Maintenance Jaringan Mitracom"
                  className="service-detail-img"
                />
                <div className="service-detail-img-caption">
                  <span>
                    <i className="bi bi-check-circle-fill text-success me-1"></i> Perawatan Kabel & Server Rack
                  </span>
                  <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
                    LAN / WiFi Ready
                  </span>
                </div>
              </div>

              {/* Mini Gallery Preview */}
              <div className="row g-2 mt-2">
                <div className="col-6">
                  <div className="rounded-3 overflow-hidden shadow-sm border" style={{ borderColor: "var(--border-color)", height: "120px" }}>
                    <img src={jaringan2} alt="Dokumentasi Jaringan" className="w-100 h-100 object-fit-cover" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="rounded-3 overflow-hidden shadow-sm border" style={{ borderColor: "var(--border-color)", height: "120px" }}>
                    <img src={jaringan3} alt="Dokumentasi Router" className="w-100 h-100 object-fit-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Cards Grid: Layanan Maintenance yang Ditawarkan */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-router"></i>
              Paket Perawatan Kami
            </span>
            <h2 className="service-detail-title fs-2">Layanan Maintenance yang Kami Tawarkan</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
              Serangkaian pemeriksaan dan tindakan pencegahan berkala untuk memastikan jaringan Anda beroperasi tanpa hambatan.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: Perawatan Preventif */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #059669 0%, #047857 100%)" }}>
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3 className="feature-card-title">1. Perawatan Preventif</h3>
                <p className="feature-card-desc mb-3">
                  Layanan ini dirancang untuk mencegah masalah sebelum terjadi. Tim kami akan melakukan:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0 small">
                  <li className="mb-2">
                    <strong>Pembersihan perangkat keras:</strong> Membersihkan debu dan kotoran pada router, switch, dan perangkat lain untuk mencegah overheat.
                  </li>
                  <li className="mb-2">
                    <strong>Pemeriksaan kabel dan konektor:</strong> Memastikan semua kabel terpasang dengan baik dan tidak ada yang rusak.
                  </li>
                  <li className="mb-2">
                    <strong>Pembaruan firmware:</strong> Menginstal versi firmware terbaru untuk meningkatkan performa dan keamanan perangkat.
                  </li>
                  <li className="mb-0">
                    <strong>Optimalisasi konfigurasi:</strong> Menyesuaikan pengaturan jaringan untuk meningkatkan efisiensi dan kecepatan.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Monitoring Jaringan 24/7 */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" }}>
                  <i className="bi bi-activity"></i>
                </div>
                <h3 className="feature-card-title">2. Monitoring Jaringan 24/7</h3>
                <p className="feature-card-desc">
                  Kami menggunakan sistem monitoring canggih untuk memantau kondisi jaringan Anda secara real-time. Jika ada anomali atau tanda-tanda masalah, tim kami akan segera mengambil tindakan. Dengan layanan ini, kami bisa mendeteksi dan menyelesaikan masalah, bahkan sebelum Anda menyadarinya.
                </p>
              </div>
            </div>

            {/* Card 3: Perbaikan dan Troubleshooting */}
            <div className="col-lg-4 col-md-12">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)" }}>
                  <i className="bi bi-tools"></i>
                </div>
                <h3 className="feature-card-title">3. Perbaikan & Troubleshooting</h3>
                <p className="feature-card-desc">
                  Jika terjadi masalah pada jaringan, tim Mitracom siap memberikan respons cepat. Kami menyediakan layanan perbaikan yang efisien untuk mengatasi berbagai gangguan, mulai dari koneksi yang terputus, konfigurasi yang salah, hingga kegagalan perangkat keras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mengapa Memilih Layanan Maintenance Jaringan Mitracom */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-rocket-takeoff-fill"></i>
              Keunggulan Layanan
            </span>
            <h2 className="service-detail-title fs-2">Mengapa Memilih Layanan Maintenance Jaringan Mitracom?</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-card-modern p-4">
                <div className="process-step-number mb-3">
                  <i className="bi bi-patch-check-fill"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Tim Ahli Bersertifikasi</h4>
                <p className="feature-card-desc">
                  Teknisi kami memiliki pengetahuan dan pengalaman luas dalam menangani berbagai topologi dan masalah jaringan.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card-modern p-4">
                <div className="process-step-number mb-3">
                  <i className="bi bi-sliders"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Layanan Fleksibel</h4>
                <p className="feature-card-desc">
                  Kami menawarkan paket maintenance yang dapat disesuaikan dengan kebutuhan dan anggaran Anda.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card-modern p-4">
                <div className="process-step-number mb-3">
                  <i className="bi bi-stopwatch"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Respons Cepat</h4>
                <p className="feature-card-desc">
                  Kami memahami betapa berharganya waktu Anda. Kami menjamin respons dan penanganan masalah yang cepat.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card-modern p-4">
                <div className="process-step-number mb-3">
                  <i className="bi bi-cash-stack"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Hemat Biaya</h4>
                <p className="feature-card-desc">
                  Dengan maintenance rutin, Anda bisa menghindari biaya perbaikan yang mahal atau penggantian perangkat yang tidak terduga.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraf Penutup */}
          <div className="mt-5 p-4 rounded-4 shadow-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderLeft: "5px solid var(--primary-color)" }}>
            <p className="text-secondary mb-0 lh-lg fs-6" style={{ textAlign: "justify" }}>
              Jangan biarkan masalah jaringan mengganggu aktivitas digital Anda. Percayakan perawatan jaringan Anda kepada Mitracom dan nikmati koneksi internet yang stabil, cepat, dan aman setiap saat.
              <br /><br />
              Untuk informasi lebih lanjut tentang paket layanan maintenance jaringan Mitracom, silakan hubungi tim sales kami.
            </p>
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="service-cta-box">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3>Jaringan Kantor Anda Sering Lemot atau Putus-Putus?</h3>
              <p>
                Jangan biarkan koneksi yang tidak stabil merugikan aktivitas operasional perusahaan Anda. Hubungi tim teknisi jaringan Mitracom untuk audit dan solusi perbaikan sekarang juga!
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
                  <span>Konsultasi Jaringan via WA</span>
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
            <Link to="/business" className="service-pill-btn">
              <i className="bi bi-wifi"></i> Layanan Internet
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

export default Maintenanceinternet;