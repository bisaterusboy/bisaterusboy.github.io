import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import cctv from "../assets/img/cctv.jpg";

function Kamera() {
  const whatsappUrl =
    "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20ingin%20konsultasi%20mengenai%20Paket%20Pemasangan%20CCTV%20dan%20Keamanan";

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
              <span className="current">CCTV & Security</span>
            </div>
          </nav>

          <span className="service-detail-badge">
            <i className="bi bi-camera-video-fill"></i>
            Keamanan dan Pengawasan
          </span>

          <div className="row align-items-center g-5 mt-1">
            <div className="col-lg-7">
              <h1 className="service-detail-title">
                Tingkatkan Keamanan dengan <span className="text-primary">Solusi CCTV & Keamanan Terintegrasi dari Mitracom</span>
              </h1>
              <p className="service-detail-lead">
                Mitracom, sebagai penyedia layanan internet terdepan, tidak hanya fokus pada konektivitas. Kami memahami bahwa keamanan adalah prioritas utama bagi rumah dan bisnis Anda. Untuk itu, Mitracom hadir dengan solusi CCTV & Security yang terintegrasi, memberikan Anda ketenangan pikiran melalui perlindungan yang komprehensif.
              </p>
              <p className="text-secondary lh-lg mb-4">
                Dalam dunia yang serba digital, ancaman keamanan tidak hanya datang dari luar jaringan, tetapi juga dari lingkungan fisik. Kehadiran kamera pengawas (CCTV) menjadi esensial untuk memantau aktivitas, mencegah tindak kriminal, dan memberikan bukti saat terjadi insiden.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-wa"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Pesan Paket CCTV via WA</span>
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
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Jaringan Terintegrasi</h5>
                    <small>Monitoring Stabil & Real-Time</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-badge-4k-fill"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Gambar Jernih HD - 4K</h5>
                    <small>Fitur Night Vision Tajam</small>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <div className="quick-stat-icon">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="quick-stat-info">
                    <h5>Remote Monitoring</h5>
                    <small>Akses Langsung di HP</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="service-detail-img-box">
                <img
                  src={cctv}
                  alt="CCTV & Security Mitracom"
                  className="service-detail-img"
                />
                <div className="service-detail-img-caption">
                  <span>
                    <i className="bi bi-shield-fill-check text-success me-1"></i> Perlindungan 24 Jam Nonstop
                  </span>
                  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">
                    Surveillance Smart
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Cards Grid: 5 Keunggulan CCTV Mitracom */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-eyeglasses"></i>
              Keunggulan Layanan
            </span>
            <h2 className="service-detail-title fs-2">Mengapa Memilih Layanan CCTV & Security Mitracom?</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
              Kami tidak hanya menjual produk. Kami menyediakan solusi lengkap yang didukung oleh keahlian dan teknologi terkini.
            </p>
          </div>

          <div className="row g-4">
            {/* Keunggulan 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #0284c7 0%, #007bff 100%)" }}>
                  <i className="bi bi-hdd-network-fill"></i>
                </div>
                <h3 className="feature-card-title">1. Jaringan Terintegrasi</h3>
                <p className="feature-card-desc" style={{ textAlign: "justify" }}>
                  Layanan kami terintegrasi langsung dengan jaringan internet Mitracom. Ini memungkinkan monitoring real-time yang stabil dan tanpa hambatan. Anda bisa mengakses rekaman dari mana saja, kapan saja, melalui perangkat seluler atau komputer.
                </p>
              </div>
            </div>

            {/* Keunggulan 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)" }}>
                  <i className="bi bi-camera-video-fill"></i>
                </div>
                <h3 className="feature-card-title">2. Kualitas Gambar Jernih & Resolusi Tinggi</h3>
                <p className="feature-card-desc" style={{ textAlign: "justify" }}>
                  Kami menggunakan kamera CCTV dengan resolusi tinggi (HD hingga 4K) yang menghasilkan gambar tajam dan jelas, bahkan dalam kondisi minim cahaya (fitur night vision). Detail wajah dan plat nomor kendaraan dapat terekam dengan akurat, sangat penting untuk identifikasi.
                </p>
              </div>
            </div>

            {/* Keunggulan 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #059669 0%, #047857 100%)" }}>
                  <i className="bi bi-box-seam-fill"></i>
                </div>
                <h3 className="feature-card-title">3. Paket Lengkap dengan Pemasangan Profesional</h3>
                <p className="feature-card-desc" style={{ textAlign: "justify" }}>
                  Mitracom menyediakan paket All-in-One yang mencakup semua kebutuhan Anda, mulai dari kamera, Digital Video Recorder (DVR) atau Network Video Recorder (NVR), hingga kabel dan instalasi. Tim teknisi kami yang berpengalaman akan memastikan pemasangan dilakukan secara rapi, cepat, dan optimal.
                </p>
              </div>
            </div>

            {/* Keunggulan 4 */}
            <div className="col-lg-6 col-md-6">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)" }}>
                  <i className="bi bi-phone-fill"></i>
                </div>
                <h3 className="feature-card-title">4. Pemantauan Jarak Jauh (Remote Monitoring)</h3>
                <p className="feature-card-desc" style={{ textAlign: "justify" }}>
                  Dengan aplikasi khusus, Anda bisa memantau seluruh area yang dipasangi kamera secara langsung dari smartphone Anda. Fitur ini sangat berguna untuk mengawasi rumah saat bepergian atau memantau kondisi kantor di luar jam kerja.
                </p>
              </div>
            </div>

            {/* Keunggulan 5 */}
            <div className="col-lg-6 col-md-12">
              <div className="feature-card-modern">
                <div className="feature-icon-wrapper" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)" }}>
                  <i className="bi bi-sliders"></i>
                </div>
                <h3 className="feature-card-title">5. Solusi yang Dapat Disesuaikan</h3>
                <p className="feature-card-desc" style={{ textAlign: "justify" }}>
                  Setiap lokasi memiliki kebutuhan keamanan yang berbeda. Kami menyediakan berbagai jenis kamera (dome, bullet, PTZ) dan paket yang dapat disesuaikan dengan skala kebutuhan Anda, baik untuk rumah pribadi, toko, kantor, hingga area pabrik yang luas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Solusi Ideal untuk Berbagai Kebutuhan */}
        <section className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="service-detail-badge">
              <i className="bi bi-stars"></i>
              Aplikasi Kebutuhan
            </span>
            <h2 className="service-detail-title fs-2">Solusi Ideal untuk Berbagai Kebutuhan</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card-modern p-4 text-center">
                <div className="process-step-number mx-auto mb-3">
                  <i className="bi bi-house-heart"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Untuk Rumah Tangga</h4>
                <p className="feature-card-desc">
                  Lindungi keluarga dan aset Anda dari pencurian atau kejadian yang tidak diinginkan.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card-modern p-4 text-center">
                <div className="process-step-number mx-auto mb-3">
                  <i className="bi bi-building"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Untuk Bisnis & Kantor</h4>
                <p className="feature-card-desc">
                  Pantau aktivitas karyawan, tingkatkan produktivitas, dan cegah kerugian.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card-modern p-4 text-center">
                <div className="process-step-number mx-auto mb-3">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <h4 className="feature-card-title fs-5 mb-2">Untuk Area Publik</h4>
                <p className="feature-card-desc">
                  Sempurna untuk sekolah, tempat parkir, atau fasilitas umum yang memerlukan pengawasan ketat.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraf Penutup: Investasi Keamanan */}
          <div className="mt-5 p-4 rounded-4 shadow-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderLeft: "5px solid var(--primary-color)" }}>
            <p className="text-secondary mb-0 lh-lg fs-6" style={{ textAlign: "justify" }}>
              Keamanan adalah investasi, bukan pengeluaran. Dengan layanan CCTV & Security dari Mitracom, Anda berinvestasi dalam ketenangan dan perlindungan. Jangan tunda lagi, lindungi apa yang berharga bagi Anda sekarang juga.
              <br /><br />
              Untuk konsultasi dan informasi lebih lanjut, silakan hubungi tim sales Mitracom.
            </p>
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="service-cta-box">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3>Ingin Survei Lokasi atau Pemasangan CCTV?</h3>
              <p>
                Konsultasikan jumlah titik kamera dan luas lokasi Anda dengan teknisi Mitracom. Kami siap memberikan rekomendasi paket terbaik sesuai kebutuhan dan anggaran Anda!
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
                  <span>Chat Sales CCTV via WA</span>
                </a>
                <Link to="/contact" className="btn-cta-back">
                  <i className="bi bi-telephone"></i>
                  <span>Hubungi Kami</span>
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

export default Kamera;