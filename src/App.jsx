import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Schedule from './components/Schedule';
import HowItWorks from './components/HowItWorks';
import Location from './components/Location';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { INITIAL_BOOKINGS } from './data/mockData';

export default function App() {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [toasts, setToasts] = useState([]);
  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    start_time: '17:00',
    end_time: '18:00',
    message: ''
  });

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSelectSlot = (dateStr, startTime, endTime) => {
    setFormData((prev) => ({
      ...prev,
      date: dateStr,
      start_time: startTime,
      end_time: endTime
    }));
    addToast(`Selected slot ${startTime}–${endTime} for ${dateStr}. Complete your details below.`, 'success');
  };

  const handleSubmitBooking = (data) => {
    const { customer_name, phone, date, start_time, end_time } = data;

    if (!customer_name || !phone || !date || !start_time || !end_time) {
      addToast('Please fill in all required fields.', 'error');
      return;
    }

    if (start_time >= end_time) {
      addToast('Invalid time slot: End time must be after start time.', 'error');
      return;
    }

    // Check overlap with existing bookings
    const isOverlapping = bookings.some(
      (b) => b.date === date && start_time < b.end_time && end_time > b.start_time
    );

    if (isOverlapping) {
      addToast('The selected time slot is already booked for this date. Please choose another time.', 'error');
      return;
    }

    // Add new booking
    const newBooking = {
      id: Date.now().toString(),
      date,
      start_time,
      end_time,
      customer_name
    };

    setBookings((prev) => [...prev, newBooking]);
    addToast(`Request received, ${customer_name}! We will call you at ${phone} to confirm.`, 'success');

    // Reset optional notes and name, keep date
    setFormData((prev) => ({
      ...prev,
      customer_name: '',
      phone: '',
      email: '',
      message: ''
    }));
  };

  return (
    <div className="app">
      <Toast toasts={toasts} onDismiss={removeToast} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Schedule bookings={bookings} onSelectSlot={handleSelectSlot} />
        <HowItWorks />
        <Location />
        <BookingForm
          formData={formData}
          setFormData={setFormData}
          onSubmitBooking={handleSubmitBooking}
        />
      </main>
      <Footer />
    </div>
  );
}
