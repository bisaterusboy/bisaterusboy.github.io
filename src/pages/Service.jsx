import React from "react";
import "../assets/css/priceList.css";
import "../assets/css/Service.css";

// layanankami
const services = [
  {
    title: "Web Design",
    desc: "Desain website profesional dan responsif sesuai kebutuhan bisnis Anda.",
    icon: "bi bi-palette",
    color: "accent"
  },
  {
    title: "Web Development",
    desc: "Pengembangan website dan aplikasi web modern, aman, dan scalable.",
    icon: "bi bi-laptop",
    color: "primary"
  },
  {
    title: "Marketing",
    desc: "Jasa digital marketing, promosi online, dan strategi pemasaran efektif.",
    icon: "bi bi-megaphone",
    color: "accent"
  },
  {
    title: "Layanan Internet",
    desc: "Paket internet cepat dan stabil untuk rumah & bisnis.",
    icon: "bi bi-wifi",
    color: "primary"
  },
  {
    title: "Service Komputer & Laptop",
    desc: "Perbaikan, upgrade, dan instalasi software/hardware.",
    icon: "bi bi-pc-display",
    color: "secondary"
  },
  {
    title: "Maintenance Jaringan",
    desc: "Perawatan dan troubleshooting jaringan LAN/WiFi.",
    icon: "bi bi-diagram-3",
    color: "accent"
  },
  {
    title: "CCTV & Security",
    desc: "Instalasi dan maintenance CCTV serta layanan CCTV Security.",
    icon: "bi bi-camera-video",
    color: "primary"
  },
  {
    title: "IT Solution & Konsultasi",
    desc: "Solusi IT, konsultasi, dan pengembangan sistem sesuai kebutuhan.",
    icon: "bi bi-lightbulb",
    color: "secondary"
  }
];

//pricelist
const packages = [
  {
    id: 1,
    name: 'Classic',
    price: 'Rp. 120.000,-',
    speed: '5 Mbps (Up to*)',
    features: [
      'Home Broadband',
      'Tanpa FUP',
      'Unlimited Download',
      'Unlimited Upload'
    ],
    whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Home 1',
    color: 'primary'
  },
  {
    id: 2,
    name: 'Bronze',
    price: 'Rp. 165.000,-',
    speed: '10 Mbps (Up to*)',
    features: [
      'Home Broadband',
      'Tanpa FUP',
      'Unlimited Download',
      'Unlimited Upload'
    ],
    whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Home 2',
    color: 'secondary'
  },
  {
    id: 3,
    name: 'Silver',
    price: 'Rp. 190.000,-',
    speed: '20 Mbps (Up to*)',
    features: [
      'Home Broadband',
      'Tanpa FUP',
      'Unlimited Download',
      'Unlimited Upload'
    ],
    whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Home 3',
    color: 'accent'
  },
  {
    id: 4,
    name: 'Gold',
    price: 'Rp. 390.000',
    speed: '30 Mbps (Up to*)',
    features: [
      'Home Broadband',
      'Tanpa FUP',
      'Unlimited Download',
      'Unlimited Upload'
    ],
    whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Home 4',
    color: 'primary'
  }
];

function Service() {
  return (
    <section className="section-padding" style={{ background: '', minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ color: 'var(--primary-color)', fontWeight: 'bold', letterSpacing: '2px' }}>Layanan Kami</h2>

          <h4 className="mt-5" style={{ color: 'var(--text-dark)', fontSize: '' }}><marquee behavior="" direction="">Kami menghadirkan produk dan jasa unggulan yang dirancang khusus untuk memenuhi kebutuhan infrastruktur anda - dari sistem infrastruktur hingga layanan berbasis teknologi terkini</marquee></h4>


        </div>
        <div className="row g-4 justify-content-center">
          {services.map((srv, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="service-card card-custom p-4 rounded-4 shadow text-center border-0"
                style={{
                  minHeight: '280px',
                  background: '#13A7D4',
                  color: '#eee',
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
                <div className="mb-3">
                  <i className={`${srv.icon} fs-1`} style={{ fontSize: '3rem', textShadow: '0 2px 8px #0002' }}></i>
                </div>
                <h4 className="fw-bold mb-2" style={{ color: '#FFFFFF', fontSize: '1.35rem', letterSpacing: '1px' }}>{srv.title}</h4>
                <p className="mb-2" style={{ color: '#FFFFFF', fontSize: '1.08rem' }}>{srv.desc}</p>
                <div className="mt-3">
                  <span className="badge bg-warning" style={{ fontSize: '0.95rem', padding: '0.5em 1em', background: 'var(--primary-color)', color: '#fff', borderRadius: '12px' }}>
                    <a href="https://bisaterusboy.github.io/bussines">{srv.title.includes('Internet') && 'Home & Business'}</a>
                    <a href="https://bisaterusboy.github.io/hardwaresoftware">{srv.title.includes('Komputer') && 'Hardware & Software'}</a>
                    <a href="https://bisaterusboy.github.io/maintenanceinternet">{srv.title.includes('Maintenance') && 'Jaringan LAN/WiFi'}</a>
                    <a href="https://bisaterusboy.github.io/kamera">{srv.title.includes('CCTV') && 'Keamanan & Hiburan'}</a>
                    <a href="https://bisaterusboy.github.io/konsultan">{srv.title.includes('IT Solution') && 'Konsultasi & Pengembangan'}</a>
                    <a href="https://bisaterusboy.github.io/webdesign">{srv.title === 'Web Design' && 'Desain Modern'}</a>
                    <a href="https://bisaterusboy.github.io/aplikasiweb">{srv.title === 'Web Development' && 'Aplikasi Web'}</a>
                    <a href="https://bisaterusboy.github.io/marketing">{srv.title === 'Marketing' && 'Promosi Online'}</a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}

export default Service;



