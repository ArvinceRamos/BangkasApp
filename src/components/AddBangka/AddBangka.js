import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBangka.css';

const bangkas = [
  { name: "MV Cebu", price: 1000, image: "/images/mv_cebu.jpg" },
  { name: "MV Banilad", price: 2000, image: "/images/mv_banilad.jpg" },
  { name: "MV Xerxes", price: 3000, image: "/images/mv_xerxes.jpg" },
  { name: "MV Odette", price: 4000, image: "/images/mv_odette.jpg" },
  { name: "MV James", price: 5000, image: "/images/mv_james.jpg" },
  { name: "MV Melgo", price: 6000, image: "/images/mv_melgo.jpg" },
  { name: "MV Arvince", price: 7000, image: "/images/mv_arvince.jpg" },
  { name: "MV Joem", price: 8000, image: "/images/mv_joem.jpg" },
];

const AddBangka = ({ setBangka, setBangkaPrice }) => {
  const navigate = useNavigate();

  const handleSelect = (bangka) => {
    setBangka(bangka.name);
    setBangkaPrice(bangka.price);
    navigate('/summary');
  };

  return (
    <div className="main-wrapper">
      <div className="heading-wrapper">
        <h1 className="text-dark custom-heading-margin">Select a Bangka</h1>
      </div>
      <div className="container mt-5 text-center">
        <div className="bangkas-grid">
          {bangkas.map((bangka) => (
            <div key={bangka.name} className="bangka-card" onClick={() => handleSelect(bangka)}>
              <img src={bangka.image} className="card-img-top img-fluid" alt={bangka.name} />
              <div className="card-body">
                <h5 className="bangka-card-title">{bangka.name}</h5>
                <p className="bangka-card-text">
                  <span className="bangka-card-text-price">Price: {bangka.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddBangka;
