import { motion } from 'framer-motion';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="footer">
      {/* <div className="footer-wave"></div> */}
      
      <motion.div 
        className="footer-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Logo Section */}
        <motion.div className="footer-section footer-logo" variants={itemVariants}>
          <div className="logo-container">
            <div className="logo-image">DR</div>
            <div>
              <h2 className="logo-text">Dr. Rahman's Clinic</h2>
              <p className="tagline">Restoring Mobility, Renewing Life</p>
            </div>
          </div>
          <p className="logo-description">
            Expert physiotherapy care with a personalized approach to help you regain strength and mobility.
          </p>
          {/* <div className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div> */}
        </motion.div>
        {/* Quick Links */}
        <motion.div className="footer-section footer-links" variants={itemVariants}>
          <h3 className="section-title">Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Dr. Rahman</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#testimonials">Patient Stories</a></li>
            <li><a href="#contact">Book Appointment</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="footer-section footer-contact" variants={itemVariants}>
          <h3 className="section-title">Contact Us</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Health Street, Medical City</span>
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:6382927750">63829 27750</a>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@rahmanphysio.com">info@rahmanphysio.com</a>
            </li>
            <li>
              <FaClock className="contact-icon" />
              <span>Mon-Sat: 5:30 PM - 9:30 PM<br />Sunday: 10:00 AM - 1:00 PM</span>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div className="footer-section footer-social" variants={itemVariants}>
          <h3 className="section-title">Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
          
          {/* <div className="map-container">
            <iframe 
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789012!2d80.12345678901234!3d12.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI0LjQiTiA4MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div> */}
        </motion.div>
      </motion.div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dr. Rahman's Physiotherapy Clinic. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;