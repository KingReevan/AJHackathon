import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can connect to your backend here (POST /api/newsletter or similar)
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section">
      <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
      <p className="newsletter-subtitle">Get the latest travel deals and destination tips delivered to your inbox.</p>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="newsletter-button">Get Started</button>
      </form>

      {submitted && <p className="newsletter-success">Thanks for subscribing!</p>}
    </section>
  );
};

export default Newsletter;
