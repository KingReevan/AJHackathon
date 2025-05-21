import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically make an API call
    console.log('Submitted email:', email);
    setTimeout(() => setIsSubmitting(false), 2000); // Simulate API call
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">The Travel Tribe</h1>
        <p className="hero-tagline">Discover. Plan. Explore. Together.</p>
        
        <form onSubmit={handleSubmit} className="hero-cta">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to get started"
            className="hero-input"
            required
          />
          <button 
            type="submit" 
            className="hero-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Planning...' : 'Plan a trip'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;