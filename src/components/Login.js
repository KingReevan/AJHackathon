import React from 'react';
import Button from '../components/Button';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Button onClick={() => alert("Login button clicked!")}>
          Login Now Button
        </Button>
      </div>
      <p>This is your Login page content.</p>
    </div>
  );
};

export default Login;