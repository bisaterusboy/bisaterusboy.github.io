import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Service.css";

// Service image assets
import internet1Img from "../assets/img/internet1.png";
import appWebImg from "../assets/img/aplikasiweb.jpg";
import marketingImg from "../assets/img/marketing1.png";
import bisnisImg from "../assets/img/bisnis1.png";
import servicePcImg from "../assets/img/servicepc1.png";
import jaringanImg from "../assets/img/jaringan1.webp";
import cctvImg from "../assets/img/cctv.jpg";
import konsultanImg from "../assets/img/konsultan1.jpeg";

// Package logos
import classicLogo from "../assets/img/classic.png";
import bronzeLogo from "../assets/img/bronze.png";
import silverLogo from "../assets/img/silver.png";
import goldLogo from "../assets/img/gold.png";

// Data Layanan
const servicesList = [
  {
    id: "layanan-internet",
    title: "Layanan Internet Broadband",
    category: "network",
    categoryLabel: "Konektivitas ISP",
    badge: "Home & Business",
    desc: "Akses internet broadband ultra-cepat dan dedicated line tanpa FUP dengan kestabilan jaringan tinggi untuk rumah tinggal maupun korporasi.",
    icon: "bi bi-wifi",
    path: "/business",
    image: bisnisImg,
    tags: ["Fiber Optic", "Tanpa FUP", "Latency Rendah", "SLA 99.9%"],
    color: "#0284c7"
  },
  {
    id: "web-design",
    title: "Web Design Modern",
    category: "web",
    categoryLabel: "Desain & Kreatif",
    badge: "Desain Modern",
    desc: "Desain website profesional, estetis, dan sepenuhnya responsif yang dirancang untuk memperkuat identitas brand dan konversi bisnis Anda.",
    icon: "bi bi-palette",
    path: "/webdesign",
    image: internet1Img,
    tags: ["UI/UX Modern", "Mobile-First", "Brand Identity", "SEO-Ready"],
    color: "#6366f1"
  },
  {
    id: "web-dev",
    title: "Web Development",
    category: "web",
    categoryLabel: "Software & Web",
    badge: "Aplikasi Web",
    desc: "Pengembangan website kustom dan aplikasi web modern berbasis cloud yang cepat, aman, responsif, dan scalable untuk kebutuhan operasional.",
    icon: "bi bi-laptop",
    path: "/aplikasiweb",
    image: appWebImg,
    tags: ["Fullstack Dev", "Custom CMS", "API Integration", "High Security"],
    color: "#0ea5e9"
  },
  {
    id: "marketing",
    title: "Digital Marketing & Promosi",
    category: "web",
    categoryLabel: "Pemasaran Digital",
    badge: "Promosi Online",
    desc: "Layanan digital marketing terpadu, promosi media sosial, dan strategi periklanan terarah untuk memperluas jangkauan pasar Anda secara efektif.",
    icon: "bi bi-megaphone",
    path: "/marketing",
    image: marketingImg,
    tags: ["Social Media Ads", "SEO & SEM", "Target Audience", "Campaign ROI"],
    color: "#e11d48"
  },
  {
    id: "hardware-software",
    title: "Service Komputer & Laptop",
    category: "hardware",
    categoryLabel: "Hardware & Support",
    badge: "Hardware & Software",
    desc: "Jasa perbaikan komprehensif, upgrade komponen hardware (SSD & RAM), perbaikan motherboard, serta instalasi sistem operasi dan software.",
    icon: "bi bi-pc-display",
    path: "/hardwaresoftware",
    image: servicePcImg,
    tags: ["Perbaikan Cepat", "Upgrade SSD & RAM", "Install OS", "Garansi Servis"],
    color: "#d97706"
  },
  {
    id: "maintenance-jaringan",
    title: "Maintenance Jaringan",
    category: "network",
    categoryLabel: "Infrastruktur Jaringan",
    badge: "Jaringan LAN / WiFi",
    desc: "Perawatan berkala, perapihan kabel rack server, optimasi router Mikrotik, dan troubleshooting cepat jaringan LAN serta hotspot WiFi.",
    icon: "bi bi-diagram-3",
    path: "/maintenanceinternet",
    image: jaringanImg,
    tags: ["Mikrotik Setup", "Kabeling UTP/FO", "Bandwidth Management", "Monitoring 24/7"],
    color: "#059669"
  },
  {
    id: "cctv-security",
    title: "CCTV & Keamanan Cerdas",
    category: "hardware",
    categoryLabel: "Keamanan Sistem",
    badge: "Keamanan & Pengawasan",
    desc: "Instalasi kamera CCTV HD dan IP Camera cerdas dengan akses pemantauan real-time via smartphone dari mana saja secara aman dan stabil.",
    icon: "bi bi-camera-video",
    path: "/kamera",
    image: cctvImg,
    tags: ["IP Camera 4K", "Cloud / DVR Backup", "Akses Smartphone", "Night Vision"],
    color: "#7c3aed"
  },
  {
    id: "konsultan-it",
    title: "IT Solution & Konsultasi",
    category: "hardware",
    categoryLabel: "Solusi Terintegrasi",
    badge: "Konsultasi & Solusi",
    desc: "Konsultasi arsitektur IT, audit sistem, perancangan infrastruktur kantor baru, dan solusi teknologi terpadu yang disesuaikan dengan anggaran Anda.",
    icon: "bi bi-lightbulb",
    path: "/konsultan",
    image: konsultanImg,
    tags: ["Konsultasi Ahli", "Arsitektur Sistem", "Efisiensi Biaya", "Transformasi Digital"],
    color: "#2563eb"
  }
];

// Data Paket Internet Broadband
const internetPackages = [
  {
    id: 1,
    name: "Classic",
    logoImg: classicLogo,
    badge: "Paling Hemat",
    price: "Rp. 120.000",
    period: "/ bulan",
    speed: "20 Mbps",
    speedSub: "Up to*",
    features: [
      "Home Broadband Kecepatan Tinggi",
      "Tanpa Batas Kuota (Tanpa FUP)",
      "Unlimited Download & Upload",
      "Ideal untuk 2 - 4 Perangkat",
      "Dukungan Teknis Siaga"
    ],
    whatsapp: "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20tertarik%20untuk%20berlangganan%20Paket%20Internet%20Classic%20(20%20Mbps)",
    popular: false
  },
  {
    id: 2,
    name: "Bronze",
    logoImg: bronzeLogo,
    badge: "Pilihan Keluarga",
    price: "Rp. 165.000",
    period: "/ bulan",
    speed: "30 Mbps",
    speedSub: "Up to*",
    features: [
      "Home Broadband Super Cepat",
      "Tanpa Batas Kuota (Tanpa FUP)",
      "Streaming Full HD Lancar",
      "Ideal untuk 4 - 6 Perangkat",
      "Dukungan CS & Teknisi Cepat"
    ],
    whatsapp: "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20tertarik%20untuk%20berlangganan%20Paket%20Internet%20Bronze%20(30%20Mbps)",
    popular: false
  },
  {
    id: 3,
    name: "Silver",
    logoImg: silverLogo,
    badge: "🔥 PALING POPULER",
    price: "Rp. 199.000",
    period: "/ bulan",
    speed: "50 Mbps",
    speedSub: "Up to*",
    features: [
      "Home Broadband Ultra Cepat",
      "Tanpa Batas Kuota (Tanpa FUP)",
      "Gaming Rendah Latency & 4K Stream",
      "Ideal untuk 6 - 10 Perangkat",
      "Prioritas Dukungan Teknis 24/7"
    ],
    whatsapp: "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20tertarik%20untuk%20berlangganan%20Paket%20Internet%20Silver%20(50%20Mbps)",
    popular: true
  },
  {
    id: 4,
    name: "Gold",
    logoImg: goldLogo,
    badge: "Performa Maksimal",
    price: "Rp. 249.000",
    period: "/ bulan",
    speed: "100 Mbps",
    speedSub: "Up to*",
    features: [
      "Performa Maksimal Kelas Bisnis",
      "Tanpa Batas Kuota (Tanpa FUP)",
      "Download & Upload Berkas Berat Instan",
      "Banyak Perangkat Tanpa Hambatan",
      "SLA & Monitoring VIP Dedicated"
    ],
    whatsapp: "https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20tertarik%20untuk%20berlangganan%20Paket%20Internet%20Gold%20(100%20Mbps)",
    popular: false
  }
];

// Value Pillars
const valuePillars = [
  {
    icon: "bi bi-lightning-charge",
    title: "Koneksi Stabil & Cepat",
    desc: "Infrastruktur fiber optic modern dengan latensi rendah dan jaminan SLA hingga 99.9% uptime.",
    bg: "linear-gradient(135deg, #0284c7 0%, #007bff 100%)"
  },
  {
    icon: "bi bi-infinity",
    title: "Bebas FUP Sepuasnya",
    desc: "Nikmati akses internet tanpa batasan fair usage policy (FUP). Kecepatan stabil dari awal hingga akhir bulan.",
    bg: "linear-gradient(135deg, #059669 0%, #10b981 100%)"
  },
  {
    icon: "bi bi-headset",
    title: "Dukungan Teknis Siaga",
    desc: "Tim teknisi lokal yang responsif siap membantu instalasi, konfigurasi, dan penanganan kendala setiap saat.",
    bg: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)"
  },
  {
    icon: "bi bi-puzzle",
    title: "Solusi Lengkap Satu Pintu",
    desc: "Mulai dari penyediaan internet, instalasi CCTV, perbaikan hardware, hingga pengembangan aplikasi bisnis kustom.",
    bg: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)"
  }
];

function Service() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic
  const filteredServices = servicesList.filter((srv) => {
    const matchesCategory =
      selectedCategory === "all" || srv.category === selectedCategory;
    const matchesQuery =
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="service-page-wrapper">
      <div className="service-ambient-bg" aria-hidden="true" />

      <div className="container position-relative">
        {/* Breadcrumb & Hero Header */}
        <header className="service-hero-header">
          <nav aria-label="breadcrumb">
            <div className="service-breadcrumb">
              <Link to="/">Beranda</Link>
              <i className="bi bi-chevron-right text-muted" style={{ fontSize: "0.75rem" }}></i>
              <span className="current">Layanan & Produk</span>
            </div>
          </nav>

          <div>
            <span className="service-hero-badge">
              <i className="bi bi-stars"></i>
              Solusi Teknologi & Konektivitas Terpadu
            </span>
          </div>

          <h1 className="service-hero-title">
            Layanan & Solusi Digital <span className="gradient-text">Mitracom</span>
          </h1>

          <p className="service-hero-desc">
            Kami menghadirkan portofolio produk dan jasa unggulan yang dirancang khusus untuk memenuhi kebutuhan infrastruktur digital Anda — mulai dari konektivitas internet super cepat, sistem keamanan cerdas, hingga pengembangan web dan perangkat keras.
          </p>

          {/* Controls Bar: Category Filters & Search */}
          <div className="service-controls-bar">
            <div className="service-filter-tabs" role="tablist">
              <button
                type="button"
                className={`service-filter-btn ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                <i className="bi bi-grid-fill"></i>
                Semua Layanan ({servicesList.length})
              </button>
              <button
                type="button"
                className={`service-filter-btn ${selectedCategory === "network" ? "active" : ""}`}
                onClick={() => setSelectedCategory("network")}
              >
                <i className="bi bi-wifi"></i>
                Internet & Jaringan
              </button>
              <button
                type="button"
                className={`service-filter-btn ${selectedCategory === "web" ? "active" : ""}`}
                onClick={() => setSelectedCategory("web")}
              >
                <i className="bi bi-code-slash"></i>
                Software & Web
              </button>
              <button
                type="button"
                className={`service-filter-btn ${selectedCategory === "hardware" ? "active" : ""}`}
                onClick={() => setSelectedCategory("hardware")}
              >
                <i className="bi bi-cpu"></i>
                Hardware & Keamanan
              </button>
            </div>

            <div className="service-search-box">
              <i className="bi bi-search service-search-icon"></i>
              <input
                type="text"
                className="service-search-input"
                placeholder="Cari layanan apa saja..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Cari layanan"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="service-search-clear"
                  onClick={() => setSearchQuery("")}
                  title="Hapus pencarian"
                >
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Services Cards Grid */}
        <section aria-label="Daftar Layanan">
          {filteredServices.length > 0 ? (
            <div className="row g-4">
              {filteredServices.map((srv) => (
                <div key={srv.id} className="col-lg-4 col-md-6 services-card-item">
                  <div className="service-modern-card">
                    {/* Image Header with Category & Floating Icon */}
                    <div className="service-card-img-wrap">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="service-card-img"
                        loading="lazy"
                      />
                      <div className="service-img-overlay" />
                      <span className="service-card-category-badge">
                        {srv.categoryLabel}
                      </span>
                      <div className="service-floating-icon" style={{ background: srv.color }}>
                        <i className={srv.icon}></i>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="service-card-body">
                      <span className="service-card-subbadge">{srv.badge}</span>
                      <h3 className="service-card-title">{srv.title}</h3>
                      <p className="service-card-desc">{srv.desc}</p>

                      {/* Tag Features */}
                      <div className="service-tags-wrap">
                        {srv.tags.map((tag, i) => (
                          <span key={i} className="service-tag-pill">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Card Footer Action */}
                      <div className="service-card-footer">
                        <Link
                          to={srv.path}
                          className="service-action-btn"
                          title={`Pelajari selengkapnya tentang ${srv.title}`}
                        >
                          <span>Lihat Detail Layanan</span>
                          <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="service-empty-state">
              <i className="bi bi-search service-empty-icon"></i>
              <h4 className="fw-bold mb-2">Layanan Tidak Ditemukan</h4>
              <p className="text-secondary mb-3">
                Tidak ada layanan yang cocok dengan pencarian "<strong>{searchQuery}</strong>".
              </p>
              <button
                type="button"
                className="btn btn-primary rounded-pill px-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Reset Filter & Pencarian
              </button>
            </div>
          )}
        </section>

        {/* Featured Internet Packages Section */}
        <section className="service-packages-section" id="paket-internet">
          <div className="service-section-header">
            <span className="service-section-badge">
              <i className="bi bi-broadcast"></i>
              Paket Pilihan Favorit
            </span>
            <h2 className="service-section-title">Paket Internet Home Broadband</h2>
            <p className="service-section-desc">
              Pilihan paket internet rumah dan kantor dengan kecepatan tinggi, tanpa FUP, dan koneksi stabil untuk seluruh keluarga.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {internetPackages.map((pkg) => (
              <div key={pkg.id} className="col-lg-3 col-md-6 pkg-card-wrap">
                <div className={`pkg-modern-card pkg-card-${pkg.name.toLowerCase()} ${pkg.popular ? "popular" : ""}`}>
                  {pkg.popular && (
                    <div className="pkg-popular-badge">
                      <i className="bi bi-fire me-1"></i>
                      TERPOPULER
                    </div>
                  )}

                  <div className="pkg-header">
                    <div className="pkg-logo-circle">
                      <img src={pkg.logoImg} alt={`Logo ${pkg.name}`} />
                    </div>
                    <h3 className="pkg-name">{pkg.name}</h3>
                    <div className="pkg-speed-badge">
                      <i className="bi bi-speedometer2 me-1"></i>
                      {pkg.speed} <small className="text-muted">({pkg.speedSub})</small>
                    </div>
                  </div>

                  <div className="pkg-price-wrap">
                    <div className="pkg-price">{pkg.price}</div>
                    <div className="pkg-price-period">{pkg.period}</div>
                  </div>

                  <ul className="pkg-features-list">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="pkg-feature-item">
                        <i className="bi bi-check-circle-fill pkg-feature-icon"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={pkg.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pkg-order-btn"
                    title={`Pesan Paket ${pkg.name} via WhatsApp`}
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>Pesan Sekarang</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Mitracom Value Pillars */}
        <section className="service-values-section">
          <div className="text-center mb-5">
            <span className="service-hero-badge">
              <i className="bi bi-shield-check"></i>
              Keunggulan Layanan
            </span>
            <h2 className="service-section-title">Mengapa Memilih Mitracom?</h2>
            <p className="service-section-desc">
              Komitmen kami adalah memberikan pengalaman teknologi dan internet terbaik tanpa rasa cemas.
            </p>
          </div>

          <div className="row g-4">
            {valuePillars.map((pillar, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="value-card">
                  <div className="value-icon-box" style={{ background: pillar.bg }}>
                    <i className={pillar.icon}></i>
                  </div>
                  <h4 className="value-card-title">{pillar.title}</h4>
                  <p className="value-card-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="service-cta-banner">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="cta-banner-title">
                Butuh Solusi Khusus untuk Bisnis atau Instansi Anda?
              </h2>
              <p className="cta-banner-desc">
                Konsultasikan kebutuhan infrastruktur IT, jaringan kabel, CCTV, atau aplikasi web kustom bersama tim ahli kami. Kami siap memberikan penawaran terbaik!
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex flex-wrap gap-3 justify-content-lg-end justify-content-center">
                <a
                  href="https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20dan%20solusi%20IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn-primary"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Chat WhatsApp</span>
                </a>
                <Link to="/contact" className="cta-btn-secondary">
                  <i className="bi bi-envelope"></i>
                  <span>Hubungi Kami</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
