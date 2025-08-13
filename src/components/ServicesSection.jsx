import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';

// Service data with images
export const serviceCategories = [
  {
    category: 'Pain Management',
    services: [
      'Neck & Back Pain',
      'Shoulder & Elbow Pain',
      'Hip & Knee Pain',
      'Ankle & Wrist Pain'
    ],
    icon: '🩺',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Comprehensive pain relief treatments tailored to your specific needs and conditions.'
  },
  {
    category: 'Neurological Conditions',
    services: [
      'Stroke & Paralysis',
      'Parkinson & Movement Disorders',
      'Cerebral Palsy & Autism',
      'Bell\'s Palsy & Facial Paralysis'
    ],
    icon: '🧠',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Specialized care for neurological disorders to improve mobility and quality of life.'
  },
  {
    category: 'Specialized Care',
    services: [
      'Pre & Post Operative Care',
      'Pre Natal & Post Natal Care',
      'Home Visits Available',
      'Sports Injury Rehabilitation'
    ],
    icon: '🌟',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Personalized treatment plans for specialized medical conditions and recovery needs.'
  }
];

const ServicesSection = () => {
  const carouselRef = useRef(null);
  const requestRef = useRef();
  const animationSpeed = 0.5; // Adjust speed (lower = slower)
  let position = 0;
  let lastTimestamp = 0;

  const animate = (timestamp) => {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    if (carouselRef.current) {
      position -= animationSpeed * (delta / 16); // Normalize speed
      const totalWidth = carouselRef.current.scrollWidth / 2;
      
      if (position <= -totalWidth) {
        position = 0;
      }
      
      carouselRef.current.style.transform = `translateX(${position}px)`;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section id="services" className="services-section">
      <motion.h2
        className="section-title1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our Specialized Services
      </motion.h2>

      <div className="services-container">
        <div 
          className="services-carousel" 
          ref={carouselRef}
        >
          {[...serviceCategories, ...serviceCategories].map((category, index) => (
            <motion.div
              key={`${category.category}-${index}`}
              className="service-card"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-image-container">
                <img
                  src={category.image}
                  alt={`${category.category} service`}
                  className="service-image"
                  loading="lazy"
                />
                <div className="service-badge">{category.icon}</div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">
                  {category.category}
                </h3>
                
                <p className="service-description">
                  {category.description}
                </p>
                
                <div className="service-list">
                  <h4 className="services-subtitle">Includes:</h4>
                  <ul>
                    {category.services.map((service, i) => (
                      <li key={i} className="service-item">
                        <span className="service-bullet">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;