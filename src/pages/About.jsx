import React from "react";
import { Link } from "react-router-dom";
import header from "../assets/img/tentang-kami.png";
import "../assets/css/AboutPage.css";

const About = () => {
  const stats = [
    {
      num: "150+",
      label: "Proyek Selesai",
      year: "Periode 2010 - 2026",
      icon: "bi bi-check-circle-fill",
    },
    {
      num: "100+",
      label: "Klien Puas",
      year: "Periode 2010 - 2026",
      icon: "bi bi-people-fill",
    },
    {
      num: "4.9/5",
      label: "Rating Kepuasan",
      year: "Survei Pelanggan 2026",
      icon: "bi bi-star-fill",
    },
    {
      num: "15+",
      label: "Tahun Berdiri",
      year: "Didirikan Sejak 2010",
      icon: "bi bi-award-fill",
    },
  ];

  const workSteps = [
    { num: 1, title: "Konsultasi & Analisis Kebutuhan" },
    { num: 2, title: "Perencanaan & Desain Sistem" },
    { num: 3, title: "Pengembangan & Testing" },
    { num: 4, title: "Deployment & Launch" },
    { num: 5, title: "Maintenance & Support" },
  ];

  const featuredServices = [
    {
      title: "Layanan Internet Fiber Optik",
      icon: "bi bi-wifi",
      path: "/business",
    },
    {
      title: "Maintenance Jaringan Bisnis",
      icon: "bi bi-hdd-network",
      path: "/maintenanceinternet",
    },
    {
      title: "CCTV & Keamanan Bisnis",
      icon: "bi bi-camera-video",
      path: "/kamera",
    },
    {
      title: "Service Komputer & Laptop",
      icon: "bi bi-laptop",
      path: "/hardwaresoftware",
    },
    {
      title: "Marketing & Penjualan",
      icon: "bi bi-graph-up-arrow",
      path: "/marketing",
    },
    {
      title: "Digital Marketing",
      icon: "bi bi-megaphone",
      path: "/marketing",
    },
  ];

  return (
    <div className="about-page">
      <div className="about-ambient"></div>

      {/* Header & Breadcrumb */}
      <div className="about-header">
        <div className="container">
          <div className="about-breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <span className="current">Tentang Kami</span>
          </div>
          <div>
            <span className="about-tag-badge">
              <i className="bi bi-building-check"></i> PROFIL PERUSAHAAN • SEJAK 2010
            </span>
          </div>
          <h1 className="about-title">PT. Mitracom Solusi Teknologi</h1>
          <p className="about-subtitle">"The Best Partner Your Internet Connection"</p>
        </div>
      </div>

      <div className="container">
        {/* Banner Image */}
        <div className="about-banner-wrapper">
          <img
            src={header}
            alt="Tentang PT Mitracom Solusi Teknologi"
            className="about-banner-img"
          />
        </div>

        {/* Stats Grid */}
        <div className="about-stats-grid">
          <div className="row g-4">
            {stats.map((item, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6">
                <div className="about-stat-card">
                  <div className="stat-icon-wrap">
                    <i className={item.icon}></i>
                  </div>
                  <div className="stat-number">{item.num}</div>
                  <div className="stat-label">{item.label}</div>
                  <p className="stat-year">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Layout with Sidebar */}
        <div className="row g-5">
          <div className="col-lg-8">
            {/* Section: Profil & Visi Misi */}
            <div className="about-section-card">
              <div className="section-card-header">
                <div className="section-card-icon">
                  <i className="bi bi-compass"></i>
                </div>
                <h2 className="section-card-title">Visi & Misi Kami</h2>
              </div>

              <p className="text-secondary mb-4" style={{ fontSize: "0.95rem" }}>
                <i className="bi bi-calendar3 me-2 text-primary"></i>
                Didirikan pada tahun <strong>2010</strong>, PT. Mitracom Solusi Teknologi berdedikasi penuh untuk menghadirkan konektivitas andal dan solusi IT berstandar tinggi.
              </p>

              {/* Visi & Misi Grid */}
              <div className="visi-misi-grid">
                {/* Visi */}
                <div className="visi-card">
                  <h4>
                    <i className="bi bi-eye-fill"></i> Visi Kami
                  </h4>
                  <ul className="visi-list">
                    <li className="visi-list-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>
                        Menjadi penyedia layanan dan solusi teknologi informasi yang inovatif, handal dan terpercaya dengan harga yang bersaing.
                      </span>
                    </li>
                    <li className="visi-list-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>
                        Menjadi perusahaan penyedia jasa internet terbaik dan terpercaya.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Misi */}
                <div className="misi-card">
                  <h4>
                    <i className="bi bi-rocket-takeoff-fill"></i> Misi Kami
                  </h4>
                  <ul className="misi-list">
                    <li className="misi-list-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>
                        Meningkatkan pelayanan untuk mencapai kepuasan konsumen dalam bidang jasa koneksi internet.
                      </span>
                    </li>
                    <li className="misi-list-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>
                        Memeratakan jaringan koneksi internet ke seluruh pelosok daerah.
                      </span>
                    </li>
                    <li className="misi-list-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>
                        Meningkatnya kebutuhan akan infrastruktur jaringan yang handal.
                      </span>
                    </li>
                    <li className="misi-list-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>
                        PT Mitracom Solusi Teknologi (Mitracom) telah mulai merintis jalan untuk menjadi salah satu Penyedia Layanan Internet terbaik di Indonesia.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Nilai-Nilai Kami */}
            <div className="about-section-card">
              <div className="section-card-header">
                <div className="section-card-icon">
                  <i className="bi bi-gem"></i>
                </div>
                <h3 className="section-card-title">Nilai-Nilai Kami</h3>
              </div>

              <div className="about-quote-box">
                <h4>
                  <i className="bi bi-quote"></i> "The Best Partner Your Internet Connection"
                </h4>
                <p>
                  Kami percaya bahwa teknologi harus mudah digunakan, bermanfaat, dan memberikan nilai tambah bagi pengguna. Setiap solusi yang kami buat dirancang dengan mempertimbangkan kebutuhan pengguna dan tujuan bisnis klien kami.
                </p>
              </div>

              <p className="text-secondary mb-3" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                Komitmen kami didasari oleh integritas, dedikasi teknis yang solid, dan kepedulian tulus terhadap kelancaran bisnis serta aktivitas digital setiap mitra kerja kami.
              </p>

              <div className="pillars-row">
                <div className="pillar-badge">
                  <i className="bi bi-shield-check"></i> Komitmen
                </div>
                <div className="pillar-badge">
                  <i className="bi bi-headset"></i> Layanan Prima
                </div>
                <div className="pillar-badge">
                  <i className="bi bi-hand-thumbs-up"></i> Kepercayaan
                </div>
              </div>
            </div>

            {/* Section: Layanan Kami */}
            <div className="about-section-card">
              <div className="section-card-header">
                <div className="section-card-icon">
                  <i className="bi bi-grid-fill"></i>
                </div>
                <h3 className="section-card-title">Layanan Kami</h3>
              </div>

              <p className="text-secondary mb-4" style={{ fontSize: "0.95rem" }}>
                Kami menawarkan berbagai layanan teknologi yang komprehensif untuk memenuhi kebutuhan digital bisnis Anda:
              </p>

              <div className="about-services-grid">
                {featuredServices.map((srv, idx) => (
                  <Link key={idx} to={srv.path} className="about-service-item">
                    <div className="about-service-icon">
                      <i className={srv.icon}></i>
                    </div>
                    <div className="about-service-title">{srv.title}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Section: Proses Kerja Terstruktur */}
            <div className="about-section-card">
              <div className="section-card-header">
                <div className="section-card-icon">
                  <i className="bi bi-diagram-3-fill"></i>
                </div>
                <h3 className="section-card-title">Proses Kerja Terstruktur</h3>
              </div>

              <p className="text-secondary mb-4" style={{ fontSize: "0.95rem" }}>
                Setiap proyek dan penanganan instalasi dikerjakan melalui proses yang sistematis untuk memastikan standar mutu optimal:
              </p>

              <ul className="process-steps-list">
                {workSteps.map((step) => (
                  <li key={step.num} className="process-step-item">
                    <div className="process-step-num">{step.num}</div>
                    <p className="process-step-text">{step.title}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section: Keunggulan Kami */}
            <div className="about-section-card">
              <div className="section-card-header">
                <div className="section-card-icon">
                  <i className="bi bi-trophy-fill"></i>
                </div>
                <h3 className="section-card-title">Keunggulan Kami</h3>
              </div>

              <p className="text-secondary mb-0" style={{ lineHeight: "1.8", fontSize: "0.965rem" }}>
                Kami bangga dengan <strong>pengalaman dan keahlian</strong> tim kami dalam teknologi terbaru. Setiap proyek dikerjakan dengan <em>dedikasi tinggi</em> dan penerapan <code style={{ backgroundColor: "var(--bg-secondary)", color: "var(--primary-color)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>best practices</code> industri untuk menjamin kepuasan serta kelangsungan operasional Anda.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="about-sidebar-sticky">
              {/* Tentang Mitracom Panel */}
              <div className="about-sidebar-card">
                <h4 className="about-sidebar-title">
                  <i className="bi bi-info-circle-fill"></i> Tentang Mitracom
                </h4>
                <p className="about-sidebar-desc">
                  PT Mitracom Solusi Teknologi adalah perusahaan yang bergerak dalam bidang penyedia jasa jaringan internet, berdiri pada tahun 2010.
                </p>
                <p className="about-sidebar-desc">
                  <strong>Kenapa "The Best Partner Your Internet Connection"?</strong> Kami bukan sekadar penjual produk teknologi. Kami adalah mitra ahli yang memahami tantangan dan menyediakan jawaban yang lengkap, efektif, dan terintegrasi untuk membantu bisnis atau aktivitas berjalan lebih baik melalui penerapan teknologi yang tepat.
                </p>
                <p className="about-sidebar-desc mb-0">
                  Kami akan terus berkembang, baik secara teknologi, dan mengutamakan pelayanan terhadap pelanggan-pelanggan kami dengan pondasi <strong>Komitmen - Layanan - Kepercayaan</strong>.
                </p>
              </div>

              {/* Layanan Unggulan Sidebar Link */}
              <div className="about-sidebar-card">
                <h4 className="about-sidebar-title">
                  <i className="bi bi-stars"></i> Layanan Unggulan
                </h4>
                <ul className="about-sidebar-links">
                  {featuredServices.map((srv, idx) => (
                    <li key={idx}>
                      <Link to={srv.path} className="about-sidebar-link">
                        <i className={srv.icon}></i>
                        <span>{srv.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="about-cta-btn">
                  <i className="bi bi-chat-dots-fill"></i>
                  <span>Konsultasi Sekarang</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
