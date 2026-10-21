import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/ContactPage.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Internet Home & Business",
    message: "",
  });

  const contactMethods = [
    {
      id: 1,
      name: "WhatsApp",
      description: "Hubungi kami via WhatsApp",
      icon: "bi bi-whatsapp",
      link: "https://wa.me/6287727999117?text=Hallo, saya ingin berkonsultasi",
      type: "whatsapp",
      response: "Respon dalam 5 menit",
      displayContact: "+62 877-2799-9117",
    },
    {
      id: 2,
      name: "Email",
      description: "Kirim email ke tim kami",
      icon: "bi bi-envelope",
      link: "mailto:noc@mitracom.id",
      type: "email",
      response: "Respon dalam 24 jam",
      displayContact: "noc@mitracom.id",
    },
    {
      id: 3,
      name: "Telepon",
      description: "Hubungi langsung via telepon",
      icon: "bi bi-telephone",
      link: "tel:+6287727999117",
      type: "phone",
      response: "Respon Langsung",
      displayContact: "+62 877-2799-9117",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(
      `Hallo Mitracom Solusi Teknologi,\nNama: ${formData.name}\nNo. HP/WA: ${formData.phone}\nLayanan yang ditanyakan: ${formData.service}\nPesan: ${formData.message}`
    );
    window.open(`https://wa.me/6287727999117?text=${encodedText}`, "_blank");
  };

  return (
    <div className="contact-page">
      <div className="contact-ambient"></div>

      {/* Header */}
      <div className="contact-header">
        <div className="container">
          <div className="contact-breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <span className="current">Kontak Kami</span>
          </div>
          <div>
            <span className="contact-tag-badge">
              <i className="bi bi-headset"></i> HUBUNGI KAMI
            </span>
          </div>
          <h1 className="contact-title">Kontak Kami</h1>
          <p className="contact-subtitle">
            silahkan hubungi kami dan kami akan menghubungi Anda kembali.
          </p>
        </div>
      </div>

      <div className="container">
        {/* 3 Contact Cards */}
        <div className="contact-cards-section">
          <div className="row g-4">
            {contactMethods.map((method) => (
              <div key={method.id} className="col-lg-4 col-md-6">
                <div className={`contact-method-card ${method.type}`}>
                  <div className="contact-icon-bubble">
                    <i className={method.icon}></i>
                  </div>

                  <h3 className="contact-card-name">{method.name}</h3>
                  <p className="contact-card-desc">{method.description}</p>

                  <div className="contact-card-badge">
                    <i className="bi bi-clock-history"></i>
                    <span>{method.response}</span>
                  </div>

                  <a
                    href={method.link}
                    className="contact-action-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={method.icon}></i>
                    <span>Hubungi Sekarang</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Details & Fast Inquiry Form */}
        <div className="contact-detail-grid">
          <div className="row g-4 align-items-stretch">
            {/* Left: Office Information Panel */}
            <div className="col-lg-5">
              <div className="contact-info-panel">
                <h4 className="panel-title">Informasi Kantor & Layanan</h4>
                <p className="panel-desc">
                  Tim customer care dan teknisi kami selalu siap memberikan solusi
                  terbaik untuk kebutuhan koneksi & teknologi Anda.
                </p>

                <div className="panel-item">
                  <div className="panel-item-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="panel-item-content">
                    <h5>Alamat Kantor Pusat</h5>
                    <p>PT. MITRACOM SOLUSI TEKNOLOGI<br />Indramayu, Jawa Barat - Indonesia</p>
                  </div>
                </div>

                <div className="panel-item">
                  <div className="panel-item-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div className="panel-item-content">
                    <h5>Jam Operasional Kantor</h5>
                    <p>Senin - Sabtu: 08:00 - 17:00 WIB<br />Minggu / Libur: Layanan Janji Temu</p>
                  </div>
                </div>

                <div className="panel-item">
                  <div className="panel-item-icon">
                    <i className="bi bi-hdd-network-fill"></i>
                  </div>
                  <div className="panel-item-content">
                    <h5>NOC & Technical Support</h5>
                    <p>24 Jam Nonstop (7 Hari Seminggu)<br />Pemantauan jaringan & penanganan kendala</p>
                  </div>
                </div>

                <div className="panel-item">
                  <div className="panel-item-icon">
                    <i className="bi bi-envelope-at-fill"></i>
                  </div>
                  <div className="panel-item-content">
                    <h5>Email Resmi</h5>
                    <p>info@mitracom.id | noc@mitracom.id</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Inquiry Form */}
            <div className="col-lg-7">
              <div className="contact-form-panel">
                <h4 className="panel-title">Kirim Pesan / Konsultasi Cepat</h4>
                <p className="panel-desc">
                  Isi formulir di bawah ini untuk konsultasi langsung dengan tim teknis atau sales kami.
                </p>

                <form onSubmit={handleFormSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label-custom">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-control-custom"
                        placeholder="Contoh: Budi Santoso"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label-custom">Nomor WhatsApp / HP</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-control-custom"
                        placeholder="Contoh: 081234567890"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label-custom">Layanan yang Dibutuhkan</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="form-control-custom"
                      >
                        <option value="Internet Home & Business">Internet Home & Business</option>
                        <option value="IT Solution & Konsultasi">IT Solution & Konsultasi</option>
                        <option value="Service Komputer & Laptop">Service Komputer & Laptop</option>
                        <option value="Maintenance Jaringan">Maintenance Jaringan</option>
                        <option value="CCTV & Security System">CCTV & Security System</option>
                        <option value="Web & Aplikasi Custom">Web & Aplikasi Custom</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label-custom">Pesan / Kebutuhan Anda</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className="form-control-custom"
                        placeholder="Tuliskan kendala jaringan atau paket internet yang Anda minati..."
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button type="submit" className="contact-action-btn email" style={{ cursor: "pointer" }}>
                        <i className="bi bi-whatsapp"></i>
                        <span>Kirim Pesan via WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="contact-map-card">
          <div className="map-header">
            <div className="map-header-left">
              <h4>Lokasi Kami</h4>
              <p>Kantor Pusat PT. MITRACOM SOLUSI TEKNOLOGI - Indramayu</p>
            </div>
            <a
              href="https://maps.google.com/?q=MITRACOM+Indramayu"
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions-btn"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              <span>Buka di Google Maps</span>
            </a>
          </div>

          <div className="map-frame-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2110.120395876658!2d108.33581321669405!3d-6.339026198479288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eb956021b98d3%3A0xc4c57c3604eab4d9!2sMITRACOM!5e1!3m2!1sid!2sid!4v1755525840031!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Lokasi Mitracom"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;