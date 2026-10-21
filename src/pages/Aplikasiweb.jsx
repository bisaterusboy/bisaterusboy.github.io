import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import aplikasiweb from "../assets/img/aplikasiweb.jpg";

function Aplikasiweb() {
  const whatsappUrl =
    "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20ingin%20konsultasi%20mengenai%20Pembuatan%20Aplikasi%20Web%20atau%20Sistem%20Kustom";

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
              <span className="current">Web Development</span>
            </div>
          </nav>

          <span className="service-detail-badge">
            <i className="bi bi-code-slash"></i>
            Software & Web Engineering
          </span>

          <div className="row align-items-center g-5 mt-1">
            <div className="col-lg-7">
              <h1 className="service-detail-title">
                Jasa Web Development <span className="text-primary">Profesional</span>
              </h1>
              <p className="service-detail-lead">
                Di balik setiap website yang menarik dan fungsional, ada proses web development yang solid. Jika web design berfokus pada tampilan, maka web development adalah proses membangun seluruh fungsionalitas dan infrastruktur teknis yang membuat website bisa berjalan dengan baik. Ini adalah fondasi yang kokoh untuk kehadiran digital Anda.
              </p>
              <p className="text-secondary lh-lg mb-4">
                Kami menawarkan layanan web development yang akan mengubah ide Anda menjadi solusi digital yang nyata. Layanan kami mencakup seluruh siklus pengembangan, dari front-end hingga back-end.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-wa"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Konsultasi Proyek Aplikasi</span>
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
                    <i className="bi bi-laptop"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Front-End</h5>
                    <small>Responsif, Interaktif, Cepat</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-server"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Back-End</h5>
                    <small>CMS, API & Keamanan Sistem</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-rocket-takeoff-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Kualitas & Kecepatan</h5>
                    <small>Pengujian Menyeluruh & Bersih</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="service-detail-img-box">
                <img
                  src={aplikasiweb}
                  alt="Web Development Mitracom"
                  className="service-detail-img"
                />
                <div className="service-detail-img-caption">
                  <span>
                    <i className="bi bi-check-circle-fill text-success me-1"></i> Arsitektur Skalabel & Aman
                  </span>
                  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">
                    Full-Stack Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Cards Grid: Front-End & Back-End Development */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-code"></i>
              Siklus Pengembangan
            </span>
            <h2 className="service-detail-title fs-2">Cakupan Pengembangan Front-End & Back-End</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
              Kami membangun seluruh fungsionalitas dan infrastruktur teknis modern yang membuat website dan aplikasi Anda berkinerja tinggi.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: Front-End Development */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" }}>
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3 className="feature-card-title">Front-End Development (Sisi Klien)</h3>
                <p className="feature-card-desc mb-3">
                  Ini adalah bagian dari website yang langsung berinteraksi dengan pengguna. Kami menggunakan teknologi modern seperti HTML, CSS, dan JavaScript serta framework seperti React.js, Vue.js, atau Angular untuk membangun antarmuka yang dinamis dan responsif. Kami memastikan website Anda tidak hanya terlihat indah, tetapi juga:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0">
                  <li className="mb-2">
                    <strong>Responsif:</strong> Tampil sempurna di semua perangkat, baik desktop, tablet, maupun smartphone.
                  </li>
                  <li className="mb-2">
                    <strong>Interaktif:</strong> Menyediakan pengalaman pengguna yang mulus melalui animasi, formulir, dan elemen interaktif lainnya.
                  </li>
                  <li className="mb-0">
                    <strong>Cepat:</strong> Dioptimalkan untuk waktu muat yang cepat, yang krusial untuk SEO dan retensi pengunjung.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Back-End Development */}
            <div className="col-lg-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)" }}>
                  <i className="bi bi-filetype-php"></i>
                </div>
                <h3 className="feature-card-title">Back-End Development (Sisi Server)</h3>
                <p className="feature-card-desc mb-3">
                  Ini adalah otak di balik website Anda. Bagian ini tidak terlihat oleh pengguna, tetapi sangat penting untuk mengelola data, server, dan logika aplikasi. Kami menggunakan bahasa pemrograman seperti Node.js, Python, atau PHP dengan database seperti MySQL atau MongoDB untuk membangun:
                </p>
                <ul className="text-secondary ps-3 lh-lg mb-0">
                  <li className="mb-2">
                    <strong>Sistem Manajemen Konten (CMS):</strong> Memungkinkan Anda mengelola konten website dengan mudah tanpa keahlian teknis.
                  </li>
                  <li className="mb-2">
                    <strong>Integrasi API:</strong> Menghubungkan website Anda dengan layanan eksternal, seperti sistem pembayaran, media sosial, atau alat pemasaran.
                  </li>
                  <li className="mb-0">
                    <strong>Sistem Keamanan:</strong> Menerapkan langkah-langkah keamanan untuk melindungi data pengguna dan website dari ancaman siber.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Jaminan Kualitas dan Kecepatan */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-4">
            <span className="service-detail-badge">
              <i className="bi bi-rocket-takeoff-fill"></i>
              Standar Kualitas
            </span>
            <h2 className="service-detail-title fs-2">Jaminan Kualitas dan Kecepatan</h2>
          </div>

          <div className="p-4 p-md-5 rounded-4 shadow-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderLeft: "5px solid var(--primary-color)" }}>
            <p className="text-secondary mb-3 lh-lg fs-6" style={{ textAlign: "justify" }}>
              Kami mengikuti praktik terbaik dalam pengembangan perangkat lunak untuk memastikan kode yang bersih, terstruktur, dan mudah dipelihara. Setiap proyek menjalani pengujian menyeluruh untuk memastikan website bebas dari bug dan berfungsi sesuai harapan. Kami berkomitmen untuk menyelesaikan proyek tepat waktu, dengan tetap menjaga standar kualitas tertinggi.
            </p>
            <p className="text-secondary mb-0 lh-lg fs-6" style={{ textAlign: "justify" }}>
              Dengan layanan web development kami, Anda akan mendapatkan website yang tidak hanya memenuhi kebutuhan Anda hari ini, tetapi juga siap untuk berkembang di masa depan. Hubungi kami sekarang untuk konsultasi gratis dan mari kita bangun fondasi digital yang kuat untuk bisnis Anda.
            </p>
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="service-cta-box">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3>Punya Ide Sistem atau Aplikasi untuk Bisnis Anda?</h3>
              <p>
                Ceritakan kebutuhan bisnis Anda kepada tim pengembang software Mitracom. Kami siap merancang solusi arsitektur aplikasi terbaik dengan efisiensi biaya maksimal.
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
                  <span>Chat Developer via WA</span>
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
            <Link to="/marketing" className="service-pill-btn">
              <i className="bi bi-megaphone"></i> Digital Marketing
            </Link>
            <Link to="/konsultan" className="service-pill-btn">
              <i className="bi bi-lightbulb"></i> IT Solution & Konsultasi
            </Link>
            <Link to="/maintenanceinternet" className="service-pill-btn">
              <i className="bi bi-diagram-3"></i> Maintenance Jaringan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aplikasiweb;
