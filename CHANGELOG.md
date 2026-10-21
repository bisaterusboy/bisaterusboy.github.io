# 📋 Log Pembaruan & Catatan Rilis (Changelog)

Dokumentasi riwayat pembaruan, peningkatan performa, pembaruan antarmuka (UI/UX), dan fitur baru pada website **Mitracom / Bisaterusboy**.

---

## 🚀 [Versi Terbaru] - 21 Oktober 2026

### ⚡ Kompresi Gambar & Optimasi Performa (Image Optimization Pipeline)
- **Integrasi `vite-plugin-image-optimizer`**:
  - Penambahan plugin `vite-plugin-image-optimizer`, engine pemroses gambar `sharp`, dan pengoptimal vektor `svgo` ke pipeline build Vite.
  - Konfigurasi kompresi otomatis untuk format PNG, JPEG, dan WebP pada tingkat kualitas 80%.
  - Berhasil memangkas total ukuran aset gambar sebesar **~9.1 MB (hemat 68%)**, mempercepat waktu unduh dan First Contentful Paint (FCP).
- **Migrasi Format Gambar ke WebP**:
  - Konversi aset banner utama (`banner-1.webp`, `banner-2.webp`, `banner-3.webp`) dari format PNG berukuran megabyte ke WebP berukuran kilobyte.
  - Konversi logo utama dari `Logo Mitracom.png` (3.8 MB) menjadi `Logo Mitracom.webp` (~244 KB).
  - Pembaruan impor gambar pada `Slider.jsx`, `SliderPreview.jsx`, `CarouselComponent.jsx`, dan `LoadingScreen.jsx`.

### 🛠️ Fitur & Penyempurnaan Komponen
- **Loading Screen (`LoadingScreen.jsx`)**:
  - Penambahan prop `alwaysShow = true` agar animasi loading selalu tampil saat reload halaman tanpa terhalang penyimpanan sesi `sessionStorage`.
  - Penyesuaian logika penyimpanan sesi agar tidak mengunci tampilan loading saat pengujian.

### 📚 Dokumentasi & Deployment
- **Dokumentasi Dependensi Lengkap (`README.md`)**:
  - Pembuatan dokumentasi menyeluruh yang merinci seluruh framework, library antarmuka, ikon, serta plugin build tools dan optimasi.
- **Rilis Produksi (GitHub Pages)**:
  - Sukses build dan deploy versi teroptimasi ke hosting GitHub Pages melalui skrip `npm run deploy`.

---

## 📌 [Versi 11 Oktober 2026]

### 🎨 Desain & UI/UX (Modern Redesign)
- **Komponen Slider Baru (Native React Custom Slider)**:
  - Menggantikan dependensi pihak ketiga dengan custom slider native React.
  - Ditambahkan gesture touch swipe untuk perangkat mobile/layar sentuh.
  - Ditambahkan progress indicator slide, badge kategori/layanan, feature pills, serta aksi ganda (Primary & Secondary CTA).
  - Integrasi efek visual modern: glassmorphism, *backdrop-filter blur*, dan gradien dinamis.
- **Loading Screen Animasi**:
  - Penambahan komponen `LoadingScreen` dengan animasi transisi mulus dan indikator loading bermerek saat pertama kali membuka aplikasi.
- **Desain Ulang Footer (`Footer.jsx` & `footer.css`)**:
  - Layout modern multi-kolom yang rapi dan responsif.
  - Informasi kontak lengkap, jam operasional, tautan cepat, dan navigasi media sosial.
  - Tipografi dan kontras warna yang ditingkatkan.
- **Desain Ulang Unit Bisnis (`Units.jsx` & `Units.css`)**:
  - Tampilan card interaktif dengan transisi hover yang lebih halus.
  - Tata letak grid yang lebih proporsional untuk tampilan mobile dan desktop.

---

### 📄 Halaman & Konten (Pages Revamp)
- **Halaman Tentang Kami (`About.jsx` & `AboutPage.css`)**:
  - Penambahan counter statistik pencapaian (150+ Proyek, 100+ Klien, Rating 4.9/5, 15+ Tahun Berdiri).
  - Diagram tahapan alur kerja (5 langkah kerja dari konsultasi hingga support).
  - Section layanan unggulan yang terhubung langsung ke halaman detail layanan.
- **Halaman Layanan & Sub-Layanan (`ServiceDetail.css`)**:
  - Standarisasi tata letak dan desain visual untuk seluruh halaman sub-layanan:
    - *Aplikasi Web* (`Aplikasiweb.jsx`)
    - *Internet Bisnis & Pedesaan* (`Business.jsx`)
    - *Hardware & Software* (`Hardwaresoftware.jsx`)
    - *Kamera & CCTV* (`Kamera.jsx`)
    - *Konsultan IT* (`Konsultan.jsx`)
    - *Maintenance & Jaringan Internet* (`Maintenanceinternet.jsx`)
    - *Digital Marketing* (`Marketing.jsx`)
    - *Desain Website* (`Webdesign.jsx`)
  - Penambahan card benefit, highlight fitur, dan tombol kontak WhatsApp/Telepon langsung.
- **Halaman Kontak (`Contact.jsx` & `ContactPage.css`)**:
  - Form interaktif kontak dengan validasi visual.
  - Kartu informasi lokasi kantor, email, hotline, dan peta lokasi yang responsif.
- **Halaman Kebijakan Privasi (`PrivacyPolicy.jsx` & `PrivacyPolicy.css`)**:
  - Struktur navigasi konten hukum yang lebih jelas, mudah dibaca, dan mobile-friendly.

---

### ⚡ Performa & Konfigurasi Build (Core & Dependencies)
- **Pembaruan Dependensi**:
  - Upgrade **React** & **react-dom** ke versi `^19.3.0`.
  - Upgrade **Vite** ke versi `^8.3.3`.
  - Upgrade `@vitejs/plugin-react` ke versi `^6.1.2`.
- **Optimalisasi Chunking Bundle (`vite.config.js`)**:
  - Penerapan pemecahan chunk dinamis (`manualChunks` function):
    - `vendor` (React & React DOM)
    - `router` (React Router DOM)
    - `ui` (Bootstrap & React Bootstrap)
    - `icons` (FontAwesome SVG Icons)
    - `carousel` (React Slick)
  - Mengurangi ukuran initial bundle load dan mempercepat waktu rendering halaman pertama (FCP).

---

## 📌 Riwayat Pembaruan Sebelumnya

### [Commit 17ed6f2 / 1b68fe0] - Oktober 2026
- Pembaruan meta tag, title, dan optimasi aset awal pada `index.html`.

### [Commit 5aae480 / 66d45d6] - Oktober 2026
- Penyesuaian konten dan perbaikan struktur teks pada halaman Privacy Policy.

### [Commit 9c65204] - Agustus 2026
- Konsolidasi pembaruan menyeluruh pada komponen dan styling umum.

### [Commit e41b58c / 71b445c / 30644ef] - Agustus 2026
- Pembaruan awal komponen Footer, Units, dan halaman About.
