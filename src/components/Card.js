import React from 'react';
import './Card.css'; // We'll create this for styling

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;