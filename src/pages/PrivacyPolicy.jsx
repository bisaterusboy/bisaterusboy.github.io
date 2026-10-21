import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/PrivacyPolicy.css";

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("mitracom-support");

  const sections = [
    { id: "mitracom-support", title: "1. Mitracom Support", icon: "bi bi-app-indicator" },
    { id: "informasi-dikumpulkan", title: "2. Informasi yang Kami Kumpulkan", icon: "bi bi-file-earmark-text" },
    { id: "data-lokasi", title: "3. Data Lokasi", icon: "bi bi-geo-alt" },
    { id: "penggunaan-informasi", title: "4. Cara Kami Menggunakan Informasi", icon: "bi bi-gear" },
    { id: "berbagi-informasi", title: "5. Berbagi Informasi", icon: "bi bi-share" },
    { id: "keamanan-data", title: "6. Penyimpanan dan Keamanan Data", icon: "bi bi-shield-check" },
    { id: "izin-aplikasi", title: "7. Izin Aplikasi Android", icon: "bi bi-phone" },
    { id: "penggunaan-internal", title: "8. Penggunaan Internal", icon: "bi bi-person-badge" },
    { id: "hak-pengguna", title: "9. Hak Pengguna", icon: "bi bi-person-check" },
    { id: "perubahan-kebijakan", title: "10. Perubahan Kebijakan Privasi", icon: "bi bi-clock-history" },
    { id: "hubungi-kami", title: "11. Kontak Kami", icon: "bi bi-envelope" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-ambient"></div>

      {/* Header */}
      <div className="privacy-header">
        <div className="container">
          <div className="privacy-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Privacy Policy</span>
          </div>
          <div>
            <span className="privacy-tag-badge">
              <i className="bi bi-shield-lock-fill"></i> KEBIJAKAN PRIVASI
            </span>
          </div>
          <h1 className="privacy-title">Kebijakan Privasi</h1>
          <p className="privacy-subtitle">
            Transparansi mengenai komitmen perlindungan data dan pemrosesan informasi pada layanan PT. Mitracom Solusi Teknologi
          </p>
        </div>
      </div>

      <div className="container privacy-content-wrap">
        <div className="row g-4">
          {/* Sticky Table of Contents (Desktop Sidebar) */}
          <div className="col-lg-4 d-none d-lg-block privacy-toc-column">
            <div className="privacy-toc-card">
              <div className="privacy-toc-title">
                <i className="bi bi-list-nested"></i> Daftar Isi Kebijakan
              </div>
              <ul className="privacy-toc-list">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className={`privacy-toc-link ${activeSection === sec.id ? "active" : ""}`}
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Privacy Policy Document */}
          <div className="col-lg-8">
            <div className="privacy-document-card">
              {/* Introduction Callout */}
              <div className="privacy-intro-box">
                <p>
                  <strong>PT. Mitracom Solusi Teknologi</strong> (“Mitracom”, “Kami”) menghargai privasi pengguna dan berkomitmen untuk melindungi informasi yang diproses melalui situs web Mitracom dan aplikasi Mitracom Support.
                </p>
              </div>

              {/* Section 1: Mitracom Support */}
              <div id="mitracom-support" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-app-indicator"></i>
                  </div>
                  <h3 className="privacy-section-title">Mitracom Support</h3>
                </div>
                <p className="privacy-paragraph">
                  Merupakan aplikasi internal yang digunakan oleh karyawan dan personel yang berwenang di PT. Mitracom Solusi Teknologi untuk mendukung kegiatan operasional perusahaan.
                </p>
                <div className="privacy-callout">
                  <i className="bi bi-info-circle-fill privacy-callout-icon"></i>
                  <p className="privacy-callout-text">
                    Dengan menggunakan situs web dan/atau aplikasi Mitracom Support, Anda menyetujui pemrosesan informasi sebagaimana dijelaskan dalam Kebijakan Privasi ini.
                  </p>
                </div>
              </div>

              {/* Section 2: Informasi yang Kami Kumpulkan */}
              <div id="informasi-dikumpulkan" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <h3 className="privacy-section-title">Informasi yang Kami Kumpulkan</h3>
                </div>
                <p className="privacy-paragraph">
                  Kami dapat memproses informasi yang diperlukan untuk menjalankan layanan dan fungsi Mitracom Support, termasuk:
                </p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Informasi akun yang diperlukan untuk proses login dan autentikasi;</span>
                  </li>
                  <li className="privacy-list-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Informasi perangkat, seperti jenis perangkat, sistem operasi, versi aplikasi, dan informasi teknis lainnya yang diperlukan untuk menjalankan dan menjaga keamanan aplikasi;</span>
                  </li>
                  <li className="privacy-list-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Data lokasi perangkat, apabila diperlukan oleh fitur tertentu dalam aplikasi; dan</span>
                  </li>
                  <li className="privacy-list-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Informasi lain yang diberikan atau diproses melalui aplikasi untuk mendukung kegiatan operasional internal perusahaan.</span>
                  </li>
                </ul>
                <p className="privacy-paragraph">
                  Kami berupaya membatasi pengumpulan informasi hanya pada data yang diperlukan untuk menjalankan fungsi aplikasi dan kebutuhan operasional perusahaan.
                </p>
              </div>

              {/* Section 3: Data Lokasi */}
              <div id="data-lokasi" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <h3 className="privacy-section-title">Data Lokasi</h3>
                </div>
                <p className="privacy-paragraph">
                  Mitracom Support dapat mengakses data lokasi perangkat untuk mendukung fitur dan kegiatan operasional internal yang memerlukan informasi lokasi.
                </p>
                <p className="privacy-paragraph">
                  Data lokasi dapat digunakan untuk mendukung kebutuhan operasional, seperti memastikan informasi lokasi tersedia untuk fungsi aplikasi yang memerlukannya.
                </p>
                <p className="privacy-paragraph">
                  Akses terhadap data lokasi dilakukan berdasarkan izin yang diberikan melalui perangkat Android. Pengguna dapat melihat, mengatur, atau mencabut izin akses lokasi melalui pengaturan perangkat.
                </p>
                <div className="privacy-callout">
                  <i className="bi bi-shield-exclamation privacy-callout-icon"></i>
                  <p className="privacy-callout-text">
                    Data lokasi tidak digunakan untuk tujuan di luar kebutuhan fungsi aplikasi dan operasional internal perusahaan.
                  </p>
                </div>
              </div>

              {/* Section 4: Cara Kami Menggunakan Informasi */}
              <div id="penggunaan-informasi" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-gear"></i>
                  </div>
                  <h3 className="privacy-section-title">Cara Kami Menggunakan Informasi</h3>
                </div>
                <p className="privacy-paragraph">
                  Informasi yang diproses melalui Mitracom Support dapat digunakan untuk:
                </p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <span>Menyediakan dan menjalankan fungsi aplikasi;</span>
                  </li>
                  <li className="privacy-list-item">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <span>Melakukan login dan autentikasi pengguna;</span>
                  </li>
                  <li className="privacy-list-item">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <span>Mendukung kegiatan operasional internal perusahaan;</span>
                  </li>
                  <li className="privacy-list-item">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <span>Mendukung fitur yang membutuhkan informasi lokasi;</span>
                  </li>
                  <li className="privacy-list-item">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <span>Menjaga keamanan, kestabilan, dan kinerja aplikasi;</span>
                  </li>
                  <li className="privacy-list-item">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <span>Melakukan pemeliharaan, perbaikan, dan pengembangan aplikasi; dan</span>
                  </li>
                  <li className="privacy-list-item">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <span>Menangani masalah teknis atau kebutuhan dukungan pengguna.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5: Berbagi Informasi */}
              <div id="berbagi-informasi" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-share"></i>
                  </div>
                  <h3 className="privacy-section-title">Berbagi Informasi</h3>
                </div>
                <p className="privacy-paragraph">
                  Informasi yang diproses melalui Mitracom Support digunakan untuk kebutuhan internal PT. Mitracom Solusi Teknologi.
                </p>
                <p className="privacy-paragraph">
                  <strong>Kami tidak menjual informasi pribadi pengguna.</strong>
                </p>
                <p className="privacy-paragraph">
                  Apabila diperlukan untuk menjalankan, memelihara, atau mengamankan aplikasi, informasi dapat diproses melalui sistem atau penyedia layanan teknologi yang digunakan oleh Mitracom. Akses terhadap informasi dibatasi sesuai kebutuhan dan tujuan layanan.
                </p>
              </div>

              {/* Section 6: Penyimpanan dan Keamanan Data */}
              <div id="keamanan-data" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <h3 className="privacy-section-title">Penyimpanan dan Keamanan Data</h3>
                </div>
                <p className="privacy-paragraph">
                  Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi dari akses, penggunaan, perubahan, pengungkapan, atau pemrosesan yang tidak sah.
                </p>
                <p className="privacy-paragraph">
                  Informasi disimpan selama diperlukan untuk menjalankan fungsi aplikasi, mendukung kebutuhan operasional perusahaan, atau memenuhi kewajiban hukum yang berlaku.
                </p>
              </div>

              {/* Section 7: Izin Aplikasi */}
              <div id="izin-aplikasi" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-phone"></i>
                  </div>
                  <h3 className="privacy-section-title">Izin Aplikasi</h3>
                </div>
                <p className="privacy-paragraph">
                  Mitracom Support dapat meminta izin tertentu pada perangkat Android untuk menjalankan fungsi aplikasi.
                </p>
                <p className="privacy-paragraph">
                  Salah satu izin yang dapat digunakan adalah akses lokasi, yang diperlukan oleh fitur tertentu dalam aplikasi untuk mendukung kebutuhan operasional.
                </p>
                <p className="privacy-paragraph">
                  Pengguna dapat melihat dan mengatur izin aplikasi melalui pengaturan perangkat Android. Menonaktifkan izin tertentu dapat menyebabkan fitur yang membutuhkan izin tersebut tidak dapat berfungsi secara optimal.
                </p>
              </div>

              {/* Section 8: Penggunaan Internal */}
              <div id="penggunaan-internal" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-person-badge"></i>
                  </div>
                  <h3 className="privacy-section-title">Penggunaan Internal</h3>
                </div>
                <p className="privacy-paragraph">
                  Mitracom Support ditujukan untuk penggunaan internal oleh karyawan dan personel yang berwenang di PT. Mitracom Solusi Teknologi.
                </p>
                <p className="privacy-paragraph">
                  Informasi yang diproses melalui aplikasi digunakan untuk mendukung kegiatan dan kebutuhan pekerjaan serta operasional perusahaan.
                </p>
              </div>

              {/* Section 9: Hak Pengguna */}
              <div id="hak-pengguna" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-person-check"></i>
                  </div>
                  <h3 className="privacy-section-title">Hak Pengguna</h3>
                </div>
                <p className="privacy-paragraph">
                  Pengguna dapat meminta informasi mengenai pemrosesan data pribadi melalui Mitracom Support atau menyampaikan pertanyaan terkait privasi kepada Kami melalui kontak yang tersedia.
                </p>
                <p className="privacy-paragraph">
                  Pengguna juga dapat mengatur izin akses aplikasi, termasuk izin lokasi, melalui pengaturan perangkat Android.
                </p>
              </div>

              {/* Section 10: Perubahan Kebijakan Privasi */}
              <div id="perubahan-kebijakan" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <h3 className="privacy-section-title">Perubahan Kebijakan Privasi</h3>
                </div>
                <p className="privacy-paragraph">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk menyesuaikan dengan perubahan aplikasi, layanan, kebutuhan operasional, atau ketentuan yang berlaku.
                </p>
                <p className="privacy-paragraph">
                  Perubahan akan ditampilkan pada halaman ini dengan mencantumkan tanggal pembaruan terbaru.
                </p>
              </div>

              {/* Section 11: Hubungi Kami */}
              <div id="hubungi-kami" className="privacy-section-block">
                <div className="privacy-section-header">
                  <div className="section-icon-badge">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <h3 className="privacy-section-title">Hubungi Kami</h3>
                </div>
                <p className="privacy-paragraph">
                  Jika Anda memiliki pertanyaan atau permintaan terkait Kebijakan Privasi atau pemrosesan informasi melalui Mitracom Support, silakan hubungi kami melalui:
                </p>

                <div className="privacy-contact-box">
                  <h5>PT. MITRACOM SOLUSI TEKNOLOGI</h5>
                  <div className="privacy-contact-item">
                    <i className="bi bi-globe"></i>
                    <span>
                      Website:{" "}
                      <a href="https://mitracom.id/" target="_blank" rel="noopener noreferrer">
                        https://mitracom.id/
                      </a>
                    </span>
                  </div>
                  <div className="privacy-contact-item">
                    <i className="bi bi-envelope-fill"></i>
                    <span>
                      Email:{" "}
                      <a href="mailto:info@mitracom.id">
                        info@mitracom.id
                      </a>
                    </span>
                  </div>
                  <p className="mt-3 mb-0" style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    Kebijakan Privasi ini berlaku untuk penggunaan situs web Mitracom dan aplikasi My Mitracom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
