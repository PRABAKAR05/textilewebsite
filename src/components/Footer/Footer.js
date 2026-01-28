import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const whatsappNumber = '916381250210';
  const phoneNumber = '+91-6381250210';
  const businessEmail = 'info@handloomheritage.com';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Handloom Heritage brings authentic handloom sarees and premium lungis
            directly from traditional weavers to you. Family-run business dedicated
            to preserving textile heritage.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/bulk-enquiry">Bulk Enquiry</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <strong>Phone:</strong> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </p>
          <p>
            <strong>Email:</strong> <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
          </p>
          <p>
            <strong>WhatsApp:</strong> <a href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20am%20interested%20in%20your%20products`} target="_blank" rel="noopener noreferrer">Message us</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Handloom Heritage. All rights reserved. | Authentic Handloom Textiles | Traditional Indian Sarees & Lungis</p>
      </div>
    </footer>
  );
};

export default Footer;
