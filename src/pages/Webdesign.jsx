import React from "react";
// import "../assets/css/priceList.css";
import internet1 from '../assets/img/internet1.png'

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

function Webdesign() {

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
                    <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Web Design</h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}> <a href="services">Layanan & Produk</a> / Design Modern</p>
                </div>

                {/* Google Maps Section */}
                <div className="row mt-2">
                    <div className="col-md-12 mt-2">
                        <div className="row">
                            <div className="col-md-12">
                                <h2><span class="badge text-bg-secondary"><Icon iconClass="bi bi-stars" size="fs-2" /></span> Jasa Web Design Profesional  </h2>

                                <center><img src={internet1} className="card-img-top rounded-5 shadow mt-3" alt="..." 
                                style={{ width: "80%", height: "400px" }}
                                ></img></center>

                                <p className="mt-2 d-flex justify-content-between mt-3 text-justify">
                                    Di era digital yang kompetitif ini, sebuah website bukan lagi sekadar informasi, melainkan aset digital terpenting Anda. Desain website yang menarik, profesional, dan mudah digunakan adalah kunci untuk membangun kepercayaan, meningkatkan kredibilitas, dan mendorong pertumbuhan bisnis. <br />
                                    Kami hadir untuk membantu Anda mewujudkan visi digital Anda dengan layanan Web Design Profesional yang berfokus pada :
                                </p>
                                <ol className="text-secondary">
                                    <li> Desain Berorientasi Pengguna (User-Centric Design) </li>
                                    <p className="mt-2 d-flex justify-content-between text-justify">
                                        Kami tidak hanya membuat website yang indah, tetapi juga yang efektif. Setiap desain kami diawali dengan riset mendalam untuk memahami audiens Anda, memastikan setiap elemen dan alur navigasi dirancang untuk memberikan pengalaman terbaik bagi pengguna. Hasilnya adalah website yang intuitif, mudah diakses, dan secara alami mengarahkan pengunjung untuk mengambil tindakan yang Anda inginkan, seperti melakukan pembelian atau menghubungi Anda.
                                    </p>
                                    <li> Desain Responsif (Mobile-First)</li>
                                    <p className="mt-2 d-flex justify-content-between text-justify">
                                        Dengan lebih dari separuh trafik internet berasal dari perangkat seluler, memiliki website yang responsif adalah suatu keharusan. Layanan kami menjamin website Anda akan tampil sempurna dan berfungsi optimal di berbagai ukuran layar, mulai dari desktop, tablet, hingga smartphone. Kami memastikan pengalaman pengguna tidak terganggu, terlepas dari perangkat yang mereka gunakan.
                                    </p>
                                    <li> Peningkatan Identitas Merek (Brand Identity) </li>
                                    <p className="mt-2 d-flex justify-content-between text-justify">
                                        Website adalah cerminan dari merek Anda. Tim desainer kami akan bekerja sama dengan Anda untuk menerjemahkan identitas merek Anda—mulai dari logo, palet warna, hingga tipografi—menjadi sebuah desain visual yang konsisten dan kuat. Desain ini akan membantu Anda menonjol dari pesaing dan meninggalkan kesan mendalam di benak audiens.
                                    </p>
                                    <li> Optimalisasi untuk Mesin Pencari (SEO-Friendly)</li>
                                    <p className="mt-2 d-flex justify-content-between text-justify">
                                        Kami merancang website dengan struktur dan elemen yang disukai oleh mesin pencari seperti Google. Desain yang bersih, waktu muat yang cepat, dan navigasi yang logis adalah beberapa faktor yang kami optimalkan untuk memastikan website Anda memiliki performa SEO yang solid. Dengan demikian, website Anda memiliki peluang lebih besar untuk muncul di peringkat teratas hasil pencarian.
                                    </p>
                                </ol>

                                <hr />

                                <h2><span class="badge text-bg-secondary"><Icon iconClass="bi bi-globe" size="fs-2" /></span> Mengapa Memilih Layanan Kami ? </h2>
                                <p className="mt-2 d-flex justify-content-between text-justify">
                                    Kami menggabungkan kreativitas, keahlian teknis, dan pemahaman mendalam tentang bisnis untuk menciptakan solusi web design yang benar-benar memberikan hasil. Dari konsep awal hingga peluncuran, kami adalah mitra Anda dalam setiap langkah. Hubungi kami hari ini untuk konsultasi gratis dan mari ciptakan website impian Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Webdesign;