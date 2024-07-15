import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { BookingsProvider } from './context/BookingsContext';
import AddBangka from './components/AddBangka/AddBangka';
import AddDestination from './components/AddDestination/AddDestination';
import Bookings from './components/Bookings/Bookings';
import Activities from './components/Activities/Activities';
import Summary from './components/Summary/Summary';


const App = () => {
  const [destination, setDestination] = useState('');
  const [destinationPrice, setDestinationPrice] = useState(0);
  const [bangka, setBangka] = useState('');
  const [bangkaPrice, setBangkaPrice] = useState(0);

  return (
    <BookingsProvider>
      <Router>
        <div className="app-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Bangkas App</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/add-destination">Destination</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/add-bangka">Bangka</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/summary">Summary</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/bookings">Bookings</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/activities">Activities</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="main-wrapper">
            <div className="main-container">
              <Routes>
                <Route path="/" element={<AddDestination setDestination={setDestination} setDestinationPrice={setDestinationPrice} />} />
                <Route path="/add-destination" element={<AddDestination setDestination={setDestination} setDestinationPrice={setDestinationPrice} />} />
                <Route path="/add-bangka" element={<AddBangka setBangka={setBangka} setBangkaPrice={setBangkaPrice} />} />
                <Route path="/summary" element={<Summary destination={destination} bangka={bangka} totalPrice={destinationPrice + bangkaPrice} />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/activities" element={<Activities />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </BookingsProvider>
  );
};

export default App;
