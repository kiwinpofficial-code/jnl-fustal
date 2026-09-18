import React, { useState } from 'react';

export default function Schedule({ bookings, onSelectSlot }) {
  const [viewMode, setViewMode] = useState('slots'); // 'slots' | 'timeline'
  const [selectedDateStr, setSelectedDateStr] = useState(
    new Date().toISOString().split('T')[0]
  );

  // Generate date options for the next 7 days
  const today = new Date();
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const iso = d.toISOString().split('T')[0];
    const dow = i === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const num = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return { iso, dow, num, fullDate: d };
  });

  const formatHour = (h) => {
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return `${hour12}:00 ${ampm}`;
  };

  // Get active selected date display title
  const activeDateObj = new Date(selectedDateStr + 'T00:00:00');
  const displayDateStr = activeDateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  // Filter bookings for the selected date
  const dateEvents = bookings.filter((b) => b.date === selectedDateStr);

  // Generate hourly slots from 6 AM (6) to 11 PM (23) -> 17 slots
  const slots = [];
  for (let h = 6; h < 23; h++) {
    const startH = h < 10 ? '0' + h : '' + h;
    const endH = h + 1 < 10 ? '0' + (h + 1) : '' + (h + 1);
    const slotStart = `${startH}:00`;
    const slotEnd = `${endH}:00`;

    const isBooked = dateEvents.some((e) => {
      return slotStart < e.end_time && slotEnd > e.start_time;
    });

    slots.push({
      hour: h,
      slotStart,
      slotEnd,
      isBooked,
      label: `${formatHour(h)} – ${formatHour(h + 1)}`
    });
  }

  const handleSlotClick = (slot) => {
    if (slot.isBooked) return;
    onSelectSlot(selectedDateStr, slot.slotStart, slot.slotEnd);
    const bookEl = document.getElementById('book');
    if (bookEl) {
      bookEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="schedule">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2rem' }}>
          <div>
            <span className="eyebrow"></span>
            <span className="label">Live Availability</span>
            <h2 className="h2">Arena Schedule & Slots</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
              Select a date and click any available slot to reserve.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.375rem', background: 'var(--bg2)', padding: '4px', borderRadius: '8px', border: '1px solid var(--line)' }}>
            <button
              type="button"
              className={`sch-tab-btn ${viewMode === 'slots' ? 'active' : ''}`}
              onClick={() => setViewMode('slots')}
            >
              Slot Picker
            </button>
            <button
              type="button"
              className={`sch-tab-btn ${viewMode === 'timeline' ? 'active' : ''}`}
              onClick={() => setViewMode('timeline')}
            >
              Weekly Timeline
            </button>
          </div>
        </div>

        {viewMode === 'slots' ? (
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--sub)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              Select Date
            </div>
            
            {/* Swipable Date Strip */}
            <div className="date-strip">
              {dateOptions.map((item) => (
                <div
                  key={item.iso}
                  className={`date-card ${item.iso === selectedDateStr ? 'active' : ''}`}
                  onClick={() => setSelectedDateStr(item.iso)}
                >
                  <div className="date-card-dow">{item.dow}</div>
                  <div className="date-card-num">{item.num}</div>
                </div>
              ))}
            </div>

            {/* Slots Grid Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--line)' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fafafa' }}>
                Available Slots for {displayDateStr}
              </div>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80' }}></span>
                  Available
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f87171' }}></span>
                  Booked
                </span>
              </div>
            </div>

            {/* Slots Grid */}
            <div className="slots-grid">
              {slots.map((slot) => (
                <div
                  key={slot.slotStart}
                  className={`slot-card ${slot.isBooked ? 'booked' : 'available'}`}
                  onClick={() => handleSlotClick(slot)}
                >
                  <div className="slot-time">{slot.label}</div>
                  <div className="slot-status-badge">
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: slot.isBooked ? '#f87171' : '#4ade80'
                      }}
                    ></span>
                    {slot.isBooked ? 'Booked' : 'Available'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fafafa', marginBottom: '1rem' }}>
              Weekly Pitch Schedule
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)', color: 'var(--sub)' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Time Slot</th>
                    {dateOptions.map((d) => (
                      <th key={d.iso} style={{ padding: '0.75rem', textAlign: 'center', minWidth: '90px' }}>
                        <div>{d.dow}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{d.num}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[8, 10, 12, 14, 16, 18, 20, 22].map((h) => {
                    const startH = h < 10 ? '0' + h : '' + h;
                    const endH = h + 1 < 10 ? '0' + (h + 1) : '' + (h + 1);
                    return (
                      <tr key={h} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td style={{ padding: '0.75rem', color: 'var(--sub)', fontWeight: 500 }}>
                          {formatHour(h)} – {formatHour(h + 1)}
                        </td>
                        {dateOptions.map((d) => {
                          const dayBookings = bookings.filter((b) => b.date === d.iso);
                          const isBooked = dayBookings.some((e) => `${startH}:00` < e.end_time && `${endH}:00` > e.start_time);
                          return (
                            <td key={d.iso} style={{ padding: '0.5rem', textAlign: 'center' }}>
                              {isBooked ? (
                                <span style={{ background: 'rgba(192,57,43,0.2)', border: '1px solid rgba(192,57,43,0.4)', color: '#f87171', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, display: 'inline-block' }}>
                                  Reserved
                                </span>
                              ) : (
                                <span style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', color: '#4ade80', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 500, display: 'inline-block', cursor: 'pointer' }} onClick={() => { onSelectSlot(d.iso, `${startH}:00`, `${endH}:00`); document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                  Open
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
