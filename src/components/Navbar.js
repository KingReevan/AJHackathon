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

          {/* Conditional render Login or Logout */}
          {!token ? (
            <li className="nav-item nav-login">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          ) : (
            <li className="nav-item nav-logout">
              <button className="nav-link logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
