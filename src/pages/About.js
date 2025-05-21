import React from 'react';
import Button from '../components/Button';

const AboutUs = () => {
  return (
    <div>
      <h1>About US Page</h1>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Button onClick={() => alert("ABOUT button clicked!")}>
          View Your About Us
        </Button>
      </div>
      <p>This is your About US content.</p>
    </div>
  );
};

export default AboutUs;