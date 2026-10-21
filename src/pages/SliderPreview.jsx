import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/SliderPreview.css';
import banner1 from '../assets/img/banner-1.webp';
import banner2 from '../assets/img/banner-2.webp';
import banner3 from '../assets/img/banner-3.webp';

const sampleSlides = [
  {
    id: 1,
    image: banner2,
    title: 'Internet Cepat Harga Hemat',
    subtitle: 'Koneksi Stabil, Dompet Aman',
    ctaText: 'Hubungi Kami',
    ctaLink: '/contact',
    tag: 'Home Broadband Pedesaan',
    icon: 'bi-house-door-fill',
    speed: '100',
    unit: 'Mbps',
    desc: 'Layanan broadband desa dengan kecepatan tinggi, unlimited upload & download tanpa kuota FUP. Memberdayakan produktivitas warga dan kemajuan ekonomi lokal.',
  },
  {
    id: 2,
    image: banner1,
    title: 'Internet Wong Dewek',
    subtitle: 'Dari Indramayu, Untuk Indonesia',
    ctaText: 'Layanan Kami',
    ctaLink: '/services',
    tag: 'Internet Generasi Digital',
    icon: 'bi-mortarboard-fill',
    speed: '500',
    unit: 'Mbps',
    desc: 'Koneksi fiber optik stabil berkecepatan tinggi untuk menunjang edukasi, bisnis kreatif, dan gaya hidup modern tanpa kompromi.',
  },
  {
    id: 3,
    image: banner3,
    title: 'Internet Untuk Semua Masyarakat',
    subtitle: 'Harga Saudara, Kualitas Juara',
    ctaText: 'Hubungi Kami',
    ctaLink: '/contact',
    tag: 'Internet Pesisir & Maritim',
    icon: 'bi-compass-fill',
    speed: '1',
    unit: 'Gbps',
    desc: 'Layanan jaringan tangguh terpercaya untuk area pelabuhan, UMKM pesisir, dan seluruh lapisan masyarakat dengan tarif terjangkau.',
  },
];

const sampleTiers = [
  { name: 'Paket Hemat Desa', speed: '30 Mbps', price: 'Rp 165.000', per: '/bulan', icon: 'bi-house-fill' },
  { name: 'Paket Keluarga Pro', speed: '75 Mbps', price: 'Rp 275.000', per: '/bulan', icon: 'bi-wifi', featured: true },
  { name: 'Bisnis & UMKM Ultra', speed: '150 Mbps', price: 'Rp 450.000', per: '/bulan', icon: 'bi-briefcase-fill' },
];

function TypewriterTitle({ text, isActive, speed = 40, delay = 140 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText('');
      setIsTyping(false);
      return;
    }

    let timeoutId;
    let charIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    const startTimer = setTimeout(() => {
      const typeNextChar = () => {
        if (charIndex < text.length) {
          charIndex++;
          setDisplayedText(text.slice(0, charIndex));
          const char = text[charIndex - 1];
          const currentSpeed = char === ' ' ? speed + 30 : speed;
          timeoutId = setTimeout(typeNextChar, currentSpeed);
        } else {
          setIsTyping(false);
        }
      };
      typeNextChar();
    }, delay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timeoutId);
    };
  }, [text, isActive, speed, delay]);

  return (
    <>
      <span>{displayedText}</span><span className={`sp-tech-cursor ${isTyping ? 'typing' : ''}`} aria-hidden="true" />
    </>
  );
}

const SliderPreview = () => {
  // Selected sample: 'clean', 'world', 'modern', 'card', 'tier', 'cinema', 'dock', 'diag'
  const [selectedSample, setSelectedSample] = useState('clean');
  // Device view mode: 'desktop' or 'mobile'
  const [deviceMode, setDeviceMode] = useState('desktop');
  // Active slide index
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sampleSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [currentIdx]);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + sampleSlides.length) % sampleSlides.length);
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % sampleSlides.length);
  };

  const slide = sampleSlides[currentIdx];
  const nextSlideData = sampleSlides[(currentIdx + 1) % sampleSlides.length];

  return (
    <div className="sp-page">
      {/* Header Banner */}
      <div className="sp-header">
        <div className="sp-badge">
          <i className="bi bi-grid-1x2-fill"></i> Showcase Gallery (8 Pilihan Sample Slider)
        </div>
        <h1 className="sp-title">Katalog Sample Desain Slider</h1>
        <p className="sp-desc">
          Pilih salah satu dari <strong>8 variasi desain slider</strong> di bawah ini untuk melihat tampilannya secara langsung. 
          Gunakan tombol simulasi untuk mengecek tampilan <strong>Desktop</strong> maupun <strong>Mobile</strong>.
        </p>

        {/* Tab Selection Toolbar */}
        <div className="sp-toolbar">
          <button
            type="button"
            className={`sp-tab-btn ${selectedSample === 'clean' ? 'active' : ''}`}
            onClick={() => setSelectedSample('clean')}
          >
            <i className="bi bi-check2-circle"></i> 1. Clean Banner (Gambar 2)
          </button>
          <button
            type="button"
            className={`sp-tab-btn ${selectedSample === 'world' ? 'active' : ''}`}
            onClick={() => setSelectedSample('world')}
          >
            <i className="bi bi-globe-americas"></i> 2. Around The World (SmartSlider 3)
          </button>
          <button
            type="button"
            className={`sp-tab-btn ${selectedSample === 'modern' ? 'active' : ''}`}
            onClick={() => setSelectedSample('modern')}
          >
            <i className="bi bi-stars"></i> 3. Modern Tech (Kanggawe)
          </button>
          <button
            type="button"
            className={`sp-tab-btn ${selectedSample === 'card' ? 'active' : ''}`}
            onClick={() => setSelectedSample('card')}
          >
            <i className="bi bi-speedometer2"></i> 4. Enterprise Glass Stat Card
          </button>
          <button
            type="button"
            className={`sp-tab-btn ${selectedSample === 'tier' ? 'active' : ''}`}
            onClick={() => setSelectedSample('tier')}
          >
            <i className="bi bi-tags-fill"></i> 5. Speed Pricing Cards Picker
          </button>
          <button
            type="button"
            className={`sp-tab-btn ${selectedSample === 'cinema' ? 'active' : ''}`}
            onClick={() => setSelectedSample('cinema')}
          >
            <i className="bi bi-film"></i> 6. Cinematic Parallax (Apple Style)
          </button>
          <button
            type="button"
            className={`sp-tab-btn ${selectedSample === 'dock' ? 'active' : ''}`}
            onClick={() => setSelectedSample('dock')}
          >
            <i className="bi bi-collection-play-fill"></i> 7. Thumbnail Dock Bar
          </button>
          <button
            type="button"
            className={`sp-tab-btn ${selectedSample === 'diag' ? 'active' : ''}`}
            onClick={() => setSelectedSample('diag')}
          >
            <i className="bi bi-slash-square"></i> 8. Diagonal Cyber Angle
          </button>
        </div>

        {/* Device Mode Toggle */}
        <div className="sp-controls-row">
          <div className="sp-view-toggle">
            <button
              type="button"
              className={`sp-toggle-btn ${deviceMode === 'desktop' ? 'active' : ''}`}
              onClick={() => setDeviceMode('desktop')}
            >
              <i className="bi bi-laptop"></i> Desktop View
            </button>
            <button
              type="button"
              className={`sp-toggle-btn ${deviceMode === 'mobile' ? 'active' : ''}`}
              onClick={() => setDeviceMode('mobile')}
            >
              <i className="bi bi-phone"></i> Mobile Simulation
            </button>
          </div>
          <Link to="/" className="btn btn-outline-light btn-sm rounded-pill px-3">
            <i className="bi bi-arrow-left"></i> Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Main Stage Display Area */}
      <div className={`sp-stage-wrapper ${deviceMode === 'mobile' ? 'mobile-sim' : ''}`}>
        
        {/* ==================================================================
            SAMPLE 1: CLEAN BANNER (GAMBAR 2)
            ================================================================== */}
        {selectedSample === 'clean' && (
          <div className="sp-clean-slider">
            {sampleSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`sp-clean-bg ${idx === currentIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ))}
            <div className="sp-clean-overlay" />
            <div className="sp-clean-content">
              <h2 className="sp-clean-title">{slide.title}</h2>
              <p className="sp-clean-sub">{slide.subtitle}</p>
              <Link to={slide.ctaLink} className="sp-clean-btn">
                <span>{slide.ctaText}</span>
                <span>→</span>
              </Link>
            </div>
            <div className="sp-dots-bar">
              {sampleSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sp-dot ${idx === currentIdx ? 'active' : ''}`}
                  onClick={() => setCurrentIdx(idx)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================
            SAMPLE 2: AROUND THE WORLD (SMART SLIDER 3)
            ================================================================== */}
        {selectedSample === 'world' && (
          <div className="sp-atw-wrap">
            {sampleSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`sp-clean-bg ${idx === currentIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ))}
            <div className="sp-clean-overlay" />
            <div className="sp-atw-frame">
              <div className="sp-atw-badge">
                <i className={`bi ${slide.icon}`}></i>
                <span>{slide.tag}</span>
              </div>
              <h2 className="sp-atw-title">
                {slide.title.split(' ')[0]} <br />
                <span className="sp-atw-strong">{slide.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="sp-atw-desc">{slide.desc}</p>
              <div>
                <Link to={slide.ctaLink} className="sp-atw-btn">
                  <span>{slide.ctaText}</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>

              {/* Bottom Right Box */}
              <div className="sp-atw-corner">
                <img src={nextSlideData.image} alt="Next" className="sp-atw-thumb" />
                <div className="sp-atw-meta">
                  <span className="sp-atw-sub">Slide Berikutnya</span>
                  <span className="sp-atw-name">{nextSlideData.title}</span>
                </div>
                <div className="sp-atw-navs">
                  <button type="button" className="sp-atw-arr sp-arr-prev" onClick={prevSlide}>
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button type="button" className="sp-atw-arr sp-arr-next" onClick={nextSlide}>
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            SAMPLE 3: MODERN TECH (KANGGAWE STYLE)
            ================================================================== */}
        {selectedSample === 'modern' && (
          <div className="sp-tech-slider">
            {sampleSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`sp-clean-bg ${idx === currentIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ))}
            <div className="sp-clean-overlay" />
            <div style={{ position: 'relative', zIndex: 3, maxWidth: '640px' }}>
              <div className="sp-tech-badge">
                <i className={`bi ${slide.icon}`}></i>
                <span>{slide.tag}</span>
              </div>
              <h2 className="sp-tech-title" aria-label={slide.title}>
                <TypewriterTitle
                  text={slide.title}
                  isActive={selectedSample === 'modern'}
                  key={`${selectedSample}-${currentIdx}`}
                />
              </h2>
              <p className="sp-tech-desc">{slide.desc}</p>
              <div className="sp-tech-actions">
                <Link to={slide.ctaLink} className="sp-btn-pri">
                  {slide.ctaText}
                </Link>
                <Link to="/contact" className="sp-btn-sec">
                  Hubungi Sales
                </Link>
              </div>
              <div className="sp-tech-checks">
                <span><i className="bi bi-check-circle-fill"></i> Tanpa Kontrak</span>
                <span><i className="bi bi-check-circle-fill"></i> Bebas FUP</span>
                <span><i className="bi bi-check-circle-fill"></i> Support 24/7</span>
              </div>
            </div>
            <div className="sp-dots-bar">
              {sampleSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sp-dot ${idx === currentIdx ? 'active' : ''}`}
                  onClick={() => setCurrentIdx(idx)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================
            SAMPLE 4: ENTERPRISE GLASS STAT CARD
            ================================================================== */}
        {selectedSample === 'card' && (
          <div className="sp-card-slider">
            {sampleSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`sp-clean-bg ${idx === currentIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ))}
            <div className="sp-clean-overlay" />
            <div className="sp-card-grid container">
              <div>
                <div className="sp-tech-badge">
                  <i className="bi bi-shield-check"></i>
                  <span>Jaminan SLA 99.9% Uptime</span>
                </div>
                <h2 className="sp-tech-title">{slide.title}</h2>
                <p className="sp-tech-desc">{slide.desc}</p>
                <Link to={slide.ctaLink} className="sp-btn-pri">
                  Lihat Detail Paket
                </Link>
              </div>

              <div className="sp-stat-box">
                <div className="sp-stat-header">
                  <span className="sp-stat-tag">
                    <i className="bi bi-lightning-fill"></i> {slide.tag}
                  </span>
                  <span className="sp-stat-live">● Active ISP</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <span className="sp-stat-number">{slide.speed}</span>
                  <span className="sp-stat-unit">{slide.unit}</span>
                </div>
                <div className="sp-stat-specs">
                  <div>
                    <span className="sp-spec-val">1:1 Ratio</span>
                    <span className="sp-spec-key">Upload Simetris</span>
                  </div>
                  <div>
                    <span className="sp-spec-val">&lt; 5 ms</span>
                    <span className="sp-spec-key">Low Latency</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sp-dots-bar">
              {sampleSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sp-dot ${idx === currentIdx ? 'active' : ''}`}
                  onClick={() => setCurrentIdx(idx)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================
            SAMPLE 5: SPEED PRICING CARDS PICKER (SaaS ISP Carousel)
            ================================================================== */}
        {selectedSample === 'tier' && (
          <div className="sp-tier-slider">
            {sampleSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`sp-clean-bg ${idx === currentIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ))}
            <div className="sp-clean-overlay" />
            <div className="sp-tier-grid container">
              <div>
                <div className="sp-tech-badge">
                  <i className="bi bi-fire"></i> Paket Internet Pilihan Populer
                </div>
                <h2 className="sp-tech-title">{slide.title}</h2>
                <p className="sp-tech-desc">{slide.desc}</p>
                <Link to="/services" className="sp-btn-pri">
                  Bandingkan Semua Paket <i className="bi bi-arrow-right"></i>
                </Link>
              </div>

              {/* 3 Quick Tier Cards */}
              <div className="sp-tier-cards-wrap">
                {sampleTiers.map((tier, tIdx) => (
                  <div key={tIdx} className={`sp-tier-card ${tier.featured ? 'featured' : ''}`}>
                    <div className="sp-tier-card-left">
                      <div className="sp-tier-icon">
                        <i className={`bi ${tier.icon}`}></i>
                      </div>
                      <div>
                        <div className="sp-tier-name">{tier.name}</div>
                        <div className="sp-tier-sub">{tier.speed} • Unlimited FUP</div>
                      </div>
                    </div>
                    <div className="sp-tier-price">
                      <div className="sp-tier-val">{tier.price}</div>
                      <div className="sp-tier-per">{tier.per}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            SAMPLE 6: CINEMATIC PARALLAX (Apple / Luxury Style)
            ================================================================== */}
        {selectedSample === 'cinema' && (
          <div className="sp-cinema-slider">
            {sampleSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`sp-clean-bg ${idx === currentIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ))}
            <div className="sp-cinema-overlay" />
            <div style={{ position: 'relative', zIndex: 5, padding: '0 1.5rem' }}>
              <div className="sp-cinema-tag">
                <i className="bi bi-broadcast-pin"></i> MITRACOM FIBER ULTRA
              </div>
              <h2 className="sp-cinema-title">
                Konektivitas Tanpa <span className="sp-cinema-gold">Kompromi.</span>
              </h2>
              <p className="sp-cinema-desc">{slide.desc}</p>
              <Link to="/contact" className="sp-cinema-btn">
                Pasang Sekarang <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="sp-dots-bar">
              {sampleSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sp-dot ${idx === currentIdx ? 'active' : ''}`}
                  onClick={() => setCurrentIdx(idx)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================
            SAMPLE 7: THUMBNAIL DOCK BAR (Travel & Showcase Style)
            ================================================================== */}
        {selectedSample === 'dock' && (
          <div className="sp-dock-slider">
            {sampleSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`sp-clean-bg ${idx === currentIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ))}
            <div className="sp-clean-overlay" />
            <div style={{ position: 'relative', zIndex: 5, maxWidth: '650px' }}>
              <div className="sp-tech-badge">
                <i className={`bi ${slide.icon}`}></i> {slide.tag}
              </div>
              <h2 className="sp-tech-title">{slide.title}</h2>
              <p className="sp-tech-desc">{slide.desc}</p>
              <Link to={slide.ctaLink} className="sp-btn-pri">
                {slide.ctaText} →
              </Link>
            </div>

            {/* Bottom Floating Thumbnail Dock */}
            <div className="sp-dock-bar">
              {sampleSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sp-dock-item ${idx === currentIdx ? 'active' : ''}`}
                  onClick={() => setCurrentIdx(idx)}
                >
                  <img src={s.image} alt={s.title} className="sp-dock-thumb" />
                  <span className="sp-dock-label">{s.tag}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================
            SAMPLE 8: DIAGONAL ANGLE CUT (Cyber Tech Style)
            ================================================================== */}
        {selectedSample === 'diag' && (
          <div className="sp-diag-slider">
            {sampleSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`sp-clean-bg ${idx === currentIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            ))}
            <div className="sp-clean-overlay" />
            <div style={{ position: 'relative', zIndex: 5, maxWidth: '680px' }}>
              <div className="sp-diag-badge">
                <i className="bi bi-cpu-fill"></i> NEXT-GEN BROADBAND ARCHITECTURE
              </div>
              <h2 className="sp-diag-title">
                {slide.title.split(' ')[0]} <span className="sp-diag-cyan">{slide.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="sp-tech-desc">{slide.desc}</p>
              <Link to={slide.ctaLink} className="sp-diag-btn">
                <span>{slide.ctaText}</span>
                <i className="bi bi-lightning-charge-fill"></i>
              </Link>
            </div>
            <div className="sp-dots-bar">
              {sampleSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sp-dot ${idx === currentIdx ? 'active' : ''}`}
                  onClick={() => setCurrentIdx(idx)}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Description Info Card */}
      <div className="sp-info-card">
        <div>
          <div className="sp-info-title">
            {selectedSample === 'clean' && '1. Clean Banner (Gambar 2)'}
            {selectedSample === 'world' && '2. Around The World (SmartSlider 3)'}
            {selectedSample === 'modern' && '3. Modern Tech (Kanggawe)'}
            {selectedSample === 'card' && '4. Enterprise Glass Stat Card'}
            {selectedSample === 'tier' && '5. Speed Pricing Cards Picker'}
            {selectedSample === 'cinema' && '6. Cinematic Parallax (Apple Style)'}
            {selectedSample === 'dock' && '7. Thumbnail Dock Bar (Showcase)'}
            {selectedSample === 'diag' && '8. Diagonal Cyber Angle (Next-Gen)'}
          </div>
          <p className="sp-info-desc">
            {selectedSample === 'clean' &&
              'Gaya minimalis & proporsional dengan judul rata tengah, tombol pill putih, dan foto latar yang bersih tanpa elemen yang menutupi gambar.'}
            {selectedSample === 'world' &&
              'Gaya SmartSlider 3 dengan sudut lengkung ikonik (64px) serta kotak navigasi di sudut kanan bawah lengkap dengan preview thumbnail slide berikutnya.'}
            {selectedSample === 'modern' &&
              'Gaya modern futuristik dengan kursor berkedip (typewriter), badge frosted glass, tombol ganda, dan poin checklist keunggulan.'}
            {selectedSample === 'card' &&
              'Gaya korporat telekomunikasi dengan kartu statistik glassmorphism melayang yang menampilkan indikator kecepatan, rasio, dan latensi.'}
            {selectedSample === 'tier' &&
              'Menghadirkan 3 kartu mini paket harga (30, 75, 150 Mbps) langsung di dalam slider sehingga calon pelanggan bisa langsung melihat opsi langganan.'}
            {selectedSample === 'cinema' &&
              'Tipografi berukuran raksasa dramatis ala Apple / Awwwards dengan gradasi emas mewah dan tombol putih elegan yang eye-catching.'}
            {selectedSample === 'dock' &&
              'Dermaga thumbnail interaktif melayang di bagian bawah layar sehingga pengguna dapat langsung mengklik slide mana pun yang ingin dilihat.'}
            {selectedSample === 'diag' &&
              'Desain berenergi tinggi dengan potongan sudut modern, badge hijau neon, dan aksen cyan menyala untuk citra ISP yang tangguh & mutakhir.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderPreview;
