import React from 'react';
import Button from '../components/Button';

const Destination = () => {
  return (
    <div>
      <h1>Destination Page</h1>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Button onClick={() => alert("Destination button clicked!")}>
          Destination Now Button
        </Button>
      </div>
      <p>This is your Destination page content.</p>
    </div>
  );
};

export default Destination;