import React from "react";
// import "../assets/css/priceList.css";
import marketing1 from '../assets/img/marketing1.png'

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

function Marketing() {

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
                    <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Marketing</h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}> <a href="services">Layanan & Produk</a> / Promosi Online</p>
                </div>


                {/* Google Maps Section */}
                <div className="row mt-2">
                    <div className="col-md-12 mt-2">
                        <div class="card">
                            <div class="card-header">
                                <hr />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title"><span class="badge text-bg-secondary mt-4"><Icon iconClass="bi bi-bar-chart-line-fill" size="fs-2" /></span> Jasa Pemasaran Digital Profesional</h3>
                                <p class="card-text mt-4 text-justify">Di era digital, promosi tidak lagi terbatas pada media cetak atau televisi. Agar bisnis Anda bisa menjangkau audiens yang lebih luas dan relevan, Anda memerlukan strategi pemasaran digital yang terintegrasi dan efektif. Pemasaran digital adalah serangkaian upaya untuk mempromosikan produk atau layanan menggunakan media digital, yang memungkinkan Anda terhubung langsung dengan calon pelanggan di mana pun mereka berada. <br /><br />
                                    Kami hadir sebagai mitra Anda untuk memaksimalkan potensi pemasaran digital. Layanan kami dirancang untuk membantu Anda meningkatkan visibilitas, membangun merek, dan mendorong pertumbuhan bisnis. </p>

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ol className="text-secondary text-justify">
                                                <li className="mt-2">Pemasaran Media Sosial (Social Media Marketing)</li>
                                                <p className="text-secondary text-justify">Jutaan orang menghabiskan waktu di media sosial setiap hari. Kami akan membantu Anda memanfaatkan platform ini untuk terhubung dengan pelanggan dan membangun komunitas.</p>
                                                <ul className="text-justify mt-2">
                                                    <li>Manajemen Akun: Kami akan mengelola akun media sosial Anda, mulai dari pembuatan konten yang menarik, penjadwalan postingan, hingga interaksi dengan pengikut.</li>
                                                    <li>Iklan Berbayar: Kami akan merancang dan menjalankan kampanye iklan yang menargetkan demografi, minat, dan perilaku spesifik audiens Anda di platform seperti Facebook, Instagram, TikTok, dan LinkedIn.</li>
                                                </ul>
                                                <li className="mt-2">Pemasaran Konten (Content Marketing)</li>
                                                <p className="text-secondary text-justify">Konten adalah raja dalam pemasaran digital. Kami akan membantu Anda membuat dan mendistribusikan konten yang bernilai untuk menarik, mendidik, dan mempertahankan audiens.</p>
                                                <ul className="text-justify mt-2">
                                                    <li>Penulisan Artikel & Blog: Kami membuat artikel blog yang informatif dan relevan untuk menjawab pertanyaan audiens Anda.</li>
                                                    <li>Materi Visual: Kami mengembangkan infografis, video pendek, dan visual menarik lainnya yang mudah dibagikan.</li>
                                                </ul>
                                                <li className="mt-2">Email Marketing</li>
                                                <p className="text-secondary text-justify">Email marketing tetap menjadi salah satu alat pemasaran paling efektif untuk membangun hubungan jangka panjang dengan pelanggan. Kami akan membantu Anda:</p>
                                                <ul className="text-justify mt-2">
                                                    <li>Membangun daftar email yang berkualitas.</li>
                                                    <li>Membuat kampanye email yang personal dan relevan.</li>
                                                    <li>Menganalisis performa kampanye untuk mendapatkan hasil terbaik.</li>
                                                </ul>
                                                <p className="mt-2 text-secondary text-justify">Dengan layanan pemasaran digital kami, Anda tidak hanya berpromosi, tetapi juga berinvestasi pada pertumbuhan bisnis yang berkelanjutan. Hubungi kami sekarang untuk mendapatkan konsultasi gratis dan rancang strategi digital yang tepat untuk Anda.</p>
                                            </ol>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={marketing1} class="card-img-top rounded-5 shadow mb-3 w-100" alt="..."
                                            style={{ width: "50%", height: "500px" }}
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Marketing;