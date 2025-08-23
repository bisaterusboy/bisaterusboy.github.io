import React from "react";
// import "../assets/css/priceList.css";
// import internet1 from '../assets/img/internet1.png'

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

function Aplikasiweb() {

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
                    <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Web Development</h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}> <a href="http://localhost:5173/">Home</a> / Web Development</p>
                </div>

                <img src="foto4.jpg" class="card-img-top rounded-5 shadow mb-3" alt="..."></img>

                {/* Google Maps Section */}
                <div className="row mt-2">
                    <div className="col-md-12 mt-2">
                        <div className="row">
                            <div className="col-md-12">
                                <h2><span class="badge text-bg-secondary"><Icon iconClass="bi bi-stars" size="fs-2" /></span> Jasa Web Development Profesional </h2>
                                <p className="mt-3 d-flex justify-content-between mb-5 text-justify">
                                    Di balik setiap website yang menarik dan fungsional, ada proses web development yang solid. Jika web design berfokus pada tampilan, maka web development adalah proses membangun seluruh fungsionalitas dan infrastruktur teknis yang membuat website bisa berjalan dengan baik. Ini adalah fondasi yang kokoh untuk kehadiran digital Anda. <br />

                                    Kami menawarkan layanan web development yang akan mengubah ide Anda menjadi solusi digital yang nyata. Layanan kami mencakup seluruh siklus pengembangan, dari front-end hingga back-end.
                                </p>

                                <h2><span class="badge text-bg-secondary"><Icon iconClass="bi bi-people-fill" size="fs-2" /></span> Front-End Development (Sisi Klien) </h2>
                                <p className="mt-2 d-flex justify-content-between mt-2">
                                    Ini adalah bagian dari website yang langsung berinteraksi dengan pengguna.  Kami menggunakan teknologi modern seperti HTML, CSS, dan JavaScript serta framework seperti React.js, Vue.js, atau Angular untuk membangun antarmuka yang dinamis dan responsif. Kami memastikan website Anda tidak hanya terlihat indah, tetapi juga:
                                </p>
                                <ul>
                                    <li className="text-secondary ">Responsif: Tampil sempurna di semua perangkat, baik desktop, tablet, maupun smartphone.</li>
                                    <li className="text-secondary">Interaktif: Menyediakan pengalaman pengguna yang mulus melalui animasi, formulir, dan elemen interaktif lainnya.</li>
                                    <li className="text-secondary">Cepat: Dioptimalkan untuk waktu muat yang cepat, yang krusial untuk SEO dan retensi pengunjung.</li>
                                </ul>

                                <h2><span class="badge text-bg-secondary mt-4"><Icon iconClass="bi bi-filetype-php" size="fs-2" /></span> Back-End Development (Sisi Server) </h2>
                                <p className="mt-2 d-flex justify-content-between mt-2">
                                    Ini adalah otak di balik website Anda.  Bagian ini tidak terlihat oleh pengguna, tetapi sangat penting untuk mengelola data, server, dan logika aplikasi. Kami menggunakan bahasa pemrograman seperti Node.js, Python, atau PHP dengan database seperti MySQL atau MongoDB untuk membangun:
                                </p>
                                <ul>
                                    <li className="text-secondary">Sistem Manajemen Konten (CMS): Memungkinkan Anda mengelola konten website dengan mudah tanpa keahlian teknis.</li>
                                    <li className="text-secondary">Integrasi API: Menghubungkan website Anda dengan layanan eksternal, seperti sistem pembayaran, media sosial, atau alat pemasaran.</li>
                                    <li className="text-secondary">Sistem Keamanan: Menerapkan langkah-langkah keamanan untuk melindungi data pengguna dan website dari ancaman siber.</li>
                                </ul>

                                <h2 className="mt-5"><span class="badge text-bg-primary"><Icon iconClass="bi bi-person-fill-lockbi bi-rocket-takeoff-fill" size="fs-2" /></span> Jaminan Kualitas dan Kecepatan </h2>
                                <p className="mt-3 d-flex justify-content-between">
                                    Kami mengikuti praktik terbaik dalam pengembangan perangkat lunak untuk memastikan kode yang bersih, terstruktur, dan mudah dipelihara. Setiap proyek menjalani pengujian menyeluruh untuk memastikan website bebas dari bug dan berfungsi sesuai harapan. Kami berkomitmen untuk menyelesaikan proyek tepat waktu, dengan tetap menjaga standar kualitas tertinggi. <br /> <br />

                                    Dengan layanan web development kami, Anda akan mendapatkan website yang tidak hanya memenuhi kebutuhan Anda hari ini, tetapi juga siap untuk berkembang di masa depan. Hubungi kami sekarang untuk konsultasi gratis dan mari kita bangun fondasi digital yang kuat untuk bisnis Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aplikasiweb;