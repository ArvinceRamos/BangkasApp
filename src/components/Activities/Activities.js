import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSailboat } from 'react-icons/fa6';
import { GiPalmTree } from 'react-icons/gi';
import { IoTime } from 'react-icons/io5';
import { TbCurrencyPeso } from 'react-icons/tb';
import './Activities.css';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = activities.filter(item =>
      item.bangkasName.toLowerCase().includes(lowercasedFilter) ||
      item.destination.toLowerCase().includes(lowercasedFilter) ||
      item.totalPrice.toString().includes(lowercasedFilter) ||
      new Date(item.date).toLocaleDateString().toLowerCase().includes(lowercasedFilter)
    );
    setFilteredActivities(filteredData);
  }, [searchTerm, activities]);

  const fetchActivities = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/activities');
      setActivities(response.data);
      setFilteredActivities(response.data); // Initially set filteredActivities to all activities
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  return (
    <div className="container">
      <h1>All Activities</h1>
      <input
        type="text"
        placeholder="Search activities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input fixed-size"
      />
      {filteredActivities.length === 0 && searchTerm && (
        <div className="no-results">No Results Found</div>
      )}
      <div className="activities-grid">
        {filteredActivities.map((activity) => (
          <div key={activity._id} className="activity-item">
            <div><FaSailboat /> Bangkas Name: {activity.bangkasName}</div>
            <div><GiPalmTree /> Destination: {activity.destination}</div>
            <div><IoTime /> Date: {new Date(activity.date).toLocaleDateString()}</div>
            <div><TbCurrencyPeso /> Total Price: {activity.totalPrice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
