import React from 'react';
import CarItem from './CarItem';
import './CarList.css';

const cars = [
  {
    id: 1,
    name: 'Toyota Camry',
    price: 50,
    image: 'https://images.unsplash.com/photo-1517676109075-9a94d44145d1?w=500&auto=format&fit=crop&q=60',
    description: 'A comfortable midsize sedan with excellent fuel efficiency.'
  },
  {
    id: 2,
    name: 'Honda Accord',
    price: 55,
    image: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60',
    description: 'A stylish sedan with a spacious interior and advanced safety features.'
  },
  {
    id: 3,
    name: 'Ford Mustang',
    price: 70,
    image: 'https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=500&auto=format&fit=crop&q=60',
    description: 'A classic American muscle car known for its performance and style.'
  },
  {
    id: 4,
    name: 'Chevrolet Malibu',
    price: 65,
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhciUyMGxpc3R8ZW58MHx8MHx8fDA%3D',
    description: 'A versatile midsize car that combines comfort with great technology.'
  },
  {
    id: 5,
    name: 'Nissan Altima',
    price: 60,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhciUyMGxpc3R8ZW58MHx8MHx8fDA%3D',
    description: 'A reliable sedan with a spacious cabin and smooth ride.'
  },
  {
    id: 6,
    name: 'BMW 3 Series',
    price: 90,
    image: 'https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNhciUyMGxpc3R8ZW58MHx8MHx8fDA%3D',
    description: 'A premium sedan with luxurious features and outstanding performance.'
  },
];

const CarList = () => {
  return (
    <div className="car-list" id="cars">
      <h2>Available Cars</h2>
      <div className="cars">
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;