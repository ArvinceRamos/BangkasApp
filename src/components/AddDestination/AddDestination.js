import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddDestination.css';

const destinations = [
  { name: "Bantayan", price: 1000, image: "/images/bantayan.jpg" },
  { name: "Camotes", price: 2000, image: "/images/camotes.jpg" },
  { name: "Bohol", price: 3000, image: "/images/bohol.jpg" },
  { name: "Moalboal", price: 4000, image: "/images/moalboal.jpg" },
  { name: "Olanggo", price: 5000, image: "/images/olanggo.jpg" },
  { name: "Sumilon", price: 6000, image: "/images/sumilon.jpg" },
  { name: "Malapascua", price: 7000, image: "/images/malapascua.jpg" },
  { name: "Alegria", price: 8000, image: "/images/alegria.jpg" },
];

const AddDestination = ({ setDestination, setDestinationPrice }) => {
  const navigate = useNavigate();

  const handleSelect = (destination) => {
    setDestination(destination.name);
    setDestinationPrice(destination.price);
    navigate('/add-bangka');
  };

  return (
    <div className="main-wrapper">
      <div className="heading-wrapper">
        <h1 className="text-dark heading-margin">Select a Destination</h1>
      </div>
      <div className="container mt-5 text-center">
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.name} className="destination-card" onClick={() => handleSelect(destination)}>
              <img src={destination.image} className="card-img-top img-fluid" alt={destination.name} />
              <div className="card-body">
                <h5 className="destination-card-title">{destination.name}</h5>
                <p className="destination-card-text">
                  <span className="destination-card-text-price">Price: {destination.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddDestination;
