import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import internet1 from "../assets/img/internet1.png";

function Webdesign() {
  const whatsappUrl =
    "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20ingin%20konsultasi%20mengenai%20Jasa%20Web%20Design%20Modern";

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
              <span className="current">Web Design</span>
            </div>
          </nav>

          <span className="service-detail-badge">
            <i className="bi bi-palette-fill"></i>
            Desain Modern & UI/UX Kreatif
          </span>

          <div className="row align-items-center g-5 mt-1">
            <div className="col-lg-7">
              <h1 className="service-detail-title">
                Jasa Web Design <span className="text-primary">Profesional</span>
              </h1>
              <p className="service-detail-lead">
                Di era digital yang kompetitif ini, sebuah website bukan lagi sekadar informasi, melainkan aset digital terpenting Anda. Desain website yang menarik, profesional, dan mudah digunakan adalah kunci untuk membangun kepercayaan, meningkatkan kredibilitas, dan mendorong pertumbuhan bisnis.
              </p>
              <p className="text-secondary lh-lg mb-4">
                Kami hadir untuk membantu Anda mewujudkan visi digital Anda dengan layanan Web Design Profesional yang berfokus pada desain fungsional, estetika modern, dan performa tinggi.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-wa"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Konsultasi Desain Gratis</span>
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
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>User-Centric</h5>
                    <small>Desain Berorientasi Pengguna</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Mobile-First</h5>
                    <small>Responsif di Segala Layar</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-search"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>SEO-Friendly</h5>
                    <small>Cepat & Optimal di Google</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="service-detail-img-box">
                <img
                  src={internet1}
                  alt="Web Design Mitracom"
                  className="service-detail-img"
                />
                <div className="service-detail-img-caption">
                  <span>
                    <i className="bi bi-shield-check text-success me-1"></i> Desain Standar Korporasi
                  </span>
                  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">
                    Mitracom Design Studio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Cards Grid: 4 Fokus Layanan Web Design Kami */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-gem"></i>
              Fokus Utama Kami
            </span>
            <h2 className="service-detail-title fs-2">Layanan Web Design Profesional Kami Berfokus Pada:</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
              Kombinasi riset mendalam, estetika visual kuat, dan arsitektur teknis yang dirancang untuk memberikan hasil nyata.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: User-Centric Design */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)" }}>
                  <i className="bi bi-palette-fill"></i>
                </div>
                <h3 className="feature-card-title">1. Desain Berorientasi Pengguna (User-Centric Design)</h3>
                <p className="feature-card-desc" style={{ textAlign: "justify" }}>
                  Kami tidak hanya membuat website yang indah, tetapi juga yang efektif. Setiap desain kami diawali dengan riset mendalam untuk memahami audiens Anda, memastikan setiap elemen dan alur navigasi dirancang untuk memberikan pengalaman terbaik bagi pengguna. Hasilnya adalah website yang intuitif, mudah diakses, dan secara alami mengarahkan pengunjung untuk mengambil tindakan yang Anda inginkan, seperti melakukan pembelian atau menghubungi Anda.
                </p>
              </div>
            </div>

            {/* Card 2: Mobile-First Responsif */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)" }}>
                  <i className="bi bi-phone-fill"></i>
                </div>
                <h3 className="feature-card-title">2. Desain Responsif (Mobile-First)</h3>
                <p className="feature-card-desc" style={{ textAlign: "justify" }}>
                  Dengan lebih dari separuh trafik internet berasal dari perangkat seluler, memiliki website yang responsif adalah suatu keharusan. Layanan kami menjamin website Anda akan tampil sempurna dan berfungsi optimal di berbagai ukuran layar, mulai dari desktop, tablet, hingga smartphone. Kami memastikan pengalaman pengguna tidak terganggu, terlepas dari perangkat yang mereka gunakan.
                </p>
              </div>
            </div>

            {/* Card 3: Brand Identity */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)" }}>
                  <i className="bi bi-award-fill"></i>
                </div>
                <h3 className="feature-card-title">3. Peningkatan Identitas Merek (Brand Identity)</h3>
                <p className="feature-card-desc" style={{ textAlign: "justify" }}>
                  Website adalah cerminan dari merek Anda. Tim desainer kami akan bekerja sama dengan Anda untuk menerjemahkan identitas merek Anda—mulai dari logo, palet warna, hingga tipografi—menjadi sebuah desain visual yang konsisten dan kuat. Desain ini akan membantu Anda menonjol dari pesaing dan meninggalkan kesan mendalam di benak audiens.
                </p>
              </div>
            </div>

            {/* Card 4: SEO-Friendly */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #059669 0%, #10b981 100%)" }}>
                  <i className="bi bi-speedometer2"></i>
                </div>
                <h3 className="feature-card-title">4. Optimalisasi untuk Mesin Pencari (SEO-Friendly)</h3>
                <p className="feature-card-desc" style={{ textAlign: "justify" }}>
                  Kami merancang website dengan struktur dan elemen yang disukai oleh mesin pencari seperti Google. Desain yang bersih, waktu muat yang cepat, dan navigasi yang logis adalah beberapa faktor yang kami optimalkan untuk memastikan website Anda memiliki performa SEO yang solid. Dengan demikian, website Anda memiliki peluang lebih besar untuk muncul di peringkat teratas hasil pencarian.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mengapa Memilih Layanan Kami ? */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-4">
            <span className="service-detail-badge">
              <i className="bi bi-globe"></i>
              Keunggulan Layanan
            </span>
            <h2 className="service-detail-title fs-2">Mengapa Memilih Layanan Kami ?</h2>
          </div>

          <div className="p-4 p-md-5 rounded-4 shadow-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderLeft: "5px solid var(--primary-color)" }}>
            <p className="text-secondary mb-0 lh-lg fs-6" style={{ textAlign: "justify" }}>
              Kami menggabungkan kreativitas, keahlian teknis, dan pemahaman mendalam tentang bisnis untuk menciptakan solusi web design yang benar-benar memberikan hasil. Dari konsep awal hingga peluncuran, kami adalah mitra Anda dalam setiap langkah. Hubungi kami hari ini untuk konsultasi gratis dan mari ciptakan website impian Anda.
            </p>
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="service-cta-box">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3>Wujudkan Website Impian Bisnis Anda Sekarang</h3>
              <p>
                Konsultasikan ide dan kebutuhan desain website Anda bersama tim desainer profesional Mitracom. Dapatkan penawaran terbaik dan estimasi waktu yang transparan!
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
                  <span>Chat WhatsApp</span>
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
            <Link to="/aplikasiweb" className="service-pill-btn">
              <i className="bi bi-laptop"></i> Web Development
            </Link>
            <Link to="/marketing" className="service-pill-btn">
              <i className="bi bi-megaphone"></i> Digital Marketing
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

export default Webdesign;