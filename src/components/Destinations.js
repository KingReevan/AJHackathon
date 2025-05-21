import React from 'react';
import Card from './Card';
import './Destinations.css';

const Destinations = ({ destinations }) => {
  return (
    <section className="destinations-section">
      <div className="section-header">
        <h2>Popular Destinations</h2>
        <p>Explore our most sought-after travel locations</p>
      </div>
      
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <Card
            key={index}
            imageUrl={destination.imageUrl}
            title={destination.title}
            description={destination.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;