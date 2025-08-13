import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './TestimonialsSection.css';
import { testimonials } from '../data/testimonials';

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

const TestimonialsSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const carouselRef = useRef(null);

  // Sync dots with approximate scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollTop = carouselRef.current.scrollTop;
        const itemHeight = 180; // Match CSS min-height of testimonial-card
        const itemsPerRow = window.innerWidth <= 768 ? (window.innerWidth <= 640 ? 1 : 2) : 3;
        const rowHeight = itemHeight;
        const index = Math.round(scrollTop / rowHeight) % Math.ceil(testimonials.length / itemsPerRow);
        setCurrentTestimonialIndex(index);
      }
    };
    carouselRef.current?.addEventListener('scroll', handleScroll);
    return () => carouselRef.current?.removeEventListener('scroll', handleScroll);
  }, [testimonials.length]);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const itemHeight = 180; // Match CSS min-height of testimonial-card
      const itemsPerRow = window.innerWidth <= 768 ? (window.innerWidth <= 640 ? 1 : 2) : 3;
      const rowHeight = itemHeight;
      carouselRef.current.scrollTo({ top: index * rowHeight, behavior: 'smooth' });
      setCurrentTestimonialIndex(index);
    }
  };

  // Duplicate testimonials multiple times for smooth infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="testimonials-section">
      <motion.h2
        className="section-title1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Testimonials
      </motion.h2>
      <div className="testimonials-container">
        <motion.div
          className="testimonial-slider"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={carouselRef}
        >
          {duplicatedTestimonials.length > 0 ? (
            duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                variants={cardVariants}
              >
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </motion.div>
            ))
          ) : (
            <p className="no-testimonials">No testimonials available.</p>
          )}
        </motion.div>
        <div className="testimonial-dots">
          {Array(Math.ceil(testimonials.length / (window.innerWidth <= 768 ? (window.innerWidth <= 640 ? 1 : 2) : 3))).fill().map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to testimonial row ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;