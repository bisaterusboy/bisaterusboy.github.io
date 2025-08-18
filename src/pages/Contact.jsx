import React from "react";
// import "../assets/css/priceList.css";

function Contact() {
  const contactMethods = [
    {
      id: 1,
      name: 'WhatsApp',
      description: 'Hubungi kami via WhatsApp',
      icon: 'bi bi-whatsapp',
      link: 'https://wa.me/6282260601982?text=Hallo, saya ingin berkonsultasi',
      color: 'primary',
      response: 'Respon dalam 5 menit'
    },
    {
      id: 2,
      name: 'Email',
      description: 'Kirim email ke tim kami',
      icon: 'bi bi-envelope',
      link: 'mailto:info@kanggawe.com',
      color: 'secondary',
      response: 'Respon dalam 24 jam'
    },
    {
      id: 3,
      name: 'Telepon',
      description: 'Hubungi langsung via telepon',
      icon: 'bi bi-telephone',
      link: 'tel:+6282260601982',
      color: 'accent',
      response: 'Respon langsung'
    },
    // {
    //   id: 4,
    //   name: 'Live Chat',
    //   description: 'Chat langsung dengan tim support',
    //   icon: 'bi bi-chat-dots',
    //   link: '#',
    //   color: 'primary',
    //   response: 'Respon real-time'
    // }
  ];

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

  const getColorClass = (color) => {
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

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Hubungi Kami</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>PILIH METODE KONTAK YANG TEPAT</p>
        </div>
        
        <div className="row g-4">
          {contactMethods.map((method) => (
            <div key={method.id} className="col-lg-4 col-md-6">
              <div className={getColorClass(method.color)}>
                <div className="package-icon">
                  <Icon iconClass={method.icon} size="fs-1" />
                </div>
                
                <h4 className="h5 fw-semibold mb-2">{method.name}</h4>
                <p className="mb-3 text-white-75">{method.description}</p>
                
                <div className="mb-4">
                  <p className="mb-3 fw-medium">{method.response}</p>
                </div>
                
                <a 
                  href={method.link}
                  className="btn btn-light text-primary-custom fw-semibold w-100 rounded-pill"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon iconClass={method.icon} size="fs-6" />
                  <span className="ms-2">Hubungi Sekarang</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card card-custom p-4 rounded-4 shadow">
              <h4 className="text-primary-custom text-center mb-4">Lokasi Kami</h4>
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2110.120395876658!2d108.33581321669405!3d-6.339026198479288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eb956021b98d3%3A0xc4c57c3604eab4d9!2sMITRACOM!5e1!3m2!1sid!2sid!4v1755525840031!5m2!1sid!2sid" 
                
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: 'var(--border-radius)' }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;