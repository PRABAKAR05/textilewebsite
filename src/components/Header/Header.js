import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo">
            <h1>Handloom Heritage</h1>
            <p className="tagline">Traditional Textiles</p>
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/products" onClick={closeMenu}>Products</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/bulk-enquiry" onClick={closeMenu}>Bulk Enquiry</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <a href="https://wa.me/916381250210?text=Hello%20I%20am%20interested%20in%20your%20products" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
