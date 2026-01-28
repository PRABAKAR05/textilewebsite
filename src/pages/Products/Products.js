import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Product data
  const products = [
    {
      id: 1,
      name: 'Traditional Cotton Saree',
      category: 'saree',
      fabric: 'Pure Cotton',
      description: 'Handwoven traditional cotton saree with intricate border designs',
      image: '/images/sarees-1.jpg'
    },
    {
      id: 2,
      name: 'Silk Handloom Saree',
      category: 'saree',
      fabric: 'Pure Silk',
      description: 'Premium silk saree with traditional weaving techniques',
      image: '/images/sarees-2.jpg'
    },
    {
      id: 3,
      name: 'Cotton Silk Blend Saree',
      category: 'saree',
      fabric: 'Cotton-Silk Blend',
      description: 'Comfortable blend of cotton and silk for perfect draping',
      image: '/images/sarees-3.jpg'
    },
    {
      id: 4,
      name: 'Designer Handloom Saree',
      category: 'saree',
      fabric: 'Pure Cotton',
      description: 'Contemporary designs with traditional handloom craftsmanship',
      image: '/images/sarees-4.jpg'
    },
    {
      id: 5,
      name: 'Premium Cotton Lungi',
      category: 'lungi',
      fabric: 'Pure Cotton',
      description: 'Comfortable and durable premium cotton lungi, perfect for daily wear',
      image: '/images/lungis-1.jpg'
    },
    {
      id: 6,
      name: 'Striped Cotton Lungi',
      category: 'lungi',
      fabric: 'Pure Cotton',
      description: 'Classic striped lungi in various color combinations',
      image: '/images/lungis-2.jpg'
    },
    {
      id: 7,
      name: 'Solid Color Lungi',
      category: 'lungi',
      fabric: 'Pure Cotton',
      description: 'Simple solid color lungi with excellent comfort and durability',
      image: '/images/lungis-3.jpg'
    },
    {
      id: 8,
      name: 'Patterned Lungi',
      category: 'lungi',
      fabric: 'Pure Cotton',
      description: 'Beautifully patterned lungi with traditional designs',
      image: '/images/lungis-4.jpg'
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const handleWhatsAppClick = (productName, fabric) => {
    const message = `Hello! I'm interested in the ${productName} (${fabric}). Please let me know the price and availability.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/916381250210?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Explore our premium collection of handloom sarees and lungis</p>
      </div>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Products
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'saree' ? 'active' : ''}`}
            onClick={() => setActiveFilter('saree')}
          >
            Handloom Sarees
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'lungi' ? 'active' : ''}`}
            onClick={() => setActiveFilter('lungi')}
          >
            Premium Lungis
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                  className="product-image"
                />
                <div className="product-overlay">
                  <button 
                    className="quick-inquiry-btn"
                    onClick={() => handleWhatsAppClick(product.name, product.fabric)}
                  >
                    Quick Inquiry
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-fabric">
                  <span className="fabric-label">Fabric:</span>
                  <span className="fabric-value">{product.fabric}</span>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-footer">
                  <p className="price-text">Contact for Price</p>
                  <button 
                    className="whatsapp-inquiry-btn"
                    onClick={() => handleWhatsAppClick(product.name, product.fabric)}
                  >
                    📱 Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="cta-content">
          <h2>Didn't Find What You're Looking For?</h2>
          <p>We have more products available. Contact us for custom orders and bulk enquiries</p>
          <a 
            href="https://wa.me/916381250210?text=Hello%20I%20am%20looking%20for%20custom%20products" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-btn"
          >
            Contact via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
