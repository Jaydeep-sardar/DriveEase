import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [days, setDays] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name}:\nCar: ${car}\nDays: ${days}`);
  };

  return (
    <div className="booking-form">
      <h2>Book a Car</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <select value={car} onChange={(e) => setCar(e.target.value)} required>
          <option value="" disabled>Select a car</option>
          <option value="Toyota Camry">Toyota Camry</option>
          <option value="Honda Accord">Honda Accord</option>
          <option value="Ford Mustang">Ford Mustang</option>
        </select>
        <input 
          type="number" 
          placeholder="Number of Days" 
          value={days} 
          onChange={(e) => setDays(e.target.value)} 
          min="1" 
          required 
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;