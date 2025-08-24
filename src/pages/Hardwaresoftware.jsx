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

function Hardwaresoftware() {

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
                    <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Service Komputer & Laptop</h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}> <a href="/">Home</a> / Hardware & Software</p>
                </div>

                <img src="foto5.jpg" class="card-img-top rounded-5 shadow mb-3" alt="..."></img>

                {/* Google Maps Section */}
                <div className="row mt-5">
                    <div className="col-md-12 mt-2">
                        <div className="row">
                            <div className="col-md-12">
                                <h2><span class="badge text-bg-secondary"><Icon iconClass="bi bi-tools" size="fs-2" /></span> Jasa Service Komputer & Laptop: Hardware & Software </h2>
                                <p className="mt-3 d-flex justify-content-between mb-5 text-justify">
                                    Komputer dan laptop adalah alat vital dalam kehidupan sehari-hari, baik untuk pekerjaan, pendidikan, maupun hiburan. Ketika perangkat Anda mengalami masalah, produktivitas bisa terhenti total. Kami hadir untuk memberikan solusi cepat dan terpercaya dengan layanan Service Komputer & Laptop yang komprehensif, mencakup masalah hardware dan software.
                                </p>

                                <h2><span class="badge text-bg-secondary"><Icon iconClass="bi bi-gear-fill" size="fs-2" /></span> Layanan Hardware (Perangkat Keras) </h2>
                                <p className="mt-2 d-flex justify-content-between mt-2 text-justify">
                                    Masalah hardware bisa sangat mengganggu, mulai dari perangkat yang tidak menyala hingga komponen yang rusak. Kami memiliki teknisi berpengalaman yang siap menangani berbagai perbaikan hardware, antara lain:
                                </p>
                                <ul className="text-justify text-secondary">
                                    <li>Perbaikan dan Penggantian Komponen: Kami memperbaiki atau mengganti komponen yang rusak, seperti motherboard, RAM, kartu grafis, dan prosesor.</li>
                                    <li>Perbaikan Layar Laptop: Solusi untuk layar pecah, bergaris, atau tidak menampilkan gambar.</li>
                                    <li>Penggantian Baterai & Keyboard: Mengembalikan performa laptop Anda dengan baterai baru atau keyboard yang responsif.</li>
                                    <li>Pembersihan & Perawatan: Kami membersihkan debu dan kotoran dari dalam perangkat untuk mencegah overheating dan meningkatkan performa.</li>
                                </ul>

                                <h2><span class="badge text-bg-secondary mt-4"><Icon iconClass="bi bi-floppy" size="fs-2" /></span> Layanan Software (Perangkat Lunak) </h2>
                                <p className="mt-2 d-flex justify-content-between mt-2">
                                    Masalah software seringkali tidak terlihat, tetapi dapat membuat komputer Anda lemot, tidak stabil, atau bahkan tidak bisa digunakan. Layanan kami mencakup:
                                </p>
                                <ul className="text-secondary text-justify">
                                    <li>Instalasi & Pembaruan Sistem Operasi: Kami membantu Anda menginstal atau memperbarui sistem operasi (Windows, macOS, Linux) agar berjalan lancar.</li>
                                    <li>Pembersihan Virus & Malware: Kami menghapus virus, malware, dan perangkat lunak berbahaya lainnya yang dapat merusak data atau memperlambat kinerja.</li>
                                    <li>Optimalisasi Performa: Kami melakukan pengaturan dan pembersihan yang diperlukan untuk meningkatkan kecepatan dan responsivitas komputer Anda.</li>
                                    <li>Pemulihan Data: Jika data penting Anda hilang akibat kerusakan software atau terhapus tidak sengaja, kami akan berusaha memulihkannya.</li>
                                </ul>

                                <h2 className="mt-5"><span class="badge text-bg-primary"><Icon iconClass="bi bi-person-fill-lockbi bi-rocket-takeoff-fill" size="fs-2" /></span> Mengapa Memilih Layanan Kami? </h2>
                                <ul className="text-secondary text-justify mt-2">
                                    <li>Profesional & Terpercaya: Tim kami terdiri dari teknisi yang ahli dan berpengalaman dalam menangani berbagai merek dan model komputer/laptop.</li>
                                    <li>Layanan Komprehensif: Kami menyediakan solusi terintegrasi, mengatasi masalah hardware dan software dalam satu tempat.</li>
                                    <li>Garansi Perbaikan: Kami memberikan garansi untuk setiap perbaikan yang kami lakukan, memberikan Anda ketenangan pikiran.</li>
                                </ul>
                                <p className="mt-3 d-flex justify-content-between text-justify text-secondary">
                                    Jangan biarkan masalah teknis menghambat produktivitas Anda. Hubungi kami sekarang untuk konsultasi dan dapatkan solusi terbaik untuk komputer atau laptop Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hardwaresoftware;