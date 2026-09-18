export const FEATURES = [
  {
    id: 1,
    svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20"/></svg>`,
    title: 'Futsal Arena',
    desc: 'FIFA-grade synthetic turf with professional LED floodlights for daytime and evening sessions.'
  },
  {
    id: 2,
    svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.75"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    title: 'Gaming Zone',
    desc: 'Console gaming setups for football simulations and competitive esports. Play on and off the pitch.'
  },
  {
    id: 3,
    svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.75"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    title: 'Café',
    desc: 'Relax with food and beverages after your match. The café is open for all guests — players and spectators.'
  },
  {
    id: 4,
    svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.75"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
    title: 'Football Library',
    desc: 'A curated collection of football books, magazines, and resources for enthusiasts and analysts.'
  },
  {
    id: 5,
    svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.75"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    title: 'Memorabilia',
    desc: 'Authentic football memorabilia collection — jerseys, signed items, and collectibles on display.'
  },
  {
    id: 6,
    svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.75"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>`,
    title: 'LED Floodlights',
    desc: 'Stadium-grade lighting for perfect visibility during evening and night sessions.'
  },
  {
    id: 7,
    svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.75"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    title: 'Online Booking',
    desc: 'Reserve your pitch 24/7 from any device. Submit an enquiry and we confirm within 2 hours.'
  },
  {
    id: 8,
    svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.75"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    title: 'Free Parking',
    desc: 'Dedicated on-site parking for players and guests at no extra charge.'
  }
];

export const STEPS = [
  { id: 1, title: 'Check availability', desc: 'Browse the live calendar to find open time slots that suit your schedule.' },
  { id: 2, title: 'Submit an enquiry', desc: 'Fill in your name, phone, and preferred date and time slot.' },
  { id: 3, title: 'Receive confirmation', desc: 'We review and confirm via phone call within 1–2 hours.' },
  { id: 4, title: 'Show up and play', desc: 'Arrive 10 minutes early. Your pitch is ready and waiting.' }
];

export const RULES = [
  'Proper futsal footwear required — no metal studs',
  'Maximum 14 players per booked session',
  'Arrive at least 10 minutes before your slot',
  'No food or drink on the pitch surface',
  'Respect fellow players and staff at all times'
];

export const INITIAL_BOOKINGS = [
  {
    id: 'b1',
    date: new Date().toISOString().split('T')[0],
    start_time: '18:00',
    end_time: '19:00',
    customer_name: 'Team Alpha'
  },
  {
    id: 'b2',
    date: new Date().toISOString().split('T')[0],
    start_time: '20:00',
    end_time: '21:00',
    customer_name: 'Biratnagar Strikers'
  }
];
