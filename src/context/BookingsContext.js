import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BookingsContext = createContext();

export const BookingsProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/activities');
        setBookings(response.data.slice(0, 10)); // Load only the latest 10 bookings initially
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const addBooking = (newBooking) => {
    setBookings((prevBookings) => [newBooking, ...prevBookings].slice(0, 10)); // Add new booking at the beginning and keep only 10
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingsContext.Provider>
  );
};
