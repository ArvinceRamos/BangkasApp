import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ image, title, text, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={image} className="card-img-top img-fluid" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
