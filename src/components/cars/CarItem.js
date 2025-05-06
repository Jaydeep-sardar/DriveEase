import React from 'react';
import './CarItem.css';

const CarItem = ({ car }) => {
  return (
    <div className="car-item">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>${car.price}/day</p>
      <p className="car-description">{car.description}</p>
      <button className="rent-button">Rent Now</button>
    </div>
  );
};

export default CarItem;