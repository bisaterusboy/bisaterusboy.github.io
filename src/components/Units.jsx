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

// partner kami 3
import logo1a from "../assets/img/partner/Setda.png";
import logo1b from "../assets/img/partner/pptr.png";
import logo1c from "../assets/img/partner/smr.png";
import logo1d from "../assets/img/partner/thc.png";
import logo1e from "../assets/img/partner/kingpolah.png";
import logo1f from "../assets/img/partner/grahasudirman.png";
import logo1g from "../assets/img/partner/Inspektorat.jpg";
import logo1h from "../assets/img/partner/dadap.png";

// Assets/img logos
import eslog1 from "../assets/img/classic.png";
import eslog2 from "../assets/img/bronze.png";
import eslog3 from "../assets/img/silver.png";
import eslog4 from "../assets/img/gold.png";



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



  // --- Services Section ---
  const services = [
   {
    title: "Layanan Internet Business (Dedicated)",
    description: "Paket internet cepat dan stabil untuk bisnis.",
    icon: "bi bi-wifi",
    color: "primary"
  },
  {
    title: "CCTV & Security",
    description: "Instalasi dan maintenance CCTV serta layanan CCTV Security.",
    icon: "bi bi-camera-video",
    color: "primary"
  },
  {
    title: "IT Solution & Konsultasi",
    description: "Solusi IT, konsultasi, dan pengembangan sistem sesuai kebutuhan.",
    icon: "bi bi-lightbulb",
    color: "secondary"
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
        '10 Mbps (Up to*)',
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
        '15 Mbps (Up to*)',
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
      price: 'Rp. 190.000,-',
      speed: '',//kecepatan layanan
      features: [
        'Home Broadband',
        '25 Mbps (Up to*)',
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
      price: 'Rp. 390.000',
      speed: '',//kecepatan layanan
      features: [
        'Home Broadband',
        '35 Mbps (Up to*)',
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

  const logos3 = [
		{ id: 1, name: '', url: logo1a },
		{ id: 2, name: '', url: logo1b },
		{ id: 3, name: '', url: logo1c },
		{ id: 4, name: '', url: logo1d },
		{ id: 5, name: '', url: logo1e },
    { id: 6, name: '', url: logo1f },
    { id: 7, name: '', url: logo1g },
    { id: 8, name: '', url: logo1h },
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
                      ? 'linear-gradient(135deg, rgba(131, 120, 145, 1) 0%, rgba(58, 56, 56, 1) 100%)' 
                      : pkg.id === 1 
                        ? 'linear-gradient(135deg, rgba(31, 122, 175, 1) 0%, rgba(13, 35, 59, 1) 100%)'
                        : pkg.id === 2
                          ? 'linear-gradient(135deg, rgb(88 76 39) 0%, rgb(76 22 22) 100%)'
                          : 'linear-gradient(135deg, rgba(77, 71, 20, 1) 0%, rgba(168, 81, 0, 1) 100%)',
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
                                    {/* Logo Section */}

                  <div className="text-center my-4">
                    <div className="display-6 fw-bold mb-1" style={{ 
                      color: 'white',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      {pkg.speed.replace(' (Up to*)', '')}
                    </div>
                    {/* <div className="small" style={{ color: 'rgba(255,255,255,0.8)' }}>Kecepatan hingga</div> */}
                  </div>
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
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-subtitle">Kami menghadirkan produk dan jasa unggulan yang dirancang khusus untuk memenuhi kebutuhan anda</p>
          </div>
          {/* <div className="row g-4">
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
          </div> */}
        <div className="row g-4">
          {services.map((srv, idx) => (
            <div key={idx} className="col-md-12 col-lg-4">
              <div className="card h-100 border-0 shadow-sm service-card"
                style={{
                  minHeight: '280px',
                  background: '#d5eff7ff',
                  color: '#9e1d1dff',
                  transition: 'transform 0.2s, box-shadow 0.5s',
                  boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 16px 40px 0 rgba(31,38,135,0.28)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31,38,135,0.18)';
                }}
              >
                <div className={'${getBgClass(service.color)} mb-3'}>
                  <i className={`${srv.icon} fs-1`} style={{ fontSize: '3rem', textShadow: '0 2px 8px #0002' }}></i>
                </div>
                <h4 className="fw-bold mb-2" style={{ color: '#000000ff', fontSize: '1.35rem', letterSpacing: '1px' }}>{srv.title}</h4>
                <p className="mb-2" style={{ color: '#000000ff', fontSize: '1.08rem' }}>{srv.description}</p>
                <div className="mt-3">
                  <span className="badge bg-warning" style={{ fontSize: '0.95rem', padding: '0.5em 1em', background: 'var(--primary-color)', color: '#fff', borderRadius: '12px' }}>
                    <a href="/business" style={{textDecoration: 'none'}}>{srv.title.includes('Internet') && 'Business'}</a>
                    <a href="/hardwaresoftware" style={{textDecoration: 'none'}}>{srv.title.includes('Komputer') && 'Hardware & Software'}</a>
                    <a href="/maintenanceinternet" style={{textDecoration: 'none'}}>{srv.title.includes('Maintenance') && 'Jaringan LAN/WiFi'}</a>
                    <a href="/kamera" style={{textDecoration: 'none'}}>{srv.title.includes('CCTV') && 'Keamanan & Hiburan'}</a>
                    <a href="/konsultan" style={{textDecoration: 'none'}}>{srv.title.includes('IT Solution') && 'Konsultasi & Pengembangan'}</a>
                    <a href="/webdesign" style={{textDecoration: 'none'}}>{srv.title === 'Web Design' && 'Desain Modern'}</a>
                    <a href="/aplikasiweb" style={{textDecoration: 'none'}}>{srv.title === 'Web Development' && 'Aplikasi Web'}</a>
                    <a href="/marketing" style={{textDecoration: 'none'}}>{srv.title === 'Marketing' && 'Promosi Online'}</a>
                  </span>
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
          <div className="marquee marquee--reverse mt-3" role="list" aria-label="logo marquee center">
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
          <div className="marquee" role="list" aria-label="logo marquee top">
            <div className="marquee__track">
              {rowItems3.map((item, idx) => (
                <div key={`top-${item.id}-${idx}`} className="brand-slide" role="listitem">
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
              <div className="d-flex gap-2 justify-content-lg-center">
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