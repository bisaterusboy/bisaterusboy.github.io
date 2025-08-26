import React from "react";
// import "../assets/css/priceList.css";
import konsultan1 from '../assets/img/konsultan1.jpeg'
import konsultan2 from '../assets/img/konsultan2.webp'

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

function Konsultan() {

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
                    <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>IT Solution & Konsultasi</h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}> <a href="services">Layanan & Produk</a> / Konsultasi & Pengembangan</p>
                </div>


                {/* Google Maps Section */}
                <div className="row mt-2">
                    <div className="col-md-12 mt-2">
                        <div class="card">
                            <div class="card-header">
                                <hr />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title"><span class="badge text-bg-secondary mt-4"><Icon iconClass="bi bi-stars" size="fs-2" /></span> Tingkatkan Produktivitas Bisnis Anda dengan Layanan IT Solution & Konsultasi Mitracom</h3>
                                <p class="card-text mt-4 text-justify">Di era digital yang bergerak cepat ini, koneksi internet yang stabil dan cepat adalah fondasi utama bagi setiap bisnis. Namun, seiring dengan pertumbuhan bisnis, kebutuhan akan infrastruktur IT yang andal dan terkelola dengan baik menjadi semakin krusial. Di Mitracom, kami memahami bahwa tantangan bisnis modern tidak hanya sebatas konektivitas, melainkan juga bagaimana mengoptimalkan seluruh ekosistem teknologi untuk mencapai efisiensi dan pertumbuhan maksimal. <br /><br />

                                    Karena itu, Mitracom hadir tidak hanya sebagai Internet Service Provider (ISP) andalan Anda, tetapi juga sebagai mitra IT Solution & Konsultasi yang terintegrasi. Kami melangkah lebih jauh dari sekadar menyediakan koneksi, kami menawarkan solusi menyeluruh yang dirancang untuk mendukung setiap aspek operasional bisnis Anda, dari skala kecil hingga korporasi besar.

                                </p>

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6 class="card-title"><span class="badge text-bg-secondary mt-4"><Icon iconClass="bi bi-stars" size="fs-4" /></span> Mengapa Memilih Layanan IT Solution & Konsultasi dari Mitracom?</h6>
                                            <ol className="text-secondary text-justify">
                                                <li className="mt-2">IT Konsultasi yang Mendalam</li>
                                                <p className="text-secondary text-justify">Setiap perjalanan teknologi yang sukses dimulai dengan strategi yang matang. Layanan konsultasi kami membantu Anda:</p>
                                                <ul className="text-justify mt-2">
                                                    <li>Menganalisis Kebutuhan Bisnis: Kami akan berkolaborasi dengan tim Anda untuk memahami tantangan, tujuan, dan alur kerja bisnis secara menyeluruh.</li>
                                                    <li>Merancang Arsitektur IT: Kami akan merumuskan peta jalan teknologi yang optimal, termasuk pemilihan perangkat keras, perangkat lunak, dan topologi jaringan yang paling efisien.</li>
                                                    <li>Perencanaan Migrasi: Jika Anda berencana beralih ke sistem baru atau cloud, kami akan memastikan proses transisi berjalan mulus tanpa mengganggu operasional.</li>
                                                </ul>
                                                <li className="mt-2">Implementasi Solusi yang Terpercaya</li>
                                                <p className="text-secondary text-justify">Kami tidak hanya memberikan saran, tetapi juga mengimplementasikan solusi hingga tuntas. Layanan implementasi kami meliputi:</p>
                                                <ul className="text-justify mt-2">
                                                    <li>Jaringan & Infrastruktur: Pemasangan jaringan LAN, WAN, Wi-Fi, hingga Data Center dengan standar terbaik. Kami memastikan koneksi internal Anda secepat dan seandal koneksi internet Mitracom.</li>
                                                    <li>Cloud Computing: Membantu bisnis Anda beralih ke cloud (seperti Microsoft Azure, Google Cloud, atau AWS) untuk skalabilitas, fleksibilitas, dan penghematan biaya.</li>
                                                    <li>Keamanan Siber: Melindungi aset digital Anda dari ancaman siber dengan solusi firewall, VPN, dan sistem deteksi intrusi yang canggih.</li>
                                                </ul>
                                                <li className="mt-2">Managed Services & Dukungan Penuh</li>
                                                <p className="text-secondary text-justify">Teknologi adalah aset, tetapi juga bisa menjadi beban jika tidak dikelola dengan baik. Dengan layanan Managed Services Mitracom, Anda bisa fokus pada bisnis inti, sementara kami mengurus semua urusan teknis:</p>
                                                <ul className="text-justify mt-2">
                                                    <li>Monitoring Jaringan 24/7: Kami memantau performa jaringan Anda secara terus-menerus untuk mendeteksi dan mengatasi masalah sebelum berdampak pada operasional.</li>
                                                    <li>Dukungan Teknis Proaktif: Tim kami selalu siap sedia untuk memberikan bantuan teknis kapan pun dibutuhkan.</li>
                                                    <li>Perawatan & Pembaruan Sistem: Kami memastikan semua perangkat dan perangkat lunak Anda selalu dalam kondisi prima dan diperbarui.</li>
                                                </ul>
                                                <p className="mt-2 text-secondary text-justify">Di Mitracom, kami percaya bahwa kolaborasi yang kuat adalah kunci kesuksesan. Biarkan kami menjadi perpanjangan tangan tim Anda dalam mengelola teknologi. <br /><br />
                                                    Hubungi tim konsultan Mitracom hari ini dan mari kita diskusikan bagaimana solusi IT kami dapat membantu bisnis Anda bertumbuh, lebih efisien, dan lebih aman di era digital.
                                                </p>
                                            </ol>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={konsultan1} class="card-img-top rounded-5 shadow mb-3 w-100" alt="..."></img>
                                            <img src={konsultan2} class="card-img-top rounded-5 shadow mb-3 w-100" alt="..."></img>
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

export default Konsultan;