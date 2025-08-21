import { useState } from 'react';
import "../assets/css/priceList.css";
import '../assets/css/PathnetSlider.css';
// partner kami 1
import logo1 from "../assets/img/partner/apjii.png";
import logo2 from "../assets/img/partner/hsp.png";
import logo3 from "../assets/img/partner/mikrotik.png";
import logo4 from "../assets/img/partner/ntt.png";
import logo5 from "../assets/img/partner/mvnet.png";
import logo6 from "../assets/img/partner/tis.png";
import logo7 from "../assets/img/partner/cyberplus.png";
import logo8 from "../assets/img/partner/Komdigi.png";

// partner kami 2
import logoa from "../assets/img/partner/BKPSDM.png";
import logob from "../assets/img/partner/Dishub.jpg";
import logoc from "../assets/img/partner/Ditpolairud.png";
import logod from "../assets/img/partner/easynet.png";
import logoe from "../assets/img/partner/ionet.png";
import logof from "../assets/img/partner/pulsanet.png";
import logog from "../assets/img/partner/Wifique.png";
import logoh from "../assets/img/partner/polytama.png";


// Icon Component with fallback
const Icon = ({ iconClass, size = "fs-6" }) => {
  return (
    <i 
      className={`${iconClass} ${size}`} 
      style={{ 
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
      title={iconClass.replace('bi bi-', '')}
    />
  );
};

function Units() {
  const [addressQuery, setAddressQuery] = useState('');
  const [coverageStatus, setCoverageStatus] = useState('');
  const [checking, setChecking] = useState(false);

  const handleCoverageCheck = (event) => {
    event.preventDefault();
    const trimmedQuery = addressQuery.trim();
    if (!trimmedQuery) {
      setCoverageStatus('Masukkan alamat lengkap Anda terlebih dahulu.');
      return;
    }
    setChecking(true);
    setCoverageStatus('');
    setTimeout(() => {
      setCoverageStatus('Layanan tersedia di area Anda. Silakan pilih paket di bawah ini!');
      setChecking(false);
    }, 900);
  };

  // --- About Section ---
  const aboutFeatures = [
    {
      icon: "bi bi-speedometer2",
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
      icon: "bi bi-graph-up-arrow",
      title: "Monitoring Real-time",
      description: "Sistem monitoring PRTG untuk memastikan kualitas layanan tetap optimal",
      color: "primary"
    }
  ];

  const aboutStats = [
    { number: "1000+", label: "Pelanggan Aktif", color: "primary", icon: "bi bi-people-fill" },
    { number: "99.9%", label: "Uptime SLA", color: "secondary", icon: "bi bi-check-circle-fill" },
    { number: "24/7", label: "Customer Support", color: "accent", icon: "bi bi-clock-fill" },
    { number: "5+", label: "Tahun Pengalaman", color: "primary", icon: "bi bi-award-fill" }
  ];

  // --- Services Section ---
  const services = [
    {
      id: 1,
      icon: "bi bi-wifi",
      title: "Internet Fiber Optik",
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
      whatsapp: 'https://wa.me/6287727999117?text=Hallo, saya tertarik ingin memesan layanan Classic',
      color: 'secondary',
      popular: false
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
      whatsapp: 'https://wa.me/6287727999117?text=Hallo, saya tertarik ingin memesan layanan Bronze',
      color: 'secondary',
      popular: false
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
      whatsapp: 'https://wa.me/6287727999117?text=Hallo, saya tertarik ingin memesan layanan Silver',
      color: 'accent',
      popular: true
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
      whatsapp: 'https://wa.me/6287727999117?text=Hallo, saya tertarik ingin memesan layanan Gold',
      color: 'secondary',
      popular: false
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
      content: "info@mitracom.id",
      link: "mailto:info@mitracom.id",
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

	const logos = [
		{ id: 1, name: '', url: logo1 },
		{ id: 2, name: '', url: logo2 },
		{ id: 3, name: '', url: logo3 },
		{ id: 4, name: '', url: logo4 },
		{ id: 5, name: '', url: logo5 },
    { id: 6, name: '', url: logo6 },
    { id: 7, name: '', url: logo7 },
    { id: 8, name: '', url: logo8 },
	]

	const rowItems = [...logos, ...logos, ...logos ] // duplicate for seamless loop

  const logos1 = [
		{ id: 1, name: '', url: logoa },
		{ id: 2, name: '', url: logob },
		{ id: 3, name: '', url: logoc },
		{ id: 4, name: '', url: logod },
		{ id: 5, name: '', url: logoe },
    { id: 6, name: '', url: logof },
    { id: 7, name: '', url: logog },
    { id: 8, name: '', url: logoh },
	]

	const rowItems1 = [...logos1, ...logos1, ...logos1 ] // duplicate for seamless loop

  return (
    <div className="wrapper" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
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
                        : pkg.id === 2
                          ? 'linear-gradient(135deg, #4f86feff 0%, #0066feff 100%)'
                          : 'linear-gradient(135deg, #ff7e05ff 0%, #f93842ff 100%)',
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
                      <span className="badge bg-warning text-dark px-4 py-2 rounded-pill fw-bold shadow-lg" style={{ fontSize: '1.2rem' }}>
                        🔥 TERPOPULER
                      </span>
                    </div>
                  )}
                  <div className="d-flex justify-content-center mb-3">
                    <span className="badge rounded-pill px-4 py-2 fw-bold" style={{ 
                      background: 'rgba(255,255,255,0.2)', 
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      fontSize:'1.2rem',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                      {pkg.name}
                    </span>
                  </div>
                  <div className="text-center my-4">
                    <div className="display-6 fw-bold mb-1" style={{ 
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
                     }}
                     onMouseOut={(e) => {
                       e.target.style.transform = 'translateY(0)';
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

      {/* Services Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-subtitle">Solusi internet lengkap untuk kebutuhan Anda</p>
          </div>
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm service-card">
                  <div className="card-body text-center p-4">
                    <div className={`${getBgClass(service.color)} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} style={{ width: '64px', height: '64px' }}>
                      <Icon iconClass={service.icon} size="fs-4" />
                    </div>
                    <h5 className="fw-semibold mb-2">{service.title}</h5>
                    <p className="text-muted mb-0">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="pathnet py-5">
        <h2 className="section-heading text-center mb-4">PARTNER KAMI</h2>
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
              {rowItems1.map((item, idx) => (
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

      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="p-4 rounded-4" style={{ background: 'var(--bg-secondary)' }}>
                <h4 className="mb-2">Butuh Bantuan?</h4>
                <p className="text-muted mb-0">Tim support kami siap membantu setiap saat. Hubungi kami melalui WhatsApp atau Telepon.</p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex gap-2 justify-content-lg-end">
                <a href="https://wa.me/6287727999117" className="btn btn-success rounded-pill">
                  <Icon iconClass="bi bi-whatsapp" />
                  <span className="ms-2">WhatsApp</span>
                </a>
                <a href="tel:+6287727999117" className="btn btn-primary rounded-pill">
                  <Icon iconClass="bi bi-telephone" />
                  <span className="ms-2">Telepon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Units;