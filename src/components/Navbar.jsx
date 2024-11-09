import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Custom styles for the Navbar

function Navbar() {
  // State to track if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="developer-name">
          <h1>Voidets</h1>
        </div>

        {/* Hamburger menu (only visible on small screens) */}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Navigation Links */}
       <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
       
          <li>
            <NavLink to="/about" className="nav-link" activeclassname="active" onClick={handleLinkClick} >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="nav-link" activeclassname="active"onClick={handleLinkClick} >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" activeclassname="active"onClick={handleLinkClick} >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="nav-link" activeclassname="active" onClick={handleLinkClick} >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
