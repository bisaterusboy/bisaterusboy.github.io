import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Slider.css';
import banner1 from '../assets/img/banner-1.webp';
import banner2 from '../assets/img/banner-2.webp';
import banner3 from '../assets/img/banner-3.webp';

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
          // Slight natural pause on space for human feel
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
      <span>{displayedText}</span><span className={`modern-tech-cursor ${isTyping ? 'typing' : ''}`} aria-hidden="true" />
    </>
  );
}

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const slides = [
    {
      id: 1,
      image: banner2,
      tag: 'Home Broadband Pedesaan',
      icon: 'bi-house-door-fill',
      title: 'Internet Cepat Harga Hemat',
      desc: 'Layanan broadband pedesaan berkecepatan tinggi tanpa batas kuota FUP. Memberdayakan produktivitas warga dan mendorong pertumbuhan ekonomi lokal Indramayu.',
      ctaText: 'Cek Paket Desa',
      ctaLink: '/business',
      secText: 'Hubungi Sales',
      secLink: '/contact',
      features: ['Tanpa Kontrak Mengikat', 'Bebas Kuota FUP', 'Teknisi Siap 24/7'],
    },
    {
      id: 2,
      image: banner1,
      tag: 'Internet Generasi Digital',
      icon: 'bi-mortarboard-fill',
      title: 'Internet Wong Dewek',
      desc: 'Infrastruktur fiber optik berkecepatan tinggi dan latensi rendah dari Indramayu untuk negeri, menunjang edukasi digital, UMKM kreatif, dan hiburan keluarga.',
      ctaText: 'Layanan Kami',
      ctaLink: '/services',
      secText: 'Konsultasi Gratis',
      secLink: '/contact',
      features: ['Pure Fiber Optic 1:1', 'Latensi Ultra Rendah', 'NOC 24/7 Priority'],
    },
    {
      id: 3,
      image: banner3,
      tag: 'Jaringan Tangguh Pesisir',
      icon: 'bi-compass-fill',
      title: 'Internet Untuk Semua Masyarakat',
      desc: 'Koneksi andal terpercaya untuk area pelabuhan, sektor perikanan pesisir, dan seluruh lapisan masyarakat dengan tarif terjangkau dan kualitas juara.',
      ctaText: 'Pilih Paket Terbaik',
      ctaLink: '/business',
      secText: 'Hubungi WhatsApp',
      secLink: '/contact',
      features: ['Tahan Cuaca Pesisir', 'Harga Saudara', 'Respon Teknisi Cepat'],
    },
  ];

  // Auto-slide every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [currentSlide, isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="modern-tech-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Modern Tech Hero Slider"
    >
      {/* Background Slides (Crisp, Bright, No Blur) */}
      <div className="modern-tech-bg-wrap" aria-hidden="true">
        {slides.map((s, idx) => (
          <div
            key={`slide-bg-${s.id}`}
            className={`modern-tech-bg ${idx === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        {/* Subtle, soft gradient to keep text legible without darkening the banner photo */}
        <div className="modern-tech-overlay" />
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        className="modern-arrow modern-arrow-prev"
        onClick={prevSlide}
        aria-label="Slide Sebelumnya"
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      <button
        type="button"
        className="modern-arrow modern-arrow-next"
        onClick={nextSlide}
        aria-label="Slide Berikutnya"
      >
        <i className="bi bi-chevron-right"></i>
      </button>

      {/* Main Content Area */}
      <div className="container modern-tech-container">
        {slides.map((slide, idx) => (
          <div
            key={`slide-content-${slide.id}`}
            className={`modern-tech-content ${idx === currentSlide ? 'active' : ''}`}
          >
            {/* Pill Tag Badge */}
            <div className="modern-tech-badge">
              <i className={`bi ${slide.icon}`}></i>
              <span>{slide.tag}</span>
            </div>

            {/* Headline with Tech Terminal Typewriter Effect */}
            <h1 className="modern-tech-title" aria-label={slide.title}>
              <TypewriterTitle text={slide.title} isActive={idx === currentSlide} />
            </h1>

            {/* Description */}
            <p className="modern-tech-desc">{slide.desc}</p>

            {/* CTA Buttons */}
            <div className="modern-tech-actions">
              <Link to={slide.ctaLink} className="modern-btn-pri">
                <span>{slide.ctaText}</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to={slide.secLink} className="modern-btn-sec">
                <span>{slide.secText}</span>
              </Link>
            </div>

            {/* Trust / Feature Checkmarks */}
            <div className="modern-tech-checks">
              {slide.features.map((feature, fIdx) => (
                <span key={fIdx} className="modern-check-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{feature}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Dot Navigation */}
      <div className="modern-tech-dots" role="tablist" aria-label="Slider Pagination">
        {slides.map((s, idx) => (
          <button
            key={`dot-${s.id}`}
            type="button"
            className={`modern-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Buka slide ${idx + 1}`}
            aria-selected={idx === currentSlide}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}

export default Slider;