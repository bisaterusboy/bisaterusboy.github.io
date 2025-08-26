import React from "react";
// import "../assets/css/priceList.css";
import bisnis1 from '../assets/img/bisnis1.png'

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

function Business() {

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
                    <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Layanan Internet</h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}> <a href="services">Layanan & Produk</a> / Layanan Internet</p>
                </div>

                {/* Google Maps Section */}
                <div className="row mt-2">
                    <div className="col-md-12 mt-2">
                        <div className="row">
                            <div className="col-md-12">
                                <h2><span class="badge text-bg-secondary"><Icon iconClass="bi bi-globe" size="fs-2" /></span> Layanan Internet Home & Busines </h2>
                                <p className="mt-5 d-flex justify-content-between text-justify">
                                    Mitracom adalah penyedia layanan internet yang berdedikasi untuk menghadirkan koneksi cepat, stabil, dan aman bagi masyarakat dan pelaku usaha di wilayah Kabupaten Indramayu. Kami memahami bahwa kebutuhan akan akses digital yang andal semakin penting dalam kehidupan sehari-hari, baik untuk keperluan pribadi maupun profesional. <br />
                                    Kami menawarkan solusi internet yang dirancang khusus untuk rumah tangga dan bisnis, dengan berbagai pilihan paket yang fleksibel dan dapat disesuaikan dengan kebutuhan pengguna. Didukung oleh tim teknis yang ramah, responsif, dan profesional, Mitracom memastikan setiap pelanggan mendapatkan pengalaman layanan yang optimal—mulai dari proses instalasi hingga dukungan teknis berkelanjutan.
                                </p>
                                <img src={bisnis1} class="card-img-top rounded-5 shadow" alt="..."
                                style={{ width: "50%", height: "300px" }}
                                ></img>

                                <h2 className="mt-5"><span class="badge text-bg-secondary"><Icon iconClass="bi bi-house" size="fs-2" /></span> Layanan Internet Rumah </h2>
                                <p className="mt-2 d-flex justify-content-between text-justify">
                                    Nikmati kenyamanan berinternet di rumah dengan kecepatan tinggi dan koneksi stabil, cocok untuk seluruh anggota keluarga.
                                    Fitur Utama:
                                </p>
                                <ul>
                                    <li>Kecepatan hingga 100 Mbps</li>
                                    <li>Kuota unlimited</li>
                                    <li>Instalasi cepat & gratis</li>
                                    <li>Dukungan teknis 24/7</li>
                                </ul>

                                {/* internet bisnis */}

                                <h2 className="mt-5"><span class="badge text-bg-secondary"><Icon iconClass="bi bi-hospital" size="fs-2" /></span> Layanan Internet Bisnis </h2>
                                <p className="mt-2 d-flex justify-content-between">
                                    Dukung operasional bisnis Anda dengan koneksi internet yang tangguh dan dapat disesuaikan dengan kebutuhan perusahaan.
                                    Fitur Utama:
                                </p>
                                <ul>
                                    <li>Dedicated bandwidth</li>
                                    <li>IP publik statis</li>
                                    <li>SLA 99.9% uptime</li>
                                    <li>Monitoring & dukungan prioritas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12">
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
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Business;
