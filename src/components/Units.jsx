import { Link } from 'react-router-dom';
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
import logo9 from "../assets/img/partner/diskominfo.jpg";
import logo10 from "../assets/img/partner/iforte.png";
import logo11 from "../assets/img/partner/lintasarta.png";

// partner kami 2
import logoa from "../assets/img/partner/djp.png";
import logob from "../assets/img/partner/kingpolah.png";
import logoc from "../assets/img/partner/Ditpolairud.png";
import logod from "../assets/img/partner/easynet.png";
import logoe from "../assets/img/partner/ionet.png";
import logof from "../assets/img/partner/pulsanet.png";
import logog from "../assets/img/partner/Wifique.png";
import logoh from "../assets/img/partner/polytama.png";
import logoi from "../assets/img/partner/Devan.png";
import logoj from "../assets/img/partner/rsud.png";
import logok from "../assets/img/partner/fanet.png";

// partner kami 3
import logo1a from "../assets/img/partner/Setda.png";
import logo1b from "../assets/img/partner/pptr.png";
import logo1c from "../assets/img/partner/smr.png";
import logo1d from "../assets/img/partner/thc.png";
import logo1e from "../assets/img/partner/DPUPR.jpg";
import logo1f from "../assets/img/partner/grahasudirman.png";
import logo1g from "../assets/img/partner/Puskesmas.png";
import logo1h from "../assets/img/partner/dadap.png";
import logo1i from "../assets/img/partner/disduk.png";
import logo1j from "../assets/img/partner/kejaksaan.png";

// Assets/img logos
import eslog1 from "../assets/img/classic.png";
import eslog2 from "../assets/img/bronze.png";
import eslog3 from "../assets/img/silver.png";
import eslog4 from "../assets/img/gold.png";

// logo untuk layanan kami
import imgInternet from "../assets/img/layanan/internet1.jpg";
import imgInternet2 from "../assets/img/layanan/internet2.jpg";
import imgInternet3 from "../assets/img/layanan/internet3.jpg";
import imgCctv from "../assets/img/layanan/cctv1.jpg";
import imgCctv2 from "../assets/img/layanan/cctv2.png";
import imgCctv3 from "../assets/img/layanan/cctv3.jpg";
import imgKonsultan from "../assets/img/layanan/solution1.jpg";
import imgKonsultan2 from "../assets/img/layanan/solution2.jpg";
import imgKonsultan3 from "../assets/img/layanan/solution3.jpg";


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
  // --- Services Section ---
  const services = [
    {
      title: "Internet Home & Business",
      description: "Paket internet Terjangkau, cepat dan stabil untuk bisnis.",
      icon: "bi bi-wifi",
      path: "/business",
      badge: "Home & Business",
      image: imgInternet,
      images: [imgInternet, imgInternet2, imgInternet3],
    },
    {
      title: "CCTV & Security",
      description: "Instalasi dan maintenance CCTV serta layanan CCTV Security.",
      icon: "bi bi-camera-video",
      path: "/kamera",
      badge: "Keamanan & Hiburan",
      image: imgCctv,
      images: [imgCctv, imgCctv2, imgCctv3],
    },
    {
      title: "IT Solution & Konsultasi",
      description: "Solusi IT, konsultasi, dan pengembangan sistem sesuai kebutuhan.",
      icon: "bi bi-lightbulb",
      path: "/konsultan",
      badge: "Konsultasi & Pengembangan",
      image: imgKonsultan,
      images: [imgKonsultan, imgKonsultan2, imgKonsultan3],
    },
  ];

  // --- Portfolio Section ---
  const packages = [
    {
      id: 1,
      name: '',//nama layanan
      logo: 'a',
      price: 'Rp. 120.000,-',
      speed: '',//kecepatan layanan
      features: [
        'Home Broadband',
        'Up To 20 Mbps',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload',
        'S&K Berlaku'
      ],
      whatsapp: 'https://wa.me/6287727999117?text=Hallo, saya tertarik ingin memesan layanan Classic',
      color: 'secondary',
      popular: false
    },
    {
      id: 2,
      name: '',//nama layanan
      logo: 'b',
      price: 'Rp. 165.000,-',
      speed: '',//kecepatan layanan
      features: [
        'Home Broadband',
        'Up To 30 Mbps',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload',
        'S&K Berlaku'
      ],
      whatsapp: 'https://wa.me/6287727999117?text=Hallo, saya tertarik ingin memesan layanan Bronze',
      color: 'secondary',
      popular: false
    },
    {
      id: 3,
      name: '', //nama layanan
      logo: 'c',
      price: 'Rp. 199.000,-',
      speed: '',//kecepatan layanan
      features: [
        'Home Broadband',
        'Up To 50 Mbps',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload',
        'S&K Berlaku'
      ],
      whatsapp: 'https://wa.me/6287727999117?text=Hallo, saya tertarik ingin memesan layanan Silver',
      color: 'accent',
      popular: true
    },
    {
      id: 4,
      name: '',//nama layanan
      logo: 'd',
      price: 'Rp. 249.000',
      speed: '',//kecepatan layanan
      features: [
        'Home Broadband',
        'Up To 100 Mbps',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload',
        'S&K Berlaku'
      ],
      whatsapp: 'https://wa.me/6287727999117?text=Hallo, saya tertarik ingin memesan layanan Gold',
      color: 'secondary',
      popular: false
    }
  ];

	const logos = [
		{ id: 1, name: '', url: logo1 },
		{ id: 2, name: '', url: logo2 },
		{ id: 3, name: '', url: logo3 },
		{ id: 4, name: '', url: logo4 },
		{ id: 5, name: '', url: logo5 },
    { id: 6, name: '', url: logo6 },
    { id: 7, name: '', url: logo7 },
    { id: 8, name: '', url: logo8 },
    { id: 9, name: '', url: logo9 },
    { id: 10, name: '', url: logo10 },
    { id: 11, name: '', url: logo11 },
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
    { id: 9, name: '', url: logoi },
    { id: 10, name: '', url: logoj },
    { id: 11, name: '', url: logok },
	]

	const rowItems1 = [...logos1, ...logos1, ...logos1 ] // duplicate for seamless loop

  const logos3 = [
		{ id: 1, name: '', url: logo1a },
		{ id: 2, name: '', url: logo1b },
		{ id: 3, name: '', url: logo1c },
		{ id: 4, name: '', url: logo1d },
		{ id: 5, name: '', url: logo1e },
    { id: 6, name: '', url: logo1f },
    { id: 7, name: '', url: logo1g },
    { id: 8, name: '', url: logo1h },
    { id: 9, name: '', url: logo1i },
    { id: 10, name: '', url: logo1j },
	]

	const rowItems3 = [...logos3, ...logos3, ...logos3 ] // duplicate for seamless loop

  return (
    <div className="wrapper" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <section id="plans" className="section-padding">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Paket Internet</h2>
            <p className="section-subtitle">Home Broadband</p>
          </div>
          <div className="row g-4">
            {packages.map((pkg) => (
              <div key={pkg.id} className="col-lg-3 col-md-6">
                <div 
                  className={`h-100 p-4 rounded-4 border position-relative ${pkg.popular ? 'popular-card' : ''}`} 
                  style={{ 
                    background: pkg.popular 
                      ? 'linear-gradient(172deg, rgba(212, 211, 208, 1) -5%, rgba(119, 119, 111, 1) 80%)' 
                      : pkg.id === 1 
                        ? 'linear-gradient(135deg, rgba(31, 122, 175, 1) 0%, rgba(13, 35, 59, 1) 100%)'
                        : pkg.id === 2
                          // ? 'linear-gradient(135deg, rgb(215 161 0) 0%, rgb(255 190 0) 100%)'
                          ? 'linear-gradient(135deg, rgb(128, 74, 0) 0%, rgba(168, 81, 0, 1) 100%)'
                          // : 'linear-gradient(135deg, rgb(255, 191, 0) 0%, rgba(168, 81, 0, 1) 100%)',
                          : 'linear-gradient(10deg, rgb(255, 191, 0) 0%, rgb(193 146 1) 100%)',
                    border: pkg.popular ? '3px solid #584747ff' : '2px solid rgba(255,255,255,0.3)',
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
                  
                  <div className="text-center mt-2">
                    <div className="position-relative d-inline-block">
                      {/* Main Logo from assets/img */}
                      <div className="d-inline-flex align-items-center justify-content-center mt-3" style={{
                        width: '130px',
                        height: '130px',
                        background: 'rgba(255,255,255,0.15)',
                        borderRadius: '50%',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255,255,255,0.3)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        overflow: 'hidden'
                      }}
                      >
                        <img className='rounded-circle'
                          src={
                            pkg.id === 1 ? eslog1 : 
                            pkg.id === 2 ? eslog2 : 
                            pkg.id === 3 ? eslog3 : 
                            eslog4
                          }
                          alt={`${pkg.name} Logo`}
                          // alt={`${pkg.name || 'Paket'} Logo`}
                          style={{
                            width: '100%',
                            height: '',
                            objectFit: 'contain',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>                  
                    </div>
                  </div>
                  
                  {pkg.name ? (
                    <div className="d-flex justify-content-center mb-3">
                      <span className="badge rounded-pill px-4 py-2 fw-bold" style={{ 
                        background: 'rgba(255,255,255,0.2)', 
                        color: 'white',
                        backdropFilter: 'blur(10px)',
                        fontSize:'1.5rem',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}>
                        {pkg.name} 
                      </span>
                    </div>
                  ) : null}
                                    {/* Logo Section */}

                  {pkg.speed ? (
                    <div className="text-center my-4">
                      <div className="display-6 fw-bold mb-1" style={{ 
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        {pkg.speed.replace(' (Up to*)', '')}
                      </div>
                    </div>
                  ) : null}
                  <div className="text-center mb-4">
                    <div className="h2 fw-bold mb-0" style={{ 
                      color: 'white',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      {pkg.price}
                    </div>
                    <div className="small" style={{ color: 'rgba(255,255,255,0.8)' }}></div>
                  </div>
                  <ul className="text-center mb-4">
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
                    <span className="ms-2">Pesan Sekarang</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      

      {/* Services Section */}
      <section className="section-padding services-overview-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="services-tag-badge">
              <i className="bi bi-grid-fill"></i> LAYANAN UNGGULAN
            </span>
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-subtitle">
              Kami menghadirkan produk dan jasa unggulan yang dirancang khusus untuk memenuhi kebutuhan anda
            </p>
          </div>

          <div className="row g-4">
            {services.map((srv, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="modern-service-card">
                  {/* Photo Strip Gallery */}
                  <div className="service-photos-strip">
                    {srv.images.map((img, i) => (
                      <div key={i} className="service-photo-frame">
                        <img
                          src={img}
                          alt={`${srv.title} dokumentasi ${i + 1}`}
                          className="service-photo-thumb"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="service-card-content">
                    <span className="service-badge-pill">{srv.badge}</span>
                    <h3 className="service-card-title">
                      <i className={srv.icon}></i> {srv.title}
                    </h3>
                    <p className="service-card-desc">{srv.description}</p>
                    
                    <Link to={srv.path} className="service-card-btn">
                      <span>Pelajari Layanan</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="pathnet">
        <div className="partner-header">
          <span className="partner-badge">
            <i className="bi bi-shield-check"></i> MITRA & REKANAN RESMI
          </span>
          <h2 className="partner-heading">PARTNER KAMI</h2>
          <div className="partner-heading-line"></div>
          <p className="partner-subtitle">
            Dipercaya oleh puluhan instansi pemerintah, institusi publik, dan perusahaan terkemuka di seluruh Indonesia.
          </p>
        </div>

        <div className="brand-rows">
          <div className="marquee" role="list" aria-label="logo marquee top">
            <div className="marquee__track">
              {rowItems.map((item, idx) => (
                <div key={`top-${item.id}-${idx}`} className="brand-slide" role="listitem">
                  <div className="client-card">
                    <img src={item.url} alt={`Partner ${idx + 1}`} className="client-logo" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="marquee marquee--reverse mt-2" role="list" aria-label="logo marquee center">
            <div className="marquee__track">
              {rowItems1.map((item, idx) => (
                <div key={`bottom-${item.id}-${idx}`} className="brand-slide" role="listitem">
                  <div className="client-card">
                    <img src={item.url} alt={`Partner B ${idx + 1}`} className="client-logo" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="marquee mt-2" role="list" aria-label="logo marquee bottom">
            <div className="marquee__track">
              {rowItems3.map((item, idx) => (
                <div key={`third-${item.id}-${idx}`} className="brand-slide" role="listitem">
                  <div className="client-card">
                    <img src={item.url} alt={`Partner C ${idx + 1}`} className="client-logo" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="modern-cta-section">
        <div className="container">
          <div className="modern-cta-card">
            {/* Ambient Background Glows */}
            <div className="cta-ambient-glow cta-glow-1"></div>
            <div className="cta-ambient-glow cta-glow-2"></div>
            <div className="cta-ambient-glow cta-glow-3"></div>

            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="cta-badge-pill">
                  <Icon iconClass="bi bi-headset" />
                  <span className="ms-1">KONSULTASI & DUKUNGAN 24/7</span>
                </span>
                <h2 className="cta-title">
                  Butuh Bantuan atau Solusi Internet Khusus?
                </h2>
                <p className="cta-desc">
                  Tim teknis dan konsultan Mitracom siap membantu Anda memilih paket terbaik, penjadwalan instalasi cepat, hingga kebutuhan integrasi jaringan bisnis dan instansi.
                </p>

                <div className="cta-features-list">
                  <span className="cta-feature-item">
                    <Icon iconClass="bi bi-lightning-charge-fill" />
                    <span className="ms-1">Instalasi Cepat</span>
                  </span>
                  <span className="cta-feature-item">
                    <Icon iconClass="bi bi-shield-check" />
                    <span className="ms-1">Dukungan NOC 24/7</span>
                  </span>
                  <span className="cta-feature-item">
                    <Icon iconClass="bi bi-chat-quote-fill" />
                    <span className="ms-1">Konsultasi Gratis</span>
                  </span>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="cta-actions-box">
                  <a
                    href="https://wa.me/6287727999117?text=Hallo%20Mitracom,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20internet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn-wa"
                  >
                    <Icon iconClass="bi bi-whatsapp" size="fs-5" />
                    <span>Chat WhatsApp Sekarang</span>
                  </a>

                  <a
                    href="tel:+6287727999117"
                    className="cta-btn-tel"
                  >
                    <Icon iconClass="bi bi-telephone-fill" size="fs-6" />
                    <span>Hubungi Sales (+62 877-2799-9117)</span>
                  </a>

                  <div className="cta-status-badge">
                    <span className="cta-pulse-dot"></span>
                    <span>Customer Support & NOC Siap Melayani 24 Jam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Units;