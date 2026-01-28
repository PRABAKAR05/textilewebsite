import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Authentic Handloom Sarees & Premium Lungis</h1>
          <p className="hero-subtitle">
            Direct from Traditional Weavers | Celebrating Quality, Tradition & Craftsmanship
          </p>
          <div className="hero-cta">
            <Link to="/products" className="cta-btn primary-btn">View Products</Link>
            <a href="https://wa.me/6381250210?text=Hello%20I%20am%20interested%20in%20your%20products" 
               target="_blank" rel="noopener noreferrer" className="cta-btn secondary-btn">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="highlights">
        <div className="highlights-container">
          <div className="highlight-card">
            <div className="highlight-icon">🧵</div>
            <h3>Pure Cotton & Silk</h3>
            <p>100% authentic fabrics sourced directly from traditional weavers</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🏭</div>
            <h3>Direct from Weavers</h3>
            <p>Eliminate middlemen, support local artisans, get best prices</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">📦</div>
            <h3>Bulk & Retail Orders</h3>
            <p>Available for retail customers, wholesalers, and bulk buyers</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">⏰</div>
            <h3>Trusted Since Years</h3>
            <p>Family-run business with decades of experience in textile trade</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Our Collections</h2>
          <p>Explore our carefully curated handloom collections</p>
        </div>

        <div className="featured-grid">
          <div className="featured-card handloom-sarees">
            <div className="featured-image">
              <img src="/images/sarees-1.jpg" alt="Handloom Sarees" loading="lazy" />
            </div>
            <div className="featured-content">
              <h3>Handloom Sarees</h3>
              <p>Traditional cotton and silk sarees woven with intricate designs by skilled artisans</p>
              <Link to="/products" className="view-btn">View Collection</Link>
            </div>
          </div>

          <div className="featured-card lungis">
            <div className="featured-image">
              <img src="/images/lungis-1.jpg" alt="Premium Lungis" loading="lazy" />
            </div>
            <div className="featured-content">
              <h3>Premium Lungis</h3>
              <p>Comfortable and durable lungis in various colors and patterns</p>
              <Link to="/products" className="view-btn">View Collection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Experience Authentic Handlooms?</h2>
          <p>Whether you're looking for retail purchases or bulk orders, we're here to help</p>
          <div className="cta-buttons">
            <Link to="/bulk-enquiry" className="cta-btn primary-btn">Bulk Enquiry</Link>
            <a href="https://wa.me/916381250210?text=Hello%20I%20want%20to%20know%20more%20about%20your%20products" 
               target="_blank" rel="noopener noreferrer" className="cta-btn secondary-btn">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
