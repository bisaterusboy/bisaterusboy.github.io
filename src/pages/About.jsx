// src/pages/About.jsx
import React from "react";
import header from "../assets/img/tentang-kami.png";

const About = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      <main className="container">
        <div className="pb-4 text-white rounded" >
           <img src={header} alt="Logo" style={{ 
                                width: "100%", height: "300px" 
                                }}/>
          <div className="col-md-6 px-0">
            
                                                                    
                              
            {/* <h1 className="display-4 fst-italic">
              Tentang Kanggawe Technology
            </h1> */}
            {/* <p className="lead my-3">
              Kami adalah perusahaan teknologi yang berkomitmen untuk memberikan solusi inovatif 
              dalam pengembangan web, aplikasi mobile, dan layanan digital yang membantu bisnis 
              berkembang di era digital.
            </p> */}
            {/* <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Pelajari Lebih Lanjut...
              </a>
            </p> */}
          </div>
        </div>

        {/* <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2" style={{ color: 'var(--primary-color)' }}>
                  Layanan Utama
                </strong>
                <h3 className="mb-0" style={{ color: 'var(--text-primary)' }}>Pengembangan Web</h3>
                <div className="mb-1 text-muted">Solusi Website Modern</div>
                <p className="card-text mb-auto" style={{ color: 'var(--text-secondary)' }}>
                  Kami mengembangkan website responsif, cepat, dan SEO-friendly 
                  yang membantu bisnis Anda tumbuh di dunia digital.
                </p>
                <a href="#" className="stretched-link" style={{ color: 'var(--primary-color)' }}>
                  Lihat Portfolio
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Gambar Mini"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Web Development</title>
                  <rect width="100%" height="100%" fill="var(--gray-500)" />
                  <text x="50%" y="50%" fill="var(--text-light)" dy=".3em">
                    Web Development
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2" style={{ color: 'var(--accent-color)' }}>
                  Inovasi
                </strong>
                <h3 className="mb-0" style={{ color: 'var(--text-primary)' }}>Aplikasi Mobile</h3>
                <div className="mb-1 text-muted">iOS & Android</div>
                <p className="mb-auto" style={{ color: 'var(--text-secondary)' }}>
                  Aplikasi mobile yang user-friendly dengan teknologi terbaru 
                  untuk memberikan pengalaman terbaik bagi pengguna.
                </p>
                <a href="#" className="stretched-link" style={{ color: 'var(--primary-color)' }}>
                  Pelajari Lebih Lanjut
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Gambar Mini"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Mobile App</title>
                  <rect width="100%" height="100%" fill="var(--gray-500)" />
                  <text x="50%" y="50%" fill="var(--text-light)" dy=".3em">
                    Mobile App
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row g-5">
          <div className="col-md-8 pb-5">
            <h3 className="pb-4 mb-4 fst-italic border-bottom" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>Tentang Kami</h3>

            <article className="blog-post">
              <h2 className="blog-post-title" style={{ color: 'var(--text-primary)' }}>Visi & Misi Kami</h2>
              <p className="blog-post-meta" style={{ color: 'var(--text-secondary)' }}>
                Didirikan pada 2010<a href="#" style={{ color: 'var(--primary-color)' }}></a>
              </p>

              <ul style={{ color: 'var(--text-secondary)' }}>
                <li>Menjadi penyedia layanan dan solusi teknologi informasi yang inovatif, handal dan terpercaya dengan harga yang bersaing.</li>
              <li>Menjadi perusahaan penyedia jasa internet terbaik dan terpecaya.</li>
              </ul>
              <hr style={{ borderColor: 'var(--border-color)' }} />

              <ul style={{ color: 'var(--text-secondary)' }}>
                <li>Meningkatkan pelayanan untuk mencapai kepuasa konsumen dalam bidang jasa koneksi internet.</li>
              <li>Memeratakan jaringan koneksi internet ke seluruh pelosok daerah.</li>
              <li>Meningkatnya kebutuhan akan infrastruktur jaringan yang handal.</li>
              <li>PT Mitracom Solusi Teknologi (Mitracom) telah mulai merintis jalan untuk menjadi salah satu Penyedia Layanan Internet terbaik di Indonesia.</li>
              </ul>
              
              <h2 style={{ color: 'var(--text-primary)' }}>Nilai-Nilai Kami</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Berikut adalah prinsip-prinsip yang memandu setiap langkah kami:</p>
              <blockquote className="blockquote" style={{ borderLeft: '4px solid var(--primary-color)', paddingLeft: '1rem', backgroundColor: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>
                <p style={{ color: 'var(--text-secondary)' }}>"The Best Partner Your Internet Connection"</p>
              </blockquote>
              <p style={{ color: 'var(--text-secondary)' }}>
                Kami percaya bahwa teknologi harus mudah digunakan, bermanfaat, dan memberikan 
                nilai tambah bagi pengguna. Setiap solusi yang kami buat dirancang dengan 
                mempertimbangkan kebutuhan pengguna dan tujuan bisnis klien kami.
              </p>
              <h3 style={{ color: 'var(--text-primary)' }}>Layanan Kami</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Kami menawarkan berbagai layanan teknologi yang komprehensif untuk memenuhi 
                kebutuhan digital bisnis Anda:
              </p>
              <ul style={{ color: 'var(--text-secondary)' }}>
                <li>Layanan Internet Fiber Optik</li>
                <li>
                  CCTV & Keamanan bisnis anda
                </li>
                <li>Maintenance Jaringan Bisnis anda</li>
                <li>Service komputer & laptop</li>
                <li>Marketing & Penjualan</li>
              </ul>
              <p style={{ color: 'var(--text-secondary)' }}>Proses kerja kami yang terstruktur:</p>
              <ol style={{ color: 'var(--text-secondary)' }}>
                <li>Konsultasi & Analisis Kebutuhan</li>
                <li>
                  Perencanaan & Desain Sistem
                </li>
                <li>Pengembangan & Testing</li>
                <li>Deployment & Launch</li>
                <li>Maintenance & Support</li>
              </ol>
              {/* <p style={{ color: 'var(--text-secondary)' }}>Teknologi yang kami kuasai:</p>
              <dl style={{ color: 'var(--text-secondary)' }}>
                <dt style={{ color: 'var(--text-primary)' }}>Frontend Development</dt>
                <dd>
                  React.js, Vue.js, Angular, HTML5, CSS3, JavaScript, TypeScript
                </dd>
                <dt style={{ color: 'var(--text-primary)' }}>Backend Development</dt>
                <dd>Node.js, PHP, Python, Java, .NET, Database Management</dd>
                <dt style={{ color: 'var(--text-primary)' }}>Mobile Development</dt>
                <dd>
                  React Native, Flutter, Swift, Kotlin, Android SDK
                </dd>
              </dl> */}
              <h2 style={{ color: 'var(--text-primary)' }}>Keunggulan Kami</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Kami bangga dengan <strong>pengalaman dan keahlian</strong> tim kami dalam 
                teknologi terbaru. Setiap proyek dikerjakan dengan <em>dedikasi tinggi </em> 
                dan <code style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>best practices </code> 
                industri.<a href="#" style={{ color: 'var(--primary-color)' }}></a> 
              </p>
              <h3 style={{ color: 'var(--text-primary)' }}>Statistik Perusahaan</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Berikut adalah pencapaian kami:</p>
              <div className="table-responsive">
                <table className="table" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}>
                  <thead>
                    <tr>
                      <th style={{ borderColor: 'var(--border-color)' }}>#</th>
                      <th style={{ borderColor: 'var(--border-color)' }}>Metrik</th>
                      <th style={{ borderColor: 'var(--border-color)' }}>Jumlah</th>
                      <th style={{ borderColor: 'var(--border-color)' }}>Tahun</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ borderColor: 'var(--border-color)' }}>1</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>Proyek Selesai</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>150+</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>2010-2025</td>
                    </tr>
                    <tr>
                      <td style={{ borderColor: 'var(--border-color)' }}>2</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>Klien Puas</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>100+</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>2010-2025</td>
                    </tr>
                    {/* <tr>
                      <td style={{ borderColor: 'var(--border-color)' }}>3</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>Tim Developer</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>25+</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>2025</td>
                    </tr> */}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td style={{ borderColor: 'var(--border-color)' }}>4</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>Rating Kepuasan</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>4.9/5</td>
                      <td style={{ borderColor: 'var(--border-color)' }}>2025</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              {/* <h3 style={{ color: 'var(--text-primary)' }}>Tim Kami</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Tim profesional yang siap membantu Anda:</p>
              <img
                src="https://via.placeholder.com/800x400"
                className="img-fluid"
                alt="Tim Kanggawe Technology"
                style={{ borderRadius: 'var(--border-radius)' }}
              /> */}
            </article>

            {/* <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary" href="#" style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>
                Portfolio Kami
              </a>
              <a
                className="btn btn-outline-secondary"
                href="#"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
              >
                Hubungi Kami
              </a>
            </nav> */}
          </div>

          <div className="col-md-4">
            <div className="position-sticky py-3 mt-3" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 mt-4 rounded" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <h4 className="fst-italic" style={{ color: 'var(--text-primary)' }}>Tentang Mitracom</h4>
                <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>
                  PT Mitracom Solusi Teknologi  Adalah Perusahaan Yang Bergerak Dalam Bidang Penyedia Jasa Jaringan Internet, Kami Berdiri Pada Tahun 2010.
                  Kenapa "The Best Partner Your Internet Connection" Kami bukan sekadar penjual produk teknologi. Kami adalah mitra ahli yang memahami 
                  tantangan dan menyediakan jawaban yang lengkap, efektif, dan 
                  terintegrasi untuk membantu bisnis atau aktivitas  berjalan lebih baik melalui penerapan teknologi yang tepat
                Kami Akan Terus Berkembang, Baik Secara Teknologi, dan Kami Utamakan Pelayanan Terhadap Pelanggan-Pelanggan Kami. Dengan Komitmen - Layanan - Kepercayaan
                </p>
              </div>

              <div className="p-4" style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--border-radius)' }}>
                <h4 className="fst-italic" style={{ color: 'var(--text-primary)' }}>Layanan Unggulan</h4>
                <ol className="list-unstyled mb-0">
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Layanan Internet Fiber Optik</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Maintenance Jaringan Bisnis anda</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>CCTV & Keamanan bisnis anda</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Service komputer & laptop</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Marketing & Penjualan</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Digital Marketing</a>
                  </li>
                </ol>
              </div>

              {/* <div className="p-4" style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--border-radius)' }}>
                <h4 className="fst-italic" style={{ color: 'var(--text-primary)' }}>Hubungi Kami</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Email: info@kanggawe.com</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Phone: +62 21 1234 5678</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>WhatsApp: +62 812 3456 7890</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Alamat: Jakarta, Indonesia</a>
                  </li>
                </ol>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default About;
