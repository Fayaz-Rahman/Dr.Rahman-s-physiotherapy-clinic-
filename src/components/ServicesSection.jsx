import { useRef } from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';
import { serviceCategories } from '../data/services';

// Animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const ServicesSection = () => {
  const carouselRef = useRef(null);

  // Duplicate categories multiple times for smooth infinite scroll
  const duplicatedCategories = [...serviceCategories, ...serviceCategories, ...serviceCategories, ...serviceCategories];

  return (
    <section id="services" className="services-section">
      <motion.h2
        className="section-title1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <div className="services-container">
        <motion.div
          className="services-carousel"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={carouselRef}
        >
          {duplicatedCategories.length > 0 ? (
            duplicatedCategories.map((category, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={cardVariants}
              >
                <div className="service-image-container">
                  <img
                    src={category.image}
                    alt={`${category.category} illustration`}
                    className="service-image"
                  />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <span className="service-icon">{category.icon}</span>
                    {category.category}
                  </h3>
                  <p className="service-description">{category.description}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="no-services">No services available.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;