import './AboutSection.css';
import { useEffect } from 'react';

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.about-container > *');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="doctor-about-photo">
          <div className="experience-badge">
            <span>15+</span>
            <small>Years Experience</small>
          </div>
          <div className="specialty-badge">
            <span>Neurology Specialist</span>
          </div>
        </div>
        
        <div className="about-text-content">
          <h2 className="section-title">
            <span className="title-decoration">About <b>Dr. Rahman</b></span> 
          </h2>
          <p className="about-text">
            Dr. R.B. Ijaj Rahman, B.P.T., (MPT) Neurology, is a dedicated consultant physiotherapist with extensive expertise in treating neurological and musculoskeletal conditions. With a patient-centered approach, Dr. Rahman provides personalized care to help patients regain mobility and improve their quality of life.
          </p>
          <p className="about-text">
            Our clinic is committed to delivering exceptional physiotherapy services in a compassionate and professional environment.
          </p>
          
          <div className="qualifications">
            <div className="qualification-item">
              <div className="qualification-icon">🎓</div>
              <div>
                <h3>Education</h3>
                <p>MPT in Neurology</p>
                <p>Bachelor of Physiotherapy</p>
              </div>
            </div>
            <div className="qualification-item">
              <div className="qualification-icon">🩺</div>
              <div>
                <h3>Specializations</h3>
                <p>Neurological Rehabilitation</p>
                <p>Musculoskeletal Therapy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;