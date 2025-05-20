import React from 'react';
import Button from '../components/Button';

const Cart = () => {
  return (
    <div>
      <h1>Cart Page</h1>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Button onClick={() => alert("Cart button clicked!")}>
          View Your Cart
        </Button>
      </div>
      <p>This is your cart content.</p>
    </div>
  );
};

export default Cart;