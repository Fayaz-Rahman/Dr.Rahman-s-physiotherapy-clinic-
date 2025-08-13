import './HeroSection.css';
import logo from '../assets/react.svg';
import { useEffect } from 'react';

const HeroSection = ({ navigateTo }) => {
  useEffect(() => {
    // Animation for the hero elements
    const elements = document.querySelectorAll('.hero-text > *');
    elements.forEach((el, i) => {
      el.style.animation = `fadeInUp 0.5s ease forwards ${i * 0.2 + 0.5}s`;
      el.style.opacity = '0';
    });
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      
      <div className="hero-content">

        <div className="doctor-image-container">
          <div className="doctor-photo">
            <img src={logo} alt="Doctor Rahman" />
          </div>
          <div className="doctor-badge">
            <span>15+ Years Experience</span>
          </div>
        </div>

        
        <div className="hero-text">
          <h1 className="clinic-title">
            <span className="title-highlight">Restore</span> Your Mobility, 
            <br />
            <span className="title-highlight">Revive</span> Your Life
          </h1>
          <p className="clinic-subtitle">
            Expert physiotherapy care tailored to your unique needs. 
            <span className="subtitle-highlight"> Pain relief</span>, 
            <span className="subtitle-highlight"> rehabilitation</span>, and 
            <span className="subtitle-highlight"> personalized treatment</span> for optimal recovery.
          </p>
          
          <div className="hero-cta-container">
            <button 
              onClick={() => navigateTo('contact')} 
              className="cta-button primary"
            >
              Book an Appointment
            </button>
            <button 
              onClick={() => navigateTo('services')} 
              className="cta-button secondary"
            >
              Our Services
            </button>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Same-day Appointments</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Personalized Care</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Home Visits Available</span>
            </div>
          </div>
        </div>
        
        
      </div>
      
      {/* Scrolling indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="scroller"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default HeroSection;