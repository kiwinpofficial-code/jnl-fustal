import React, { useState } from 'react';

export default function Schedule({ bookings, onSelectSlot }) {
  const [viewMode, setViewMode] = useState('slots'); // 'slots' | 'timeline'
  const [timeFilter, setTimeFilter] = useState('all'); // 'all' | 'morning' | 'afternoon' | 'evening'
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

  const formatHourShort = (h) => {
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return `${hour12} ${ampm}`;
  };

  const formatHourFull = (h) => {
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return `${hour12}:00 ${ampm}`;
  };

  // Get active selected date display title
  const activeDateObj = new Date(selectedDateStr + 'T00:00:00');
  const displayDateStr = activeDateObj.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  // Filter bookings for the selected date
  const dateEvents = bookings.filter((b) => b.date === selectedDateStr);

  // Generate hourly slots from 6 AM (6) to 11 PM (23) -> 17 slots
  const allSlots = [];
  for (let h = 6; h < 23; h++) {
    const startH = h < 10 ? '0' + h : '' + h;
    const endH = h + 1 < 10 ? '0' + (h + 1) : '' + (h + 1);
    const slotStart = `${startH}:00`;
    const slotEnd = `${endH}:00`;

    const isBooked = dateEvents.some((e) => {
      return slotStart < e.end_time && slotEnd > e.start_time;
    });

    let period = 'morning';
    if (h >= 12 && h < 17) period = 'afternoon';
    if (h >= 17) period = 'evening';

    allSlots.push({
      hour: h,
      period,
      slotStart,
      slotEnd,
      isBooked,
      shortLabel: `${formatHourShort(h)} - ${formatHourShort(h + 1)}`,
      fullLabel: `${formatHourFull(h)} – ${formatHourFull(h + 1)}`
    });
  }

  // Filter slots by selected time period
  const filteredSlots = allSlots.filter((s) => {
    if (timeFilter === 'all') return true;
    return s.period === timeFilter;
  });

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
        <div className="sch-header">
          <div>
            <span className="eyebrow"></span>
            <span className="label">Live Availability</span>
            <h2 className="h2">Single Pitch Schedule</h2>
            <p className="sch-subtitle">
              Select a date and reserve an open hour on our futsal pitch.
            </p>
          </div>

          <div className="sch-view-tabs">
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
          <div className="sch-box">
            <div className="sch-box-head">
              <div className="sch-label">Select Date</div>
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

            {/* Time Period Filter Chips */}
            <div className="time-filter-bar">
              <button
                type="button"
                className={`filter-chip ${timeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setTimeFilter('all')}
              >
                All (17)
              </button>
              <button
                type="button"
                className={`filter-chip ${timeFilter === 'morning' ? 'active' : ''}`}
                onClick={() => setTimeFilter('morning')}
              >
                Morning (6-12)
              </button>
              <button
                type="button"
                className={`filter-chip ${timeFilter === 'afternoon' ? 'active' : ''}`}
                onClick={() => setTimeFilter('afternoon')}
              >
                Afternoon (12-5)
              </button>
              <button
                type="button"
                className={`filter-chip ${timeFilter === 'evening' ? 'active' : ''}`}
                onClick={() => setTimeFilter('evening')}
              >
                Evening (5-11)
              </button>
            </div>

            {/* Slots Grid Header */}
            <div className="slots-subhead">
              <div className="slots-title">
                Slots for {displayDateStr}
              </div>
              <div className="slots-legend">
                <span className="legend-item">
                  <span className="dot dot-avail"></span> Available
                </span>
                <span className="legend-item">
                  <span className="dot dot-booked"></span> Booked
                </span>
              </div>
            </div>

            {/* Slots Grid */}
            <div className="slots-grid">
              {filteredSlots.map((slot) => (
                <div
                  key={slot.slotStart}
                  className={`slot-card ${slot.isBooked ? 'booked' : 'available'}`}
                  onClick={() => handleSlotClick(slot)}
                >
                  <div className="slot-time">
                    <span className="time-short">{slot.shortLabel}</span>
                    <span className="time-full">{slot.fullLabel}</span>
                  </div>
                  <div className="slot-status-badge">
                    <span
                      className={`dot ${slot.isBooked ? 'dot-booked' : 'dot-avail'}`}
                    ></span>
                    <span className="status-text">{slot.isBooked ? 'Booked' : 'Available'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="sch-box">
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fafafa', marginBottom: '1rem' }}>
              Single Pitch Weekly Schedule
            </div>
            <div className="timeline-scroll">
              <table className="timeline-table">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)', color: 'var(--sub)' }}>
                    <th className="timeline-time-head">Time Slot</th>
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
                        <td className="timeline-time-cell">
                          {formatHourFull(h)} – {formatHourFull(h + 1)}
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
