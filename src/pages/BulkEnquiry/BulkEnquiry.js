import React, { useState } from 'react';
import './BulkEnquiry.css';

const BulkEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    productType: 'saree',
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.quantity) {
      alert('Please fill in all required fields');
      return;
    }

    // Create WhatsApp message
    const productName = formData.productType === 'saree' ? 'Handloom Sarees' : 'Premium Lungis';
    const enquiryMessage = `
Hi, I'm interested in a bulk order for ${productName}.

*Enquiry Details:*
Name: ${formData.name}
Phone: ${formData.phone}
City: ${formData.city}
Product: ${productName}
Quantity: ${formData.quantity} units
Additional Message: ${formData.message}

Please let me know pricing and availability.
    `.trim();

    const encodedMessage = encodeURIComponent(enquiryMessage);
    const whatsappURL = `https://wa.me/916381250210?text=${encodedMessage}`;

    // Mark as submitted
    setSubmitted(true);

    // Redirect to WhatsApp after a brief delay
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          city: '',
          productType: 'saree',
          quantity: '',
          message: ''
        });
        setSubmitted(false);
      }, 2000);
    }, 500);
  };

  return (
    <div className="bulk-enquiry-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>Bulk Enquiry</h1>
        <p>Connect with us for wholesale orders and bulk purchases</p>
      </div>

      {/* Main Content */}
      <section className="enquiry-section">
        <div className="enquiry-container">
          <div className="enquiry-intro">
            <h2>Send us your bulk enquiry</h2>
            <p>
              Whether you're a retail store, wholesaler, or dealer, we're ready to serve your bulk orders. 
              Fill out the form below and our team will get back to you with custom pricing and availability.
            </p>
          </div>

          <div className="enquiry-content">
            {/* Enquiry Form */}
            <div className="form-section">
              <form className="enquiry-form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>

                {/* City Field */}
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your city"
                  />
                </div>

                {/* Product Type */}
                <div className="form-group">
                  <label htmlFor="productType">Product Type *</label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                  >
                    <option value="saree">Handloom Sarees</option>
                    <option value="lungi">Premium Lungis</option>
                    <option value="both">Both Sarees & Lungis</option>
                  </select>
                </div>

                {/* Quantity Field */}
                <div className="form-group">
                  <label htmlFor="quantity">Quantity (units) *</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Number of units needed"
                    min="1"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="form-group full-width">
                  <label htmlFor="message">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements or designs you're looking for?"
                    rows="4"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn" disabled={submitted}>
                  {submitted ? 'Redirecting to WhatsApp...' : 'Send Enquiry via WhatsApp'}
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="info-section">
              <div className="info-card">
                <div className="info-icon">📦</div>
                <h3>Bulk Order Benefits</h3>
                <ul>
                  <li>Competitive wholesale pricing</li>
                  <li>Flexible payment terms</li>
                  <li>Custom designs available</li>
                  <li>Reliable delivery</li>
                  <li>Dedicated support</li>
                </ul>
              </div>

              <div className="info-card">
                <div className="info-icon">🤝</div>
                <h3>Our Approach</h3>
                <ul>
                  <li>Direct communication</li>
                  <li>Transparent pricing</li>
                  <li>Quality assurance</li>
                  <li>Timely delivery</li>
                  <li>Long-term partnerships</li>
                </ul>
              </div>

              <div className="info-card">
                <div className="info-icon">✨</div>
                <h3>Why Choose Us</h3>
                <ul>
                  <li>Direct from weavers</li>
                  <li>Premium quality</li>
                  <li>30+ years experience</li>
                  <li>Best prices</li>
                  <li>Authentic products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="alt-contact-section">
        <div className="alt-contact-container">
          <h2>Other Ways to Reach Us</h2>
          <div className="contact-methods">
            <a href="https://wa.me/916381250210" target="_blank" rel="noopener noreferrer" className="contact-method whatsapp">
              <span className="method-icon">💬</span>
              <h3>WhatsApp</h3>
              <p>Chat directly with our team</p>
            </a>
            <a href="tel:+916381250210" className="contact-method phone">
              <span className="method-icon">☎️</span>
              <h3>Phone Call</h3>
              <p>+91-9876543210</p>
            </a>
            <a href="mailto:info@handloomheritage.com" className="contact-method email">
              <span className="method-icon">✉️</span>
              <h3>Email</h3>
              <p>info@handloomheritage.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkEnquiry;
