
import React from "react";

// Icon Component with fallback
const Icon = ({ iconClass, size = "fs-6", fallback = "●" }) => (
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

function PrivacyPolicy() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Privacy Policy</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>
            <a href="/">Home</a> / Privacy Policy
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <hr />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  <span className="badge text-bg-secondary mt-4"><Icon iconClass="bi bi-shield-lock-fill" size="fs-2" /></span> Kebijakan Privasi
                </h3>
                <div className="mt-4 mb-4">
                  <h6></h6>
                  <p>PT. Mitracom Solusi Teknologi (“Mitracom”, “Kami”) menghargai privasi pengguna dan berkomitmen untuk melindungi informasi yang diproses melalui situs web Mitracom dan aplikasi Mitracom Support.</p>
                </div>
                <div className="mb-4">
                  <h6>Mitracom Support</h6>
                  <p>merupakan aplikasi internal yang digunakan oleh karyawan dan personel yang berwenang di PT. Mitracom Solusi Teknologi untuk mendukung kegiatan operasional perusahaan.
Dengan menggunakan situs web dan/atau aplikasi Mitracom Support, Anda menyetujui pemrosesan informasi sebagaimana dijelaskan dalam Kebijakan Privasi ini.
Informasi yang Kami Kumpulkan
Kami dapat memproses informasi yang diperlukan untuk menjalankan layanan dan fungsi Mitracom Support, termasuk:
Informasi akun yang diperlukan untuk proses login dan autentikasi;
Informasi perangkat, seperti jenis perangkat, sistem operasi, versi aplikasi, dan informasi teknis lainnya yang diperlukan untuk menjalankan dan menjaga keamanan aplikasi;
Data lokasi perangkat, apabila diperlukan oleh fitur tertentu dalam aplikasi; dan
Informasi lain yang diberikan atau diproses melalui aplikasi untuk mendukung kegiatan operasional internal perusahaan.
Kami berupaya membatasi pengumpulan informasi hanya pada data yang diperlukan untuk menjalankan fungsi aplikasi dan kebutuhan operasional perusahaan.</p>
                <h6>Data Lokasi</h6>
                  <p>Mitracom Support dapat mengakses data lokasi perangkat untuk mendukung fitur dan kegiatan operasional internal yang memerlukan informasi lokasi.
Data lokasi dapat digunakan untuk mendukung kebutuhan operasional, seperti memastikan informasi lokasi tersedia untuk fungsi aplikasi yang memerlukannya.
Akses terhadap data lokasi dilakukan berdasarkan izin yang diberikan melalui perangkat Android. Pengguna dapat melihat, mengatur, atau mencabut izin akses lokasi melalui pengaturan perangkat.
Data lokasi tidak digunakan untuk tujuan di luar kebutuhan fungsi aplikasi dan operasional internal perusahaan.
Cara Kami Menggunakan Informasi
Informasi yang diproses melalui Mitracom Support dapat digunakan untuk:
Menyediakan dan menjalankan fungsi aplikasi;
Melakukan login dan autentikasi pengguna;
Mendukung kegiatan operasional internal perusahaan;
Mendukung fitur yang membutuhkan informasi lokasi;
Menjaga keamanan, kestabilan, dan kinerja aplikasi;
Melakukan pemeliharaan, perbaikan, dan pengembangan aplikasi; dan
Menangani masalah teknis atau kebutuhan dukungan pengguna.
Berbagi Informasi
Informasi yang diproses melalui Mitracom Support digunakan untuk kebutuhan internal PT. Mitracom Solusi Teknologi.
Kami tidak menjual informasi pribadi pengguna.
Apabila diperlukan untuk menjalankan, memelihara, atau mengamankan aplikasi, informasi dapat diproses melalui sistem atau penyedia layanan teknologi yang digunakan oleh Mitracom. Akses terhadap informasi dibatasi sesuai kebutuhan dan tujuan layanan.</p>
                </div>
                {/* <div className="mb-4">
                  <h6>Cara Kami Menggunakan Informasi Anda</h6>
                  <ul style={{ paddingLeft: '1.2rem' }}>
                    <li>Mengoperasikan dan memelihara situs web</li>
                    <li>Memahami dan menganalisis penggunaan situs</li>
                    <li>Meningkatkan, mempersonalisasi, dan memperluas situs</li>
                    <li>Mengirim email dan promosi</li>
                    <li>Memberikan layanan pelanggan</li>
                    <li>Mendeteksi dan mencegah penipuan</li>
                  </ul>
                </div> */}
                <div className="mb-4">
                  <h6>Penyimpanan dan Keamanan Data</h6>
                  <p>Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi dari akses, penggunaan, perubahan, pengungkapan, atau pemrosesan yang tidak sah.
Informasi disimpan selama diperlukan untuk menjalankan fungsi aplikasi, mendukung kebutuhan operasional perusahaan, atau memenuhi kewajiban hukum yang berlaku.</p>
                </div>
                <div className="mb-4">
                  <h6>Izin Aplikasi</h6>
                  <p>Mitracom Support dapat meminta izin tertentu pada perangkat Android untuk menjalankan fungsi aplikasi.
Salah satu izin yang dapat digunakan adalah akses lokasi, yang diperlukan oleh fitur tertentu dalam aplikasi untuk mendukung kebutuhan operasional.
Pengguna dapat melihat dan mengatur izin aplikasi melalui pengaturan perangkat Android. Menonaktifkan izin tertentu dapat menyebabkan fitur yang membutuhkan izin tersebut tidak dapat berfungsi secara optimal.</p>
                </div>
                <div className="mb-4">
                  <h6>Penggunaan Internal</h6>
                  <p>Mitracom Support ditujukan untuk penggunaan internal oleh karyawan dan personel yang berwenang di PT. Mitracom Solusi Teknologi.
Informasi yang diproses melalui aplikasi digunakan untuk mendukung kegiatan dan kebutuhan pekerjaan serta operasional perusahaan.</p>
                </div>
                <div className="mb-4">
                  <h6>Hak Pengguna</h6>
                  <p>Pengguna dapat meminta informasi mengenai pemrosesan data pribadi melalui Mitracom Support atau menyampaikan pertanyaan terkait privasi kepada Kami melalui kontak yang tersedia.
Pengguna juga dapat mengatur izin akses aplikasi, termasuk izin lokasi, melalui pengaturan perangkat Android.
Perubahan Kebijakan Privasi
Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk menyesuaikan dengan perubahan aplikasi, layanan, kebutuhan operasional, atau ketentuan yang berlaku.
Perubahan akan ditampilkan pada halaman ini dengan mencantumkan tanggal pembaruan terbaru.</p>
                </div>
                {/* <div className="mb-4">
                  <h6>Hak Privasi CCPA</h6>
                  <p>Pengguna California berhak meminta detail data pribadi, meminta penghapusan, atau meminta agar data tidak dijual.</p>
                </div> */}
                {/* <div className="mb-4">
                  <h6>Hak Perlindungan Data GDPR</h6>
                  <ul style={{ paddingLeft: '1.2rem' }}>
                    <li>Mengakses data pribadi Anda</li>
                    <li>Memperbaiki data yang tidak akurat</li>
                    <li>Menghapus data Anda</li>
                    <li>Membatasi pemrosesan data</li>
                    <li>Menolak pemrosesan data</li>
                    <li>Memindahkan data ke organisasi lain</li>
                  </ul>
                </div> */}
                <div className="mb-4">
                  <h6>Hubungi Kami</h6>
                  <p>Jika Anda memiliki pertanyaan atau permintaan terkait Kebijakan Privasi atau pemrosesan informasi melalui Mitracom Support, </p>
                </div>
                <div className="mb-4">
                  <h6>PT. MITRACOM SOLUSI TEKNOLOGI</h6>
                  Website: <a href="https://mitracom.id/" target="_blank" rel="noopener noreferrer">https://mitracom.id/</a><br></br>
                  Email: <a href="mailto:info@mitracom.id">info@mitracom.id</a>
                  <p>Kebijakan Privasi ini berlaku untuk penggunaan situs web Mitracom dan aplikasi Mitracom Support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
