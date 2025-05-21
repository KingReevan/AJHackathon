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
          <div className="nav-center-group">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/destination" className="nav-link">
                Destination
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/planner" className="nav-link">
                Planner
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutus" className="nav-link">
                About Us
              </NavLink>
            </li>
          </div>
          <li className="nav-item nav-login">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
