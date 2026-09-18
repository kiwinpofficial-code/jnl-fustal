import React from 'react';

export default function Location() {
  return (
    <section id="location">
      <div className="container">
        <span className="eyebrow"></span>
        <span className="label">Find Us</span>
        <h2 className="h2">We're in Biratnagar.</h2>
        
        <div className="map-layout">
          <div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: '1.8', marginTop: '1.25rem' }}>
              Centrally located on Swagatam Marg with on-site parking. Easy to find, easy to reach.
            </p>
            <div className="contact-items">
              <div className="ci">
                <div className="ci-icon">
                  <svg width="14" height="14" fill="none" stroke="var(--red)" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="ci-lbl">Address</div>
                  <div className="ci-val-sm">
                    F73P+H9H, Swagatam Marg<br />
                    Biratnagar, Koshi 56613
                  </div>
                </div>
              </div>

              <div className="ci">
                <div className="ci-icon">
                  <svg width="14" height="14" fill="none" stroke="var(--red)" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.38 2 2 0 013.58 1.2h3a2 2 0 012 1.72 12 12 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.96a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.908.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="ci-lbl">Phone</div>
                  <div className="ci-val">986-2170872</div>
                </div>
              </div>

              <div className="ci">
                <div className="ci-icon">
                  <svg width="14" height="14" fill="none" stroke="var(--red)" strokeWidth="1.75" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="ci-lbl">Hours</div>
                  <div className="ci-val-sm">
                    Mon – Sat 6 AM – 11 PM<br />
                    Sun 7 AM – 10 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              title="JNL Futsal Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4120.8808392049295!2d87.28351707597068!3d26.454110476923564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75000e3fae2d%3A0x9f2f3e6909e1165!2sJnl%20futsal!5e1!3m2!1sen!2snp!4v1789561547209!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
