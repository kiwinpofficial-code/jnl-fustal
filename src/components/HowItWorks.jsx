import React from 'react';
import { STEPS, RULES } from '../data/mockData';

export default function HowItWorks() {
  return (
    <section id="info">
      <div className="container">
        <span className="eyebrow"></span>
        <span className="label">How It Works</span>
        <h2 className="h2">Simple, fast, no hassle.</h2>
        
        <div className="info-layout">
          <div className="steps">
            {STEPS.map((step) => (
              <div key={step.id} className="step">
                <div className="step-n">{step.id}</div>
                <div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-body">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-card-lbl">Opening Hours</div>
              <div className="info-row">
                <span className="info-k">Monday – Saturday</span>
                <span className="info-v">6:00 AM – 11:00 PM</span>
              </div>
              <div className="info-row">
                <span className="info-k">Sunday</span>
                <span className="info-v">7:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-lbl">Pricing</div>
              <div className="info-row">
                <span className="info-k">1 Hour</span>
                <span className="info-price">NPR 1,200</span>
              </div>
              <div className="info-row">
                <span className="info-k">2 Hours</span>
                <span className="info-price">NPR 2,200</span>
              </div>
              <div className="info-row">
                <span className="info-k">Tournament</span>
                <span className="info-v">Custom Quote</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-lbl">Arena Rules</div>
              {RULES.map((rule, idx) => (
                <div key={idx} className="rule-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
