import React from 'react';
import { FEATURES } from '../data/mockData';

export default function Facilities() {
  return (
    <section id="features">
      <div className="container">
        <span className="eyebrow"></span>
        <span className="label">Facilities</span>
        <h2 className="h2">Everything under one roof.</h2>
        
        <div className="feat-grid">
          {FEATURES.map((f) => (
            <div key={f.id} className="feat-cell">
              <div
                className="feat-ico"
                dangerouslySetInnerHTML={{ __html: f.svg }}
              />
              <div className="feat-name">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
