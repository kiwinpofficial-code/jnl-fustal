import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/images/jnl_logo.png" alt="JNL Logo" />
              <span className="footer-brand-name">Jamboree Nexus Lounge</span>
            </div>
            <p className="footer-tagline">
              A nexus for football lovers and enthusiasts. Futsal · Gaming · Café · Library · Memorabilia.
            </p>
          </div>

          <div>
            <div className="footer-col-head">Navigation</div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#features">Facilities</a>
              <a href="#schedule">Schedule</a>
              <a href="#info">How to Book</a>
              <a href="#location">Location</a>
              <a href="#book">Book Now</a>
            </div>
          </div>

          <div>
            <div className="footer-col-head">Contact</div>
            <div className="footer-contact">
              <span>986-2170872</span>
              <span>jnl@gmail.com</span>
              <span>Swagatam Marg, Biratnagar</span>
              <span>Koshi Province 56613</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-bottom-left">
            &copy; {new Date().getFullYear()} Jamboree Nexus Lounge. All rights reserved.
          </span>
          <div className="footer-bottom-right">
            <div className="powered-by">
              Powered by <span>Kiwi.Nepal</span>
            </div>
            <a href="#book" className="footer-admin-link">Reservations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
