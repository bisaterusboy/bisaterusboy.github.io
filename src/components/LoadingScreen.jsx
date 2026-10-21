import React, { useState, useEffect } from "react";
import "../assets/css/LoadingScreen.css";
import mitracomLogo from "../assets/Logo Mitracom.webp";

const MITRACOM_STATUSES = [
  { threshold: 0,  text: "Menginisialisasi Jaringan" },
  { threshold: 18, text: "Menghubungkan Fiber Optic" },
  { threshold: 40, text: "Sinkronisasi Gateway & Server" },
  { threshold: 65, text: "Memeriksa Latensi & Bandwidth" },
  { threshold: 85, text: "Optimasi Kestabilan Koneksi" },
  { threshold: 95, text: "Koneksi Hampir Siap" },
  { threshold: 100, text: "Koneksi Terhubung" }
];

const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 110; // ~691.15

const LoadingScreen = ({ onFinish, duration = 1800, alwaysShow = true }) => {
  const alreadySeen = !alwaysShow && typeof window !== "undefined" && sessionStorage.getItem("hasSeenSplash") === "true";
  const [percent, setPercent] = useState(alreadySeen ? 100 : 0);
  const [status, setStatus] = useState(MITRACOM_STATUSES[0].text);
  const [isCompleted, setIsCompleted] = useState(alreadySeen);
  const [isFadingOut, setIsFadingOut] = useState(alreadySeen);
  const [isRemoved, setIsRemoved] = useState(alreadySeen);

  useEffect(() => {
    if (alreadySeen) return;

    // Kunci scroll halaman saat loading aktif
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let animationFrameId;
    let startTime = null;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function getStatusMessage(val) {
      let msg = MITRACOM_STATUSES[0].text;
      for (let i = 0; i < MITRACOM_STATUSES.length; i++) {
        if (val >= MITRACOM_STATUSES[i].threshold) {
          msg = MITRACOM_STATUSES[i].text;
        }
      }
      return msg;
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentPercent = Math.round(easedProgress * 100);

      setPercent(currentPercent);
      setStatus(getStatusMessage(currentPercent));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Mencapai 100% selesai
        setIsCompleted(true);
        setStatus("Koneksi Terhubung");
        try {
          if (!alwaysShow) {
            sessionStorage.setItem("hasSeenSplash", "true");
          }
        } catch {
          // ignore storage errors
        }

        // Jeda singkat untuk efek visual sukses, lalu fade out
        setTimeout(() => {
          setIsFadingOut(true);
          document.body.style.overflow = originalOverflow || "";

          if (onFinish) onFinish();

          // Hapus komponen dari DOM setelah animasi fade out selesai
          setTimeout(() => {
            setIsRemoved(true);
          }, 600);
        }, 400);
      }
    }

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = originalOverflow || "";
    };
  }, [duration, onFinish]);

  if (isRemoved) return null;

  const circleOffset = CIRCLE_CIRCUMFERENCE - (percent / 100) * CIRCLE_CIRCUMFERENCE;

  return (
    <div 
      className={`mitracom-loading-screen ${isCompleted ? "is-completed" : ""} ${isFadingOut ? "fade-out" : ""}`}
      aria-label="Memuat aplikasi Mitracom"
    >
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="loadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066ff" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Ambient Glows & Grid */}
      <div className="load-ambient-glow load-glow-1"></div>
      <div className="load-ambient-glow load-glow-2"></div>
      <div className="load-ambient-glow load-glow-3"></div>
      <div className="load-network-grid"></div>

      {/* Sparkle Nodes */}
      <div className="load-sparkle s1"></div>
      <div className="load-sparkle s2"></div>
      <div className="load-sparkle s3"></div>
      <div className="load-sparkle s4"></div>
      <div className="load-sparkle s5"></div>

      {/* Konten Utama Loading */}
      <div className="load-content">
        
        {/* HUD & Logo */}
        <div className="load-hud">
          <div className="load-orbit-ring"></div>
          <div className="load-shockwave"></div>

          {/* Circular Progress Ring */}
          <svg className="load-circle-svg" viewBox="0 0 240 240">
            <circle className="load-track-circle" cx="120" cy="120" r="110" />
            <circle 
              className="load-fill-circle" 
              cx="120" 
              cy="120" 
              r="110"
              style={{ strokeDashoffset: circleOffset }}
            />
          </svg>

          {/* Logo Container dengan Fade + Scale */}
          <div className="load-logo-container">
            <div className="load-logo-glass"></div>
            <div className="load-logo-badge">
              <img 
                src={mitracomLogo} 
                alt="Logo Mitracom" 
                className="load-logo-img" 
              />
              {/* Checkmark Sukses saat 100% */}
              <svg className="load-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Counter 0 - 100% pada Tengah */}
        <div className="load-details">
          <div className="load-counter-row">
            <span className="load-number">{percent}</span>
            <span className="load-symbol">%</span>
          </div>

          {/* Brand Name & Slogan */}
          <div className="load-brand-name">
            <span>MITRACOM SOLUSI TEKNOLOGI</span>
            <span className="load-brand-dot"></span>
          </div>
          <div className="load-brand-slogan">The Best Partner for Your Internet Connection</div>

          {/* Status Dinamis */}
          <div className="load-status-pill">
            <div className="load-status-dot"></div>
            <span className="load-status-text">{status}</span>
          </div>

          {/* Bar Linear */}
          <div className="load-linear-track">
            <div 
              className="load-linear-bar" 
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
