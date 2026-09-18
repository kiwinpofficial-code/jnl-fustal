import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="nav-brand" onClick={closeMobileMenu}>
          <img src="/images/jnl_logo.png" alt="JNL Logo" />
          <div>
            <div className="nav-brand-text">Jamboree Nexus Lounge</div>
            <div className="nav-brand-loc">Biratnagar, Koshi Province</div>
          </div>
        </a>

        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#features" className="nav-link">Facilities</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#location" className="nav-link">Location</a>
          <a href="#book" className="nav-btn">Book a Pitch</a>
        </div>

        <button
          id="mob-btn"
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mob-menu">
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#features" onClick={closeMobileMenu}>Facilities</a>
          <a href="#schedule" onClick={closeMobileMenu}>Schedule</a>
          <a href="#location" onClick={closeMobileMenu}>Location</a>
          <a href="#book" className="nav-btn" onClick={closeMobileMenu}>Book a Pitch</a>
        </div>
      )}
    </nav>
  );
}
