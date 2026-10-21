# Mitracom Solusi Teknologi - Web Application

Website resmi **PT Mitracom Solusi Teknologi** yang dibangun menggunakan **React 19** dan **Vite** dengan fokus pada performa tinggi, tampilan modern responsif, serta optimasi aset gambar untuk loading super cepat.

---

## 📦 Daftar Plugin & Dependensi yang Digunakan

Berikut adalah rincian seluruh dependensi dan plugin yang digunakan pada proyek ini beserta fungsinya:

### 1. Framework & Core
| Plugin / Library | Versi | Deskripsi & Fungsi |
| :--- | :--- | :--- |
| **[React](https://react.dev/)** | `^19.3.0` | Library utama JavaScript untuk membangun antarmuka pengguna berbasis komponen. |
| **[React DOM](https://react.dev/)** | `^19.3.0` | Menyediakan metode spesifik DOM untuk merender komponen React ke browser. |
| **[React Router DOM](https://reactrouter.com/)** | `^6.26.2` | Manajemen routing dan navigasi halaman (SPA) tanpa perlu reload browser. |

---

### 2. Tampilan, UI & Ikon
| Plugin / Library | Versi | Deskripsi & Fungsi |
| :--- | :--- | :--- |
| **[Bootstrap](https://getbootstrap.com/)** | `^5.3.3` | Framework CSS untuk sistem grid responsif, utilitas tata letak, dan styling dasar. |
| **[React-Bootstrap](https://react-bootstrap.netlify.app/)** | `^2.10.4` | Komponen Bootstrap yang telah diadaptasi murni sebagai komponen React. |
| **[@fortawesome/react-fontawesome](https://fontawesome.com/)** | `^0.2.2` | Integrasi ikon FontAwesome ke dalam komponen React. |
| **`@fortawesome/free-solid-svg-icons`** | `^6.6.0` | Koleksi ikon solid (panah, ceklis, telepon, servis, dll). |
| **`@fortawesome/free-brands-svg-icons`** | `^6.6.0` | Koleksi ikon merek/platform (WhatsApp, Instagram, dll). |
| **`@fortawesome/free-regular-svg-icons`** | `^6.6.0` | Koleksi ikon outline/regular. |
| **[React Slick](https://react-slick.neostack.com/)** | `^0.31.0` | Komponen slider/carousel interaktif berbasis React. |
| **`slick-carousel`** | `^1.8.1` | Aset CSS dan dependency inti slider untuk `react-slick`. |
| **[Sass](https://sass-lang.com/)** | `^1.97.0` | Preprocessor CSS untuk penulisan styling yang modular dengan nesting dan variabel SCSS. |
| **[React Cookie](https://github.com/reactivestack/cookies/tree/master/packages/react-cookie)** | `^7.2.0` | Utilitas pembacaan dan penyimpanan cookie di sisi klien. |

---

### 3. Build Tools & Plugin Optimasi Gambar (DevDependencies)
| Plugin / Tool | Versi | Deskripsi & Fungsi |
| :--- | :--- | :--- |
| **[Vite](https://vite.dev/)** | `^8.3.3` | Build tool generasi baru dengan Instant Server Start dan Hot Module Replacement (HMR) super kilat. |
| **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** | `^6.1.2` | Plugin resmi Vite untuk mengaktifkan Fast Refresh dan parsing JSX menggunakan Babel. |
| **[vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer)** | `^2.0.3` | **Plugin kompresi gambar otomatis saat proses build**. Mengompres file PNG, JPG, dan WebP secara cerdas sehingga memangkas ukuran aset hingga >60-70%. |
| **[Sharp](https://sharp.pixelplumbing.com/)** | `^0.35.5` | Engine pengolah citra/gambar berkecepatan tinggi berbasis libvips untuk memproses kompresi gambar. |
| **[SVGO](https://github.com/svg/svgo)** | `^4.1.0` | Tool pengoptimal file vektor SVG guna membuang metadata berlebih dan mengecilkan kode SVG. |
| **[gh-pages](https://github.com/tschaub/gh-pages)** | `^6.3.0` | Utility command line untuk melakukan build dan deploy otomatis ke GitHub Pages. |
| **[ESLint](https://eslint.org/)** | `^9.9.0` | Linter statis untuk menjaga kualitas, standarisasi, dan mendeteksi kesalahan sintaks kode React. |

---

## ⚡ Fitur Optimasi Kinerja yang Diterapkan

1. **Automatic Image Compression**
   * Menggunakan `vite-plugin-image-optimizer` di [vite.config.js](vite.config.js) dengan target kualitas 80% untuk PNG, JPEG, dan WebP.
   * Dilengkapi proteksi cerdas: jika kompresi menghasilkan file yang lebih besar dari file asli, file asli otomatis dipertahankan (`skipped`).
2. **Modern Format (WebP)**
   * Banner dan aset grafis berat dikonversi ke format `.webp` yang berukuran hingga 80-90% lebih ringan dibandingkan PNG asli.
3. **Vendor Chunk Splitting (Rollup Options)**
   * Kode pustaka besar (React, React Router, Bootstrap, FontAwesome, Slick Carousel) dipecah menjadi chunk terpisah (`manualChunks`) untuk efisiensi caching browser.
4. **Dynamic Loading Screen**
   * Splash screen animasi status jaringan berdesain modern dengan prop `alwaysShow` untuk kontrol tampilan.

---

## 🚀 Skrip Perintah (NPM Scripts)

Jalankan perintah berikut melalui terminal:

```bash
# Menjalankan server development lokal
npm run dev

# Membangun bundle produksi (sekaligus mengompres seluruh aset gambar)
npm run build

# Menjalankan preview dari bundle produksi lokal
npm run preview

# Memeriksa kualitas kode dengan ESLint
npm run lint

# Membangun dan mendeploy langsung ke GitHub Pages
npm run deploy
```
