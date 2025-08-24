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

function Maintenanceinternet() {

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
                    <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Maintenance Jaringan</h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}> <a href="/">Home</a> / Jaringan LAN / WiFi</p>
                </div>


                {/* Google Maps Section */}
                <div className="row mt-2">
                    <div className="col-md-12 mt-2">
                        <div class="card">
                            <div class="card-header">
                                <hr />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title"><span class="badge text-bg-secondary mt-4"><Icon iconClass="bi bi-router-fill" size="fs-2" /></span> Layanan Maintenance Jaringan Mitracom</h3>
                                <p class="card-text mt-4 text-justify">Mitracom hadir untuk mengatasi semua masalah tersebut dengan layanan maintenance jaringan yang terencana dan terstruktur. Tim teknisi kami yang berpengalaman akan melakukan serangkaian pemeriksaan dan tindakan pencegahan untuk memastikan jaringan Anda beroperasi dengan performa terbaik.<br /><br />
                                    Berikut adalah beberapa layanan maintenance yang kami tawarkan: </p>

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ol className="text-secondary text-justify">
                                                <li className="mt-2">Perawatan Preventif</li>
                                                <p className="text-secondary text-justify">Layanan ini dirancang untuk mencegah masalah sebelum terjadi. Tim kami akan melakukan:</p>
                                                <ul className="text-justify mt-2">
                                                    <li>Pembersihan perangkat keras: Membersihkan debu dan kotoran pada router, switch, dan perangkat lain untuk mencegah overheat.</li>
                                                    <li>Pemeriksaan kabel dan konektor: Memastikan semua kabel terpasang dengan baik dan tidak ada yang rusak.</li>
                                                    <li>Pembaruan firmware: Menginstal versi firmware terbaru untuk meningkatkan performa dan keamanan perangkat.</li>
                                                    <li>Optimalisasi konfigurasi: Menyesuaikan pengaturan jaringan untuk meningkatkan efisiensi dan kecepatan.</li>
                                                </ul>
                                                <li className="mt-2">Monitoring Jaringan 24/7</li>
                                                <p className="text-secondary text-justify">Kami menggunakan sistem monitoring canggih untuk memantau kondisi jaringan Anda secara real-time. Jika ada anomali atau tanda-tanda masalah, tim kami akan segera mengambil tindakan. Dengan layanan ini, kami bisa mendeteksi dan menyelesaikan masalah, bahkan sebelum Anda menyadarinya.</p>
                                                <li className="mt-2">Perbaikan dan Troubleshooting</li>
                                                <p className="text-secondary text-justify">EJika terjadi masalah pada jaringan, tim Mitracom siap memberikan respons cepat. Kami menyediakan layanan perbaikan yang efisien untuk mengatasi berbagai gangguan, mulai dari koneksi yang terputus, konfigurasi yang salah, hingga kegagalan perangkat keras.</p>
                                                <p className="mt-2 text-secondary text-justify">Dengan layanan pemasaran digital kami, Anda tidak hanya berpromosi, tetapi juga berinvestasi pada pertumbuhan bisnis yang berkelanjutan. Hubungi kami sekarang untuk mendapatkan konsultasi gratis dan rancang strategi digital yang tepat untuk Anda.</p>
                                            </ol>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="maintenance.webp" class="card-img-top rounded-5 shadow mb-3 w-100" alt="..."></img>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src="maintenance1.jpg" class="card-img-top rounded-5 shadow mb-3 w-100" alt="..."></img>
                                                </div>
                                                <div className="col-md-6">
                                                    <img src="maintenance2.jpg" class="card-img-top rounded-5 shadow mb-3 w-100" alt="..."></img>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <h4 class="card-title"><span class="badge text-bg-secondary mt-2"><Icon iconClass="bi bi-rocket-takeoff-fill" size="fs-2" /></span> Mengapa Memilih Layanan Maintenance Jaringan Mitracom?</h4>

                                        <p>
                                            <ul className="text-justify mt-2">
                                                <li>Tim Ahli Bersertifikasi: Teknisi kami memiliki pengetahuan dan pengalaman luas dalam menangani berbagai topologi dan masalah jaringan.</li>
                                                <li>Layanan Fleksibel: Kami menawarkan paket maintenance yang dapat disesuaikan dengan kebutuhan dan anggaran Anda.</li>
                                                <li>Respons Cepat: Kami memahami betapa berharganya waktu Anda. Kami menjamin respons dan penanganan masalah yang cepat.</li>
                                                <li>Hemat Biaya: Dengan maintenance rutin, Anda bisa menghindari biaya perbaikan yang mahal atau penggantian perangkat yang tidak terduga.</li>
                                            </ul>

                                            Jangan biarkan masalah jaringan mengganggu aktivitas digital Anda. Percayakan perawatan jaringan Anda kepada Mitracom dan nikmati koneksi internet yang stabil, cepat, dan aman setiap saat. <br /> <br />

                                            Untuk informasi lebih lanjut tentang paket layanan maintenance jaringan Mitracom, silakan hubungi tim sales kami.
                                        </p>
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

export default Maintenanceinternet;