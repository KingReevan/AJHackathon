import React from 'react';
import { NavLink } from 'react-router-dom'; // For navigation (install if needed)
import './Navbar.css'; // We'll create this for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo">
          MyApp
        </NavLink>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link">
              Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;