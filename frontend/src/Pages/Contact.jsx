import React from 'react';
import './CSS/Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Have questions or need help? Reach out to us, and we’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>support@technogyn.com</span>
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" />
              <span>+123 456 789</span>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Tech Lane, Innovation City, Techland</span>
            </li>
          </ul>
        </div>
        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="johndoe@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
