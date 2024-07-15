import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingsContext } from '../../context/BookingsContext';
import './Bookings.css';
import { FaSailboat } from 'react-icons/fa6';
import { GiPalmTree } from 'react-icons/gi';
import { IoTime } from 'react-icons/io5';
import { TbCurrencyPeso } from 'react-icons/tb';

const Bookings = () => {
  const { bookings } = useContext(BookingsContext);
  const navigate = useNavigate();

  const handleViewAllActivities = () => {
    navigate('/activities');
  };

  return (
    <div className="main-wrapper">
      <div className="heading-wrapper">
        <h1 className="text-dark custom-heading-margin">Bookings</h1>
      </div>
      <div className="container mt-5 text-center">
        <div className="bookings-grid">
          {bookings.slice(0, 9).map((activity) => (
            <div key={activity._id} className="booking-card">
              <div className="card-body">
                <div className="card-item">
                  <FaSailboat className="card-item-icon" />
                  <span className="card-item-text">Bangkas Name: {activity.bangkasName}</span>
                </div>
                <div className="card-item">
                  <GiPalmTree className="card-item-icon" />
                  <span className="card-item-text">Destination: {activity.destination}</span>
                </div>
                <div className="card-item">
                  <IoTime className="card-item-icon" />
                  <span className="card-item-text">Date: {new Date(activity.date).toLocaleDateString()}</span>
                </div>
                <div className="card-item">
                  <TbCurrencyPeso className="card-item-icon" />
                  <span className="card-item-text">Total Price: {activity.totalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleViewAllActivities} className="btn btn-primary mt-4">View All Activities</button>
      </div>
    </div>
  );
};

export default Bookings;
