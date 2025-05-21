import React from 'react';
import './Card.css';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-badge">Popular</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button">Explore</button>
      </div>
    </div>
  );
};

export default Card;