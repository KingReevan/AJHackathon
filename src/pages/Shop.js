import React from 'react';
import Button from '../components/Button';

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Button onClick={() => alert("Shop button clicked!")}>
          Shop Now Button
        </Button>
      </div>
      <p>This is your shop page content.</p>
    </div>
  );
};

export default Shop;