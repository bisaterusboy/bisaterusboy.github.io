import "../assets/css/Units.css";
import React from "react";
import '../assets/css/PathnetSlider.css'

// Icon Component with fallback
const Icon = ({ iconClass, size = "fs-6", fallback = "●" }) => {
  return (
    <i 
      className={`${iconClass} ${size}`} 
      style={{ 
        fontFamily: '"bootstrap-icons" !important',
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
      title={iconClass.replace('bi bi-', '')}
    />
  );
};

function Units() {
  // --- About Section ---
  const aboutFeatures = [
    {
      icon: "bi bi-speedometer",
      title: "Kecepatan Tinggi",
      description: "Menggunakan teknologi fiber optic terdepan untuk kecepatan internet yang stabil dan cepat",
      color: "primary"
    },
    {
      icon: "bi bi-shield-check",
      title: "Keamanan Terjamin",
      description: "Sistem keamanan jaringan tingkat enterprise dengan monitoring 24/7",
      color: "secondary"
    },
    {
      icon: "bi bi-headset",
      title: "Support 24/7",
      description: "Tim support profesional siap membantu Anda kapan saja dengan response time cepat",
      color: "accent"
    },
    {
      icon: "bi bi-graph-up",
      title: "Monitoring Real-time",
      description: "Sistem monitoring PRTG untuk memastikan kualitas layanan tetap optimal",
      color: "primary"
    }
  ];
  const aboutStats = [
    { number: "1000+", label: "Pelanggan Aktif", color: "primary", icon: "bi bi-people" },
    { number: "99.9%", label: "Uptime SLA", color: "secondary", icon: "bi bi-check-circle" },
    { number: "24/7", label: "Customer Support", color: "accent", icon: "bi bi-clock" },
    { number: "5+", label: "Tahun Pengalaman", color: "primary", icon: "bi bi-award" }
  ];

  // --- Services Section ---

  const services = [
    {
      id: 1,
      icon: "bi bi-camera",
      title: "Internet Fiber ",
      description: "Koneksi internet super cepat menggunakan teknologi fiber optic terdepan dengan kecepatan hingga 100 Mbps.",
      color: "primary"
    },
    {
      id: 2,
      icon: "bi bi-router",
      title: "WiFi Hotspot",
      description: "Layanan WiFi hotspot untuk area publik dengan coverage yang luas dan keamanan terjamin.",
      color: "secondary"
    },
    {
      id: 3,
      icon: "bi bi-building",
      title: "Internet Bisnis",
      description: "Solusi internet khusus untuk bisnis dengan bandwidth dedicated dan support 24/7.",
      color: "accent"
    },
    {
      id: 4,
      icon: "bi bi-shield-check",
      title: "Keamanan Jaringan",
      description: "Sistem keamanan jaringan tingkat enterprise dengan firewall dan monitoring real-time.",
      color: "primary"
    },
    {
      id: 5,
      icon: "bi bi-headset",
      title: "Customer Support",
      description: "Tim support profesional siap membantu 24/7 dengan response time yang cepat.",
      color: "secondary"
    },
    {
      id: 6,
      icon: "bi bi-tools",
      title: "Maintenance",
      description: "Layanan maintenance rutin dan perbaikan cepat untuk memastikan koneksi stabil.",
      color: "accent"
    }
  ];

  // --- Portfolio Section ---
  const packages = [
    {
      id: 1,
      name: 'Classic',
      price: 'Rp. 120.000,-',
      speed: '10 Mbps (Up to*)',
      features: [
        'Home Broadband',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload'
      ],
      whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Classic',
      color: 'secondary',
      icon: 'bi bi-star'
    },
    {
      id: 2,
      name: 'Bronze',
      price: 'Rp. 165.000,-',
      speed: '15 Mbps (Up to*)',
      features: [
        'Home Broadband',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload'
      ],
      whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Bronze',
      color: 'secondary',
      icon: 'bi bi-star'
    },
    {
      id: 3,
      name: 'Silver',
      price: 'Rp. 190.000,-',
      speed: '25 Mbps (Up to*)',
      features: [
        'Home Broadband',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload'
      ],
      whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Silver',
      color: 'accent',
      icon: 'bi bi-star'
    },
    {
      id: 4,
      name: 'Gold',
      price: 'Rp. 390.000',
      speed: '35 Mbps (Up to*)',
      features: [
        'Home Broadband',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload'
      ],
      whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Gold',
      color: 'secondary',
      icon: 'bi bi-star'
    }
  ];

  // --- Contact Section ---
  const contactInfo = [
    {
      icon: "bi bi-geo-alt",
      title: "Alamat",
      content: "Jl. Raya Indramayu - Cirebon No. 123, Indramayu, Jawa Barat",
      color: "primary"
    },
    {
      icon: "bi bi-telephone",
      title: "Telepon",
      content: "+62 822-6060-1982",
      link: "tel:+6282260601982",
      color: "secondary"
    },
    {
      icon: "bi bi-envelope",
      title: "Email",
      content: "info@mitracom-isp.com",
      link: "mailto:info@mitracom-isp.com",
      color: "accent"
    },
    {
      icon: "bi bi-clock",
      title: "Jam Operasional",
      content: "Senin - Minggu: 08:00 - 22:00 WIB",
      color: "primary"
    }
  ];

  // --- Utilitas Color Class ---
  const getColorClass = (color) => {
    switch (color) {
      case 'primary':
        return 'text-primary-custom';
      case 'secondary':
        return 'text-secondary-custom';
      case 'accent':
        return 'text-accent-custom';
      default:
        return 'text-primary-custom';
    }
  };
  const getBgClass = (color) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-custom';
      case 'secondary':
        return 'bg-secondary-custom';
      case 'accent':
        return 'bg-accent-custom';
      default:
        return 'bg-primary-custom';
    }
  };
  const getPackageColorClass = (color) => {
    switch (color) {
      case 'primary':
        return 'package-card';
      case 'secondary':
        return 'package-card secondary';
      case 'accent':
        return 'package-card accent';
      default:
        return 'package-card';
    }
  };

 
	const logos = [
		{ id: 1, name: 'Meta', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Meta' },
		{ id: 2, name: 'Surge', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Surge' },
		{ id: 3, name: 'NTT', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=NTT' },
		{ id: 4, name: 'UIN SSC', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=UIN+SSC' },
		{ id: 5, name: 'MZ', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=MZ' },
		{ id: 6, name: 'Hotel', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=GRAGE' },
		{ id: 7, name: 'DPPKB', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=DPPKB' },
		{ id: 8, name: 'neuCentrIX', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=neuCentrIX' },
		{ id: 9, name: 'Livaysa', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Livaysa' },
		{ id: 10, name: 'Login Media', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Login+Media' },
		{ id: 11, name: 'SMK 1', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=SMK' },
		{ id: 12, name: 'Instansi', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Instansi' }
	]

	const rowItems = [...logos, ...logos] // duplicate for seamless loop

  return (

    <div className="wrapper" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* --- About Section --- */}
      {/* --- Portfolio Section --- */}
      <section id="plans" className="section-padding">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Paket Internet Rumah</h2>
            <p className="section-subtitle">Pilih paket terbaik sesuai kebutuhan keluarga</p>
          </div>
          <div className="row g-4">
            {packages.map((pkg) => (
              <div key={pkg.id} className="col-lg-3 col-md-6">
                <div 
                  className={`h-100 p-4 rounded-4 border position-relative ${pkg.popular ? 'popular-card' : ''}`} 
                  style={{ 
                    background: pkg.popular 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                      : pkg.id === 1 
                        ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                        : pkg.id === 3
                          ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                          : 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                    border: pkg.popular ? '3px solid #ffd700' : '2px solid rgba(255,255,255,0.3)',
                    transform: pkg.popular ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: pkg.popular 
                      ? '0 15px 35px rgba(102, 126, 234, 0.4), 0 5px 15px rgba(0,0,0,0.1)' 
                      : '0 8px 25px rgba(0, 0, 0, 0.15), 0 3px 10px rgba(0,0,0,0.1)',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {pkg.popular && (
                    <div className="position-absolute top-0 start-50 translate-middle-x" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
                      <span className="badge bg-warning text-dark px-4 py-2 rounded-pill fw-bold shadow-lg" style={{ fontSize: '0.9rem' }}>
                        🔥 TERPOPULER
                      </span>
                    </div>
                  )}
                  <div className="d-flex justify-content-center mb-3">
                    <span className="badge rounded-pill px-4 py-2 fw-bold" style={{ 
                      background: 'rgba(255,255,255,0.2)', 
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                      {pkg.name}
                    </span>
                  </div>
                  <div className="text-center my-4">
                    <div className="display-5 fw-bold mb-1" style={{ 
                      color: 'white',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      {pkg.speed.replace(' (Up to*)', '')}
                    </div>
                    <div className="small" style={{ color: 'rgba(255,255,255,0.8)' }}>Kecepatan hingga</div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="h2 fw-bold mb-0" style={{ 
                      color: 'white',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      {pkg.price}
                    </div>
                    <div className="small" style={{ color: 'rgba(255,255,255,0.8)' }}>per bulan</div>
                  </div>
                  <ul className="list-unstyled mb-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="d-flex align-items-center mb-3">
                        <span className="me-3" style={{ color: '#4ade80', fontSize: '1.2rem' }}>
                          <Icon iconClass="bi bi-check-circle-fill" />
                        </span>
                        <span className="small" style={{ color: 'rgba(255,255,255,0.9)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={pkg.whatsapp} className="btn w-100 rounded-pill fw-bold py-3" 
                     style={{ 
                       background: pkg.popular 
                         ? 'linear-gradient(45deg, #ffd700, #ffed4e)' 
                         : 'linear-gradient(45deg, #ffffff, #f8f9fa)',
                       color: pkg.popular ? '#000' : '#333',
                       border: 'none',
                       boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                       transition: 'all 0.3s ease'
                     }}
                     onMouseOver={(e) => {
                       e.target.style.transform = 'translateY(-2px)';
                       e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                     }}
                     onMouseOut={(e) => {
                       e.target.style.transform = 'translateY(0)';
                       e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                     }}
                     target="_blank" 
                     rel="noopener noreferrer">
                    <Icon iconClass="bi bi-whatsapp" />
                    <span className="ms-2">Berlangganan Sekarang</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      



      {/* --- Services Section --- */}
      <section id="services" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Layanan Kami</h2>
              <p className="section-subtitle">
                Kami menyediakan berbagai layanan internet berkualitas tinggi untuk memenuhi kebutuhan Anda
              </p>
            </div>
          </div>
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="card card-custom h-100">
                  <div className="card-body text-center p-4">
                    <div className={`${getBgClass(service.color)} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4`} style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                      <Icon iconClass={service.icon} size="fs-2" />
                    </div>
                    <h5 className={`card-title mb-3 ${getColorClass(service.color)} fw-semibold`}>{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                    <div className="mt-3">
                      <span className={`badge ${getBgClass(service.color)} text-white px-3 py-2 rounded-pill`}>
                        <Icon iconClass="bi bi-check-circle" size="fs-6" />
                        <span className="ms-1">Tersedia</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <div className="card card-custom p-4">
                <h4 className="text-primary-custom mb-3">Mengapa Memilih Kami?</h4>
                <div className="row g-3">
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-check-lg" />
                      </div>
                      <span className="fw-semibold">Kecepatan Stabil</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary-custom text-dark rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-check-lg" />
                      </div>
                      <span className="fw-semibold">Harga Terjangkau</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-accent-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-check-lg" />
                      </div>
                      <span className="fw-semibold">Support 24/7</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-check-lg" />
                      </div>
                      <span className="fw-semibold">Instalasi Cepat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pathnet  py-5">
			<h2 className="section-heading text-center mb-4">OURS PATHNER</h2>
			<div className="brand-rows">
				<div className="marquee" role="list" aria-label="logo marquee top">
					<div className="marquee__track">
						{rowItems.map((item, idx) => (
							<div key={`top-${item.id}-${idx}`} className="brand-slide" role="listitem">
								<div className="client-card d-flex align-items-center justify-content-center">
									<img src={item.url} alt={item.name} className="client-logo" loading="lazy" />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="marquee marquee--reverse mt-3" role="list" aria-label="logo marquee bottom">
					<div className="marquee__track">
						{rowItems.map((item, idx) => (
							<div key={`bottom-${item.id}-${idx}`} className="brand-slide" role="listitem">
								<div className="client-card d-flex align-items-center justify-content-center">
									<img src={item.url} alt={item.name} className="client-logo" loading="lazy" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>

      {/* --- Contact Section --- */}
      <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Hubungi Kami</h2>
              <p className="section-subtitle">
                Siap melayani kebutuhan internet Anda dengan profesional dan ramah
              </p>
              <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="card card-custom p-4">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a href="https://wa.me/6282260601982?text=Hallo, saya ingin bertanya tentang layanan internet Mitracom ISP" className="btn btn-success rounded-pill px-4 py-2" target="_blank" rel="noopener noreferrer">
                    <Icon iconClass="bi bi-whatsapp" size="fs-6" />
                    <span className="ms-2">WhatsApp</span>
                  </a>
                  <a href="tel:+6282260601982" className="btn btn-primary-custom rounded-pill px-4 py-2">
                    <Icon iconClass="bi bi-telephone" size="fs-6" />
                    <span className="ms-2">Telepon</span>
                  </a>
                  <a href="mailto:info@mitracom-isp.com" className="btn btn-accent-custom rounded-pill px-4 py-2">
                    <Icon iconClass="bi bi-envelope" size="fs-6" />
                    <span className="ms-2">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
          
          {}
          {/* Quick Contact Buttons */}
          
        </div>
      </section>
    </div>
  );
}

export default Units;
