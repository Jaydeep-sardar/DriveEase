import React, { useState } from 'react';
import './SearchCar.css';

const SearchCar = () => {
  const [location, setLocation] = useState('');
  const [carType, setCarType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  // Sample car data (local data object simulating API response)
  const carData = [
    { id: 1, model: 'Maruti Suzuki Swift', type: 'Hatchback', price: 1200, location: 'Mumbai' },
    { id: 2, model: 'Hyundai Creta', type: 'SUV', price: 2000, location: 'Delhi' },
    { id: 3, model: 'Tata Nexon', type: 'SUV', price: 1500, location: 'Bangalore' },
    { id: 4, model: 'Honda City', type: 'Sedan', price: 1800, location: 'Chennai' },
    { id: 5, model: 'Mahindra Scorpio', type: 'SUV', price: 2500, location: 'Pune' },
    { id: 6, model: 'Kia Seltos', type: 'SUV', price: 2200, location: 'Hyderabad' },
    { id: 7, model: 'Toyota Fortuner', type: 'SUV', price: 3000, location: 'Kolkata' },
    { id: 8, model: 'Skoda Octavia', type: 'Sedan', price: 2900, location: 'Ahmedabad' },
    { id: 9, model: 'Renault Duster', type: 'SUV', price: 1800, location: 'Surat' },
    { id: 10, model: 'Hyundai i20', type: 'Hatchback', price: 1300, location: 'Mumbai' },
    { id: 11, model: 'Maruti Suzuki Baleno', type: 'Hatchback', price: 1500, location: 'Chennai' },
    { id: 12, model: 'Volkswagen Polo', type: 'Hatchback', price: 1600, location: 'Kolkata' },
    { id: 13, model: 'Ford Ecosport', type: 'SUV', price: 2200, location: 'Delhi' },
    { id: 14, model: 'Honda Amaze', type: 'Sedan', price: 1700, location: 'Pune' },
    { id: 15, model: 'Tata Harrier', type: 'SUV', price: 2600, location: 'Bangalore' },
    { id: 16, model: 'Mahindra XUV500', type: 'SUV', price: 2400, location: 'Hyderabad' },
    { id: 17, model: 'Kia Sonet', type: 'SUV', price: 1600, location: 'Surat' },
    { id: 18, model: 'Toyota Innova', type: 'SUV', price: 2800, location: 'Mumbai' },
    { id: 19, model: 'Maruti Suzuki Dzire', type: 'Sedan', price: 1400, location: 'Delhi' },
    { id: 20, model: 'Hyundai Verna', type: 'Sedan', price: 2000, location: 'Bangalore' },
    { id: 21, model: 'MG Hector', type: 'SUV', price: 2700, location: 'Chennai' },
    { id: 22, model: 'Maruti Suzuki Ciaz', type: 'Sedan', price: 1800, location: 'Kolkata' },
    { id: 23, model: 'Hyundai Venue', type: 'SUV', price: 1700, location: 'Ahmedabad' },
    { id: 24, model: 'Tata Tiago', type: 'Hatchback', price: 900, location: 'Pune' },
    { id: 25, model: 'Toyota Yaris', type: 'Sedan', price: 2300, location: 'Hyderabad' },
    { id: 26, model: 'Nissan Magnite', type: 'SUV', price: 1800, location: 'Delhi' },
    { id: 27, model: 'Renault Kwid', type: 'Hatchback', price: 700, location: 'Mumbai' },
    { id: 28, model: 'Mahindra Thar', type: 'SUV', price: 2500, location: 'Bangalore' },
    { id: 29, model: 'Honda Jazz', type: 'Hatchback', price: 1400, location: 'Chennai' },
    { id: 30, model: 'Hyundai Elantra', type: 'Sedan', price: 2900, location: 'Kolkata' },
    { id: 31, model: 'Ford Figo', type: 'Hatchback', price: 1100, location: 'Ahmedabad' },
    { id: 32, model: 'Tata Altroz', type: 'Hatchback', price: 1200, location: 'Pune' },
    { id: 33, model: 'Maruti Suzuki S-Cross', type: 'SUV', price: 2000, location: 'Hyderabad' },
    { id: 34, model: 'Hyundai Tucson', type: 'SUV', price: 2900, location: 'Delhi' },
    { id: 35, model: 'Toyota Corolla', type: 'Sedan', price: 2200, location: 'Mumbai' },
    { id: 36, model: 'Mahindra Marazzo', type: 'SUV', price: 2400, location: 'Bangalore' },
    { id: 37, model: 'Hyundai Santro', type: 'Hatchback', price: 600, location: 'Chennai' },
    { id: 38, model: 'Volkswagen Vento', type: 'Sedan', price: 2000, location: 'Kolkata' },
    { id: 39, model: 'Maruti Suzuki Vitara Brezza', type: 'SUV', price: 1900, location: 'Surat' },
    { id: 40, model: 'Kia Carnival', type: 'SUV', price: 2900, location: 'Mumbai' },
    { id: 41, model: 'Toyota Glanza', type: 'Hatchback', price: 1300, location: 'Delhi' },
    { id: 42, model: 'Tata Safari', type: 'SUV', price: 2700, location: 'Bangalore' },
    { id: 43, model: 'Renault Triber', type: 'SUV', price: 1600, location: 'Chennai' },
    { id: 44, model: 'Honda WR-V', type: 'SUV', price: 1800, location: 'Kolkata' },
    { id: 45, model: 'Maruti Suzuki Ertiga', type: 'SUV', price: 1900, location: 'Ahmedabad' },
    { id: 46, model: 'Ford Aspire', type: 'Sedan', price: 1400, location: 'Pune' },
    { id: 47, model: 'Hyundai Kona Electric', type: 'SUV', price: 2800, location: 'Hyderabad' },
    { id: 48, model: 'Tata Tigor', type: 'Sedan', price: 1200, location: 'Delhi' },
    { id: 49, model: 'Mahindra Bolero', type: 'SUV', price: 1700, location: 'Mumbai' },
    { id: 50, model: 'Nissan Kicks', type: 'SUV', price: 2100, location: 'Bangalore' },
    { id: 51, model: 'Hyundai Aura', type: 'Sedan', price: 1300, location: 'Chennai' },
    { id: 52, model: 'Renault Lodgy', type: 'SUV', price: 2300, location: 'Kolkata' },
    { id: 53, model: 'Toyota Urban Cruiser', type: 'SUV', price: 2100, location: 'Ahmedabad' },
    { id: 54, model: 'Volkswagen T-Roc', type: 'SUV', price: 2700, location: 'Pune' },
    { id: 55, model: 'Tata Punch', type: 'SUV', price: 1600, location: 'Hyderabad' },
    { id: 56, model: 'Ford Endeavour', type: 'SUV', price: 3000, location: 'Delhi' },
    { id: 57, model: 'Mahindra Alturas G4', type: 'SUV', price: 2900, location: 'Mumbai' },
    { id: 58, model: 'Hyundai Alcazar', type: 'SUV', price: 2800, location: 'Bangalore' },
    { id: 59, model: 'Maruti Suzuki Ignis', type: 'Hatchback', price: 1200, location: 'Chennai' },
    { id: 60, model: 'Renault Captur', type: 'SUV', price: 2200, location: 'Kolkata' },
    { id: 61, model: 'Honda BR-V', type: 'SUV', price: 1900, location: 'Ahmedabad' },
    { id: 62, model: 'Toyota Camry', type: 'Sedan', price: 2900, location: 'Pune' },
    { id: 63, model: 'Tata Zest', type: 'Sedan', price: 1200, location: 'Hyderabad' },
    { id: 64, model: 'Ford Mustang', type: 'Convertible', price: 3000, location: 'Delhi' },
    { id: 65, model: 'Hyundai Grand i10', type: 'Hatchback', price: 1000, location: 'Mumbai' },
    { id: 66, model: 'Mahindra XUV300', type: 'SUV', price: 1700, location: 'Bangalore' },
    { id: 67, model: 'Renault Koleos', type: 'SUV', price: 2400, location: 'Chennai' },
    { id: 68, model: 'Kia Sorento', type: 'SUV', price: 2600, location: 'Kolkata' },
    { id: 69, model: 'Toyota Hilux', type: 'SUV', price: 2800, location: 'Ahmedabad' },
    { id: 70, model: 'Honda Civic', type: 'Sedan', price: 2500, location: 'Pune' },
    { id: 71, model: 'Maruti Suzuki Alto 800', type: 'Hatchback', price: 700, location: 'Hyderabad' },
    { id: 72, model: 'Tata Hexa', type: 'SUV', price: 2400, location: 'Delhi' },
    { id: 73, model: 'Hyundai Xcent', type: 'Sedan', price: 1300, location: 'Mumbai' },
    { id: 74, model: 'Ford Fiesta', type: 'Sedan', price: 1800, location: 'Bangalore' },
    { id: 75, model: 'Maruti Suzuki Eeco', type: 'Van', price: 500, location: 'Chennai' },
    { id: 76, model: 'Tata Aria', type: 'SUV', price: 2300, location: 'Kolkata' },
    { id: 77, model: 'Honda Accord', type: 'Sedan', price: 3000, location: 'Ahmedabad' },
    { id: 78, model: 'Volkswagen Passat', type: 'Sedan', price: 2800, location: 'Pune' },
    { id: 79, model: 'Mahindra Verito', type: 'Sedan', price: 1100, location: 'Hyderabad' },
    { id: 80, model: 'Hyundai i10', type: 'Hatchback', price: 900, location: 'Delhi' },
    { id: 81, model: 'Renault Fluence', type: 'Sedan', price: 1500, location: 'Mumbai' },
    { id: 82, model: 'Tata Bolt', type: 'Hatchback', price: 1300, location: 'Bangalore' },
    { id: 83, model: 'Maruti Suzuki XL6', type: 'SUV', price: 2100, location: 'Chennai' },
    { id: 84, model: 'Hyundai Sonata', type: 'Sedan', price: 3000, location: 'Kolkata' },
    { id: 85, model: 'Tata Manza', type: 'Sedan', price: 1200, location: 'Ahmedabad' },
    { id: 86, model: 'Kia Stinger', type: 'Sedan', price: 2900, location: 'Pune' },
    { id: 87, model: 'Hyundai i20 Active', type: 'Hatchback', price: 1700, location: 'Hyderabad' },
    { id: 88, model: 'Mahindra Quanto', type: 'SUV', price: 2000, location: 'Delhi' },
    { id: 89, model: 'Volkswagen Ameo', type: 'Sedan', price: 1400, location: 'Mumbai' },
    { id: 90, model: 'Ford Fusion', type: 'Hatchback', price: 1600, location: 'Bangalore' },
    { id: 91, model: 'Toyota Prius', type: 'Sedan', price: 3000, location: 'Chennai' },
    { id: 92, model: 'Nissan Sunny', type: 'Sedan', price: 1500, location: 'Kolkata' },
    { id: 93, model: 'Maruti Suzuki Celerio', type: 'Hatchback', price: 800, location: 'Ahmedabad' },
    { id: 94, model: 'Hyundai Palisade', type: 'SUV', price: 2900, location: 'Pune' },
    { id: 95, model: 'Tata Indigo', type: 'Sedan', price: 1200, location: 'Hyderabad' },
    { id: 96, model: 'Renault Scala', type: 'Sedan', price: 1500, location: 'Delhi' },
    { id: 97, model: 'Toyota Avanza', type: 'SUV', price: 2300, location: 'Mumbai' },
    { id: 98, model: 'Honda Mobilio', type: 'SUV', price: 2000, location: 'Bangalore' },
    { id: 99, model: 'Mahindra TUV300', type: 'SUV', price: 1700, location: 'Chennai' },
    { id: 100, model: 'Hyundai Tucson', type: 'SUV', price: 2900, location: 'Kolkata' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset error before new search

    // Filter cars based on search criteria
    let filteredCars = carData;

    if (location) {
      filteredCars = filteredCars.filter(car => car.location.toLowerCase() === location.toLowerCase());
    }
    if (carType) {
      filteredCars = filteredCars.filter(car => car.type.toLowerCase() === carType.toLowerCase());
    }
    if (priceRange) {
      if (priceRange === 'low') {
        filteredCars = filteredCars.filter(car => car.price <= 500);
      } else if (priceRange === 'medium') {
        filteredCars = filteredCars.filter(car => car.price > 500 && car.price <= 1000);
      } else if (priceRange === 'high') {
        filteredCars = filteredCars.filter(car => car.price > 1000);
      }
    }

    // Set the search results
    setSearchResults(filteredCars);

    // If no cars match, show an error
    if (filteredCars.length === 0) {
      setError('No cars found matching the search criteria');
    }
  };

  return (
    <div className="search-car-container">
      <h2>Search for Cars</h2>
      <form className="search-car-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="carType">Car Type</label>
          <select
            id="carType"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
          >
            <option value="">Select car type</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Convertible">Convertible</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="priceRange">Price Range</label>
          <select
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Select price range</option>
            <option value="low">0 - 500/day</option>
            <option value="medium">500 - 1000/day</option>
            <option value="high">1000+/day</option>
          </select>
        </div>

        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Display error message if no results */}
      {error && <p className="error">{error}</p>}

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Available Cars:</h3>
          <ul>
            {searchResults.map((car) => (
              <li key={car.id}>
                <h4>{car.model}</h4>
                <p>Type: {car.type}</p>
                <p>Price: {car.price}/day</p>
                <p>Location: {car.location}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchCar;