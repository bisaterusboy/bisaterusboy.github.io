import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menangani scroll
  const toggleVisibility = () => {
    const scrollY = window.pageYOffset || window.scrollY;
    
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas dengan animasi smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Panggil toggleVisibility sekali untuk mengecek posisi awal
    toggleVisibility();
    
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '120px',
        right: '20px',
        zIndex: 1001,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#007bff',
        border: 'none',
        color: 'white',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#0056b3';
        e.target.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#007bff';
        e.target.style.transform = 'translateY(0)';
      }}
      title="Scroll to top"
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default ScrollToTopButton;
