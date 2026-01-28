import React from 'react';
import './Contact.css';

const Contact = () => {
  const businessPhone = '+91-6381250210';
  const businessEmail = 'info@handloomheritage.com';
  const businessAddress = '26,Kuppathai Mudali Street, Timiri Pincode: 632512, Ranipet District, TamilNadu, India';
  const whatsappNumber = '916381250210';

  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch for orders, enquiries, and support</p>
      </div>

      {/* Main Content */}
      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <div className="contact-card">
              <div className="card-icon">📍</div>
              <h3>Business Address</h3>
              <p>{businessAddress}</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">☎️</div>
              <h3>Phone</h3>
              <a href={`tel:${businessPhone}`} className="contact-link">
                {businessPhone}
              </a>
              <p className="small-text">Available during business hours</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">📧</div>
              <h3>Email</h3>
              <a href={`mailto:${businessEmail}`} className="contact-link">
                {businessEmail}
              </a>
              <p className="small-text">We'll respond within 24 hours</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">💬</div>
              <h3>WhatsApp</h3>
              <a href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20enquire%20about%20your%20products`}
                 target="_blank" rel="noopener noreferrer" className="contact-link">
                Message us on WhatsApp
              </a>
              <p className="small-text">Quick response for enquiries</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2>Find Us on Map</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3910.498341279866!2d79.30338271065263!3d12.82797598742211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ5JzQwLjciTiA3OcKwMTgnMjEuNSJF!5e1!3m2!1sen!2sin!4v1769578707641!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Handloom Heritage Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="hours-section">
        <div className="hours-container">
          <h2>Business Hours</h2>
          <div className="hours-grid">
            <div className="hour-item">
              <span className="day">Monday - Friday</span>
              <span className="time">9:00 AM - 6:00 PM</span>
            </div>
            <div className="hour-item">
              <span className="day">Saturday</span>
              <span className="time">9:00 AM - 4:00 PM</span>
            </div>
            <div className="hour-item">
              <span className="day">Sunday</span>
              <span className="time">Closed</span>
            </div>
          </div>
          <p className="hours-note">
            💡 <strong>Note:</strong> We're available on WhatsApp 24/7 for urgent enquiries
          </p>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="quick-contact">
        <div className="quick-contact-container">
          <h2>Quick Contact Methods</h2>
          <div className="contact-methods-grid">
            <a href={`tel:${businessPhone}`} className="quick-contact-btn phone-btn">
              <span className="btn-icon">☎️</span>
              <span className="btn-text">Call Us</span>
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="quick-contact-btn whatsapp-btn">
              <span className="btn-icon">💬</span>
              <span className="btn-text">WhatsApp</span>
            </a>
            <a href={`mailto:${businessEmail}`} className="quick-contact-btn email-btn">
              <span className="btn-icon">📧</span>
              <span className="btn-text">Email Us</span>
            </a>
            <a href="/bulk-enquiry" className="quick-contact-btn enquiry-btn">
              <span className="btn-icon">📋</span>
              <span className="btn-text">Bulk Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you ship to other cities?</h3>
              <p>
                Yes! We deliver across India. Contact us via WhatsApp or email for shipping 
                details and delivery timelines.
              </p>
            </div>
            <div className="faq-item">
              <h3>What about bulk orders?</h3>
              <p>
                We specialize in bulk orders for retailers, wholesalers, and dealers. Visit our 
                Bulk Enquiry page or WhatsApp us for custom pricing.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer customization?</h3>
              <p>
                Yes, we can create custom designs based on your preferences. Contact us to 
                discuss your specific requirements.
              </p>
            </div>
            <div className="faq-item">
              <h3>What's your return policy?</h3>
              <p>
                We ensure 100% quality products. For any issues, contact us immediately and 
                we'll resolve it to your satisfaction.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I pay for orders?</h3>
              <p>
                We accept various payment methods. Discuss payment options with our team 
                after placing your enquiry.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I visit your showroom?</h3>
              <p>
                Yes! We welcome visits by appointment. Call or WhatsApp us to schedule a 
                visit to see our collections in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="cta-content">
          <h2>Ready to Explore Our Collections?</h2>
          <p>Get in touch with us today for orders, enquiries, or just to learn more about our products</p>
          <div class="cta-buttons">
            <a href="/" className="cta-btn primary-btn">Browse Products</a>
            <a href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20know%20more`}
               target="_blank" rel="noopener noreferrer" className="cta-btn secondary-btn">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
