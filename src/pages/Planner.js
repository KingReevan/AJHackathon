import React from 'react';
import Button from '../components/Button';

const Planner = () => {
  return (
    <div>
      <h1>Planner Page</h1>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Button onClick={() => alert("Planner button clicked!")}>
          View Your Planner
        </Button>
      </div>
      <p>This is your Planner content.</p>
    </div>
  );
};

export default Planner;