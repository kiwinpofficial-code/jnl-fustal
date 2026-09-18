import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <span className="eyebrow"></span>
            <span className="label">About JNL</span>
            <h2 className="h2">
              More than<br />a futsal arena.
            </h2>
            <p className="about-body">
              Jamboree Nexus Lounge is Biratnagar's hub for football culture — a space where competition meets community. Play, watch, game, read, and connect, all under one roof.
            </p>
            <div className="about-meta">
              <div className="meta-row">
                <svg width="14" height="14" fill="none" stroke="var(--red)" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>F73P+H9H, Swagatam Marg, Biratnagar, Koshi 56613</span>
              </div>
              <div className="meta-row">
                <svg width="14" height="14" fill="none" stroke="var(--red)" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.38 2 2 0 013.58 1.2h3a2 2 0 012 1.72 12 12 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.96a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.908.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>986-2170872</span>
              </div>
              <div className="meta-row">
                <svg width="14" height="14" fill="none" stroke="var(--red)" strokeWidth="1.75" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Mon - Sat 6 AM - 11 PM &nbsp;·&nbsp; Sun 7 AM - 10 PM</span>
              </div>
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-cell">
              <img src="/images/hero_team.jpg" alt="JNL Team" loading="lazy" />
            </div>
            <div className="gallery-cell">
              <img src="https://plus.unsplash.com/premium_photo-1726826453087-f886b1eea16b?auto=format&fit=crop&w=600&q=75" alt="Futsal Match" loading="lazy" />
            </div>
            <div className="gallery-cell">
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=75" alt="Match Play" loading="lazy" />
            </div>
            <div className="gallery-cell">
              <img src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=600&q=75" alt="Arena View" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
