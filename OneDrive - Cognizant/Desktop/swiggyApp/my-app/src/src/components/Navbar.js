import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SwiggyApp</div>
      <ul className="navbar-links">
        <li><Link to="/">Login</Link></li>
        <li><Link to="/home">Home</Link></li>
        {/* <li><Link to="/tiffinette">Tiffinette</Link></li>
        <li><Link to="/dineout">Dineout</Link></li>
        <li><Link to="/cravery">Cravery</Link></li>
        <li><Link to="/desserts">Desserts</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
