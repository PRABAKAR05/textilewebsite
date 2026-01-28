import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>About Handloom Heritage</h1>
        <p>Our Story, Our Tradition, Our Commitment</p>
      </div>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-container">
          {/* Story Section */}
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Handloom Heritage is a family-run business with deep roots in traditional textile trade. 
              For decades, we have been dedicated to preserving the art of handloom weaving while supporting 
              local artisans and weavers who keep this ancient craft alive.
            </p>
            <p>
              What started as a passion for authentic textiles has grown into a trusted business that 
              connects skilled weavers with customers who appreciate true craftsmanship. We believe that 
              every saree and lungi has a story—a story of tradition, skill, and dedication.
            </p>
          </div>

          {/* Our Values */}
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Authentic Craftsmanship</h3>
              <p>
                Every product is handwoven using traditional techniques passed down through generations. 
                We celebrate the artistry and skill of our weavers.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Support Local Artisans</h3>
              <p>
                We work directly with skilled weavers, ensuring they receive fair compensation and 
                recognition for their exceptional work.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌾</div>
              <h3>Pure Materials</h3>
              <p>
                We use only 100% natural fabrics—pure cotton and silk. No compromises on quality or purity.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>
                Every saree and lungi undergoes rigorous quality checks to ensure it meets our high standards.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="about-section experience-section">
            <h2>Decades of Textile Heritage</h2>
            <div className="experience-content">
              <div className="experience-stat">
                <h3>30+</h3>
                <p>Years in Textile Trade</p>
              </div>
              <div className="experience-stat">
                <h3>100+</h3>
                <p>Skilled Weavers Partnership</p>
              </div>
              <div className="experience-stat">
                <h3>1000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="experience-stat">
                <h3>∞</h3>
                <p>Traditional Patterns</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="about-section why-section">
            <h2>Why Choose Handloom Heritage?</h2>
            <ul className="why-list">
              <li>
                <strong>Direct from Weavers:</strong> We eliminate middlemen, ensuring better prices and 
                direct support to artisans
              </li>
              <li>
                <strong>Authentic Quality:</strong> Every product is handwoven with premium materials and 
                traditional techniques
              </li>
              <li>
                <strong>Bulk & Retail Orders:</strong> Whether you're an individual customer or a wholesale 
                dealer, we serve everyone
              </li>
              <li>
                <strong>Customization Available:</strong> We can create custom designs based on your 
                preferences
              </li>
              <li>
                <strong>Trust & Reliability:</strong> Known for honest dealings and quality assurance in 
                every transaction
              </li>
              <li>
                <strong>Supporting Heritage:</strong> By choosing us, you're supporting traditional Indian 
                textile art
              </li>
            </ul>
          </div>

          {/* Commitment Section */}
          <div className="about-section commitment-section">
            <h2>Our Commitment to You</h2>
            <p>
              We are committed to delivering authentic handloom products that honor the traditions of 
              Indian textile art. Our promise is simple: <strong>quality, authenticity, and fair dealing 
              in every transaction.</strong>
            </p>
            <p>
              Whether you're buying for personal use, retail, or bulk orders, we ensure that every 
              product you receive represents true craftsmanship and the dedication of our weaver partners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Join Our Community of Happy Customers</h2>
          <p>Experience the beauty of authentic handloom textiles</p>
          <div className="cta-buttons">
            <a href="/products" className="cta-btn primary-btn">Explore Products</a>
            <a href="https://wa.me/916381250210?text=Hello%20I%20want%20to%20know%20more%20about%20your%20business" 
               target="_blank" rel="noopener noreferrer" className="cta-btn secondary-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
