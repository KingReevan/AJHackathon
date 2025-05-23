import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // redirect to home after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo">
          <img src="/logo.png" alt="Travel Tribe Logo" className="logo-img" />
        </NavLink>

        <ul className="nav-menu">
          <div className="nav-center-group">
            {!token && (
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink to="/destinations" className="nav-link">
                Destinations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/planner" className="nav-link">
                Planner
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pricealerttracker" className="nav-link">
                Tracker
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutus" className="nav-link">
                About Us
              </NavLink>
            </li>
          </div>

          <div className="nav-auth-buttons">
            {!token ? (
              <>
                <NavLink to="/login" className="btn login-btn">
                  Login
                </NavLink>
                <NavLink to="/signup" className="btn signup-btn">
                  Sign Up
                </NavLink>
              </>
            ) : (
              <button onClick={handleLogout} className="btn logout-btn">
                Logout
              </button>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
