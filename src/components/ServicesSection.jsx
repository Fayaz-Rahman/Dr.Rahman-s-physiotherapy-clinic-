import { useRef } from 'react';
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      when: "beforeChildren"
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 }
  }
};

const ServicesSection = () => {
  const carouselRef = useRef(null);
  const duplicatedCategories = [...serviceCategories, ...serviceCategories, ...serviceCategories];

  return (
    <section id="services" className="services-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our Specialized Services
        <span className="title-decoration"></span>
      </motion.h2>

      <div className="services-container">
        <motion.div
          className="services-carousel"
          ref={carouselRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {duplicatedCategories.map((category, index) => (
            <motion.div
              key={`${category.category}-${index}`}
              className="service-card"
              variants={cardVariants}
              whileHover="hover"
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
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;