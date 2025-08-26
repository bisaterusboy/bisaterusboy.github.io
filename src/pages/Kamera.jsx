import React from "react";
// import "../assets/css/priceList.css";
import cctv from '../assets/img/cctv.jpg'

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

function Kamera() {

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
                    <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>CCTV & Security</h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}> <a href="services">Layanan & Produk</a> / Keamanan dan Hiburan</p>
                </div>

                {/* Google Maps Section */}
                <div className="row mt-2">
                    <div className="col-md-12 mt-2">
                        <div className="row">
                            <div className="col-md-12">
                                <h2><span class="badge text-bg-secondary"><Icon iconClass="bi bi-camera-video-fill" size="fs-2" /></span> Tingkatkan Keamanan dengan Solusi CCTV & Keamanan Terintegrasi dari Mitracom </h2>
                                <p className="mt-5 d-flex justify-content-between text-justify">
                                    Mitracom, sebagai penyedia layanan internet terdepan, tidak hanya fokus pada konektivitas. Kami memahami bahwa keamanan adalah prioritas utama bagi rumah dan bisnis Anda. Untuk itu, Mitracom hadir dengan solusi CCTV & Security yang terintegrasi, memberikan Anda ketenangan pikiran melalui perlindungan yang komprehensif. <br /> <br />
                                    Dalam dunia yang serba digital, ancaman keamanan tidak hanya datang dari luar jaringan, tetapi juga dari lingkungan fisik. Kehadiran kamera pengawas (CCTV) menjadi esensial untuk memantau aktivitas, mencegah tindak kriminal, dan memberikan bukti saat terjadi insiden.
                                </p>
                                <center><img src={cctv} class="card-img-top rounded-5 shadow" alt="..."
                                style={{ width: "65%", height: "400px" }}
                                ></img></center>

                                <h2 className="mt-5"><span class="badge text-bg-secondary"><Icon iconClass="bi bi-eyeglasses" size="fs-2" /></span> Mengapa Memilih Layanan CCTV & Security Mitracom? </h2>
                                <p className="mt-2 d-flex justify-content-between text-justify">
                                    Kami tidak hanya menjual produk. Kami menyediakan solusi lengkap yang didukung oleh keahlian dan teknologi terkini. Berikut adalah keunggulan layanan kami:
                                </p>
                                <ol className="text-secondary text-justify">
                                    <li>Jaringan Terintegrasi</li>
                                    <p>Layanan kami terintegrasi langsung dengan jaringan internet Mitracom. Ini memungkinkan monitoring real-time yang stabil dan tanpa hambatan. Anda bisa mengakses rekaman dari mana saja, kapan saja, melalui perangkat seluler atau komputer.</p>
                                    <li>Kualitas Gambar Jernih & Resolusi Tinggi</li>
                                    <p>Kami menggunakan kamera CCTV dengan resolusi tinggi (HD hingga 4K) yang menghasilkan gambar tajam dan jelas, bahkan dalam kondisi minim cahaya (fitur night vision). Detail wajah dan plat nomor kendaraan dapat terekam dengan akurat, sangat penting untuk identifikasi.</p>
                                    <li>Paket Lengkap dengan Pemasangan Profesional</li>
                                    <p>Mitracom menyediakan paket All-in-One yang mencakup semua kebutuhan Anda, mulai dari kamera, Digital Video Recorder (DVR) atau Network Video Recorder (NVR), hingga kabel dan instalasi. Tim teknisi kami yang berpengalaman akan memastikan pemasangan dilakukan secara rapi, cepat, dan optimal.</p>
                                    <li>Pemantauan Jarak Jauh (Remote Monitoring)</li>
                                    <p>Dengan aplikasi khusus, Anda bisa memantau seluruh area yang dipasangi kamera secara langsung dari smartphone Anda. Fitur ini sangat berguna untuk mengawasi rumah saat bepergian atau memantau kondisi kantor di luar jam kerja.</p>
                                    <li>Solusi yang Dapat Disesuaikan</li>
                                    <p>Setiap lokasi memiliki kebutuhan keamanan yang berbeda. Kami menyediakan berbagai jenis kamera (dome, bullet, PTZ) dan paket yang dapat disesuaikan dengan skala kebutuhan Anda, baik untuk rumah pribadi, toko, kantor, hingga area pabrik yang luas.</p>
                                </ol>

                                {/* internet bisnis */}

                                <h2 className="mt-5"><span class="badge text-bg-secondary"><Icon iconClass="bi bi-stars" size="fs-2" /></span> Solusi Ideal untuk Berbagai Kebutuhan </h2>
                                <ul className="text-justify text-secondary">
                                    <li>Untuk Rumah Tangga: Lindungi keluarga dan aset Anda dari pencurian atau kejadian yang tidak diinginkan.</li>
                                    <li>Untuk Bisnis & Kantor: Pantau aktivitas karyawan, tingkatkan produktivitas, dan cegah kerugian.</li>
                                    <li>Untuk Area Publik: Sempurna untuk sekolah, tempat parkir, atau fasilitas umum yang memerlukan pengawasan ketat.</li>
                                </ul>
                                <p className="text-secondary text-justify">
                                    Keamanan adalah investasi, bukan pengeluaran. Dengan layanan CCTV & Security dari Mitracom, Anda berinvestasi dalam ketenangan dan perlindungan. Jangan tunda lagi, lindungi apa yang berharga bagi Anda sekarang juga. <br /> <br />

                                    Untuk konsultasi dan informasi lebih lanjut, silakan hubungi tim sales Mitracom.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Kamera;