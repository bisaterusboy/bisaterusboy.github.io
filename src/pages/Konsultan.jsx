import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import konsultan1 from "../assets/img/konsultan1.jpeg";
import konsultan2 from "../assets/img/konsultan2.webp";

function Konsultan() {
  const whatsappUrl =
    "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20tertarik%20konsultasi%20mengenai%20Layanan%20IT%20Solution%20dan%20Konsultasi%20Sistem";

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
              <span className="current">IT Solution & Konsultasi</span>
            </div>
          </nav>

          <span className="service-detail-badge">
            <i className="bi bi-stars"></i>
            Konsultasi & Pengembangan
          </span>

          <div className="row align-items-center g-5 mt-1">
            <div className="col-lg-7">
              <h1 className="service-detail-title">
                Tingkatkan Produktivitas Bisnis Anda dengan <span className="text-primary">Layanan IT Solution & Konsultasi Mitracom</span>
              </h1>
              <p className="service-detail-lead">
                Di era digital yang bergerak cepat ini, koneksi internet yang stabil dan cepat adalah fondasi utama bagi setiap bisnis. Namun, seiring dengan pertumbuhan bisnis, kebutuhan akan infrastruktur IT yang andal dan terkelola dengan baik menjadi semakin krusial. Di Mitracom, kami memahami bahwa tantangan bisnis modern tidak hanya sebatas konektivitas, melainkan juga bagaimana mengoptimalkan seluruh ekosistem teknologi untuk mencapai efisiensi dan pertumbuhan maksimal.
              </p>
              <p className="text-secondary lh-lg mb-4">
                Karena itu, Mitracom hadir tidak hanya sebagai Internet Service Provider (ISP) andalan Anda, tetapi juga sebagai mitra IT Solution & Konsultasi yang terintegrasi. Kami melangkah lebih jauh dari sekadar menyediakan koneksi, kami menawarkan solusi menyeluruh yang dirancang untuk mendukung setiap aspek operasional bisnis Anda, dari skala kecil hingga korporasi besar.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-wa"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Konsultasi IT Gratis</span>
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
                    <i className="bi bi-lightbulb-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>IT Konsultasi</h5>
                    <small>Analisis Kebutuhan & Arsitektur</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-hdd-network-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Implementasi Solusi</h5>
                    <small>Jaringan, Cloud & Keamanan</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Managed Services</h5>
                    <small>Monitoring 24/7 & Support</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="service-detail-img-box">
                <img
                  src={konsultan1}
                  alt="IT Solution & Konsultasi Mitracom"
                  className="service-detail-img"
                />
                <div className="service-detail-img-caption">
                  <span>
                    <i className="bi bi-check-circle-fill text-success me-1"></i> Solusi IT Terintegrasi
                  </span>
                  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">
                    Mitracom IT Solution
                  </span>
                </div>
              </div>

              {/* Gambar Dokumentasi Kedua */}
              <div className="mt-3 rounded-4 overflow-hidden shadow-sm border border-light" style={{ height: "140px" }}>
                <img src={konsultan2} alt="Konsultasi IT Mitracom" className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Feature Cards Grid: Mengapa Memilih Layanan IT Solution & Konsultasi */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-stars"></i>
              Keunggulan Layanan
            </span>
            <h2 className="service-detail-title fs-2">Mengapa Memilih Layanan IT Solution & Konsultasi dari Mitracom?</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
              Kami memadukan konsultasi mendalam, implementasi terpercaya, dan managed services penuh untuk memastikan sistem teknologi bisnis Anda berjalan optimal.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: IT Konsultasi yang Mendalam */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)" }}>
                  <i className="bi bi-lightbulb-fill"></i>
                </div>
                <h3 className="feature-card-title">1. IT Konsultasi yang Mendalam</h3>
                <p className="feature-card-desc mb-3">
                  Setiap perjalanan teknologi yang sukses dimulai dengan strategi yang matang. Layanan konsultasi kami membantu Anda:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0 small">
                  <li className="mb-2">
                    <strong>Menganalisis Kebutuhan Bisnis:</strong> Kami akan berkolaborasi dengan tim Anda untuk memahami tantangan, tujuan, dan alur kerja bisnis secara menyeluruh.
                  </li>
                  <li className="mb-2">
                    <strong>Merancang Arsitektur IT:</strong> Kami akan merumuskan peta jalan teknologi yang optimal, termasuk pemilihan perangkat keras, perangkat lunak, dan topologi jaringan yang paling efisien.
                  </li>
                  <li className="mb-0">
                    <strong>Perencanaan Migrasi:</strong> Jika Anda berencana beralih ke sistem baru atau cloud, kami akan memastikan proses transisi berjalan mulus tanpa mengganggu operasional.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Implementasi Solusi yang Terpercaya */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" }}>
                  <i className="bi bi-hdd-network-fill"></i>
                </div>
                <h3 className="feature-card-title">2. Implementasi Solusi yang Terpercaya</h3>
                <p className="feature-card-desc mb-3">
                  Kami tidak hanya memberikan saran, tetapi juga mengimplementasikan solusi hingga tuntas. Layanan implementasi kami meliputi:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0 small">
                  <li className="mb-2">
                    <strong>Jaringan & Infrastruktur:</strong> Pemasangan jaringan LAN, WAN, Wi-Fi, hingga Data Center dengan standar terbaik. Kami memastikan koneksi internal Anda secepat dan seandal koneksi internet Mitracom.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud Computing:</strong> Membantu bisnis Anda beralih ke cloud (seperti Microsoft Azure, Google Cloud, atau AWS) untuk skalabilitas, fleksibilitas, dan penghematan biaya.
                  </li>
                  <li className="mb-0">
                    <strong>Keamanan Siber:</strong> Melindungi aset digital Anda dari ancaman siber dengan solusi firewall, VPN, dan sistem deteksi intrusi yang canggih.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Managed Services & Dukungan Penuh */}
            <div className="col-lg-4 col-md-12">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #059669 0%, #047857 100%)" }}>
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3 className="feature-card-title">3. Managed Services & Dukungan Penuh</h3>
                <p className="feature-card-desc mb-3">
                  Teknologi adalah aset, tetapi juga bisa menjadi beban jika tidak dikelola dengan baik. Dengan layanan Managed Services Mitracom, Anda bisa fokus pada bisnis inti:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0 small">
                  <li className="mb-2">
                    <strong>Monitoring Jaringan 24/7:</strong> Kami memantau performa jaringan Anda secara terus-menerus untuk mendeteksi dan mengatasi masalah sebelum berdampak pada operasional.
                  </li>
                  <li className="mb-2">
                    <strong>Dukungan Teknis Proaktif:</strong> Tim kami selalu siap sedia untuk memberikan bantuan teknis kapan pun dibutuhkan.
                  </li>
                  <li className="mb-0">
                    <strong>Perawatan & Pembaruan Sistem:</strong> Kami memastikan semua perangkat dan perangkat lunak Anda selalu dalam kondisi prima dan diperbarui.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paragraf Penutup Komitmen Kolaborasi */}
          <div className="mt-5 p-4 rounded-4 shadow-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderLeft: "5px solid var(--primary-color)" }}>
            <p className="text-secondary mb-0 lh-lg fs-6" style={{ textAlign: "justify" }}>
              Di Mitracom, kami percaya bahwa kolaborasi yang kuat adalah kunci kesuksesan. Biarkan kami menjadi perpanjangan tangan tim Anda dalam mengelola teknologi. Hubungi tim konsultan Mitracom hari ini dan mari kita diskusikan bagaimana solusi IT kami dapat membantu bisnis Anda bertumbuh, lebih efisien, dan lebih aman di era digital.
            </p>
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="service-cta-box">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3>Siap Mewujudkan Transformasi Digital Bisnis Anda?</h3>
              <p>
                Konsultasikan kebutuhan infrastruktur IT, jaringan kantor, sistem cloud, atau keamanan data Anda dengan tim konsultan Mitracom sekarang!
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
                  <span>Hubungi Konsultan via WA</span>
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
            <Link to="/maintenanceinternet" className="service-pill-btn">
              <i className="bi bi-diagram-3"></i> Maintenance Jaringan
            </Link>
            <Link to="/aplikasiweb" className="service-pill-btn">
              <i className="bi bi-laptop"></i> Web Development
            </Link>
            <Link to="/kamera" className="service-pill-btn">
              <i className="bi bi-camera-video"></i> CCTV & Security
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Konsultan;