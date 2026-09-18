import React from 'react';

export default function BookingForm({ formData, setFormData, onSubmitBooking }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitBooking(formData);
  };

  return (
    <section id="book">
      <div className="container">
        <div className="form-wrap">
          <div className="form-head">
            <span className="eyebrow" style={{ margin: '0 auto 0.875rem' }}></span>
            <span className="label">Reservations</span>
            <h2 className="h2">Request a Booking</h2>
            <p style={{ marginTop: '0.625rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
              We confirm by phone within 1–2 hours.
            </p>
          </div>

          <div className="form-card">
            <form onSubmit={handleSubmit} id="bookingForm">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <div className="form-grid">
                  <div className="field">
                    <label>
                      Full Name <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="customer_name"
                      required
                      value={formData.customer_name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="field">
                    <label>
                      Phone <sup>*</sup>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98XXXXXXXX"
                    />
                  </div>
                </div>

                <div className="field">
                  <label>
                    Email <span className="opt">(optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                  />
                </div>

                <div className="field">
                  <label>
                    Date <sup>*</sup>
                  </label>
                  <input
                    type="date"
                    id="inputDate"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label>
                      Start Time <sup>*</sup>
                    </label>
                    <input
                      type="time"
                      id="inputStartTime"
                      name="start_time"
                      required
                      value={formData.start_time}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label>
                      End Time <sup>*</sup>
                    </label>
                    <input
                      type="time"
                      id="inputEndTime"
                      name="end_time"
                      required
                      value={formData.end_time}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label>
                    Notes <span className="opt">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Team size, requests..."
                  ></textarea>
                </div>

                <button type="submit" className="form-submit">
                  Submit Request
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <p className="form-note">No payment needed at this stage.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
