// src/components/Navbar.js

import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Custom styles for the Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        
        <div className="developer-name">
          <p>Voidets</p>
        </div>

    {/* Navigation Links */}
    <ul className="nav-links">
          <li>
            <NavLink 
              to="/about" 
              className="nav-link"
              activeClassName="active"
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/portfolio" 
              className="nav-link"
              activeClassName="active"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resume" 
              className="nav-link"
              activeClassName="active"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
