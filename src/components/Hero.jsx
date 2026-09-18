import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-vignette"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="hero-dot"></span>
            Biratnagar, Nepal
          </div>
          <h1 className="hero-h1">
            Jamboree<br />
            <em>Nexus</em><br />
            Lounge
          </h1>
          <p className="hero-tagline">Futsal · Gaming · Café · Library · Memorabilia</p>
          <div className="hero-actions">
            <a href="#book" className="btn-red">
              Book a Pitch
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#schedule" className="btn-outline">View Schedule</a>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="hstat">
            <div className="hstat-val">6 AM</div>
            <div className="hstat-lbl">Opens Daily</div>
          </div>
          <div className="hstat">
            <div className="hstat-val">500+</div>
            <div className="hstat-lbl">Players Monthly</div>
          </div>
          <div className="hstat">
            <div className="hstat-val">9862170872</div>
            <div className="hstat-lbl">Call to Enquire</div>
          </div>
        </div>
      </div>
    </section>
  );
}
