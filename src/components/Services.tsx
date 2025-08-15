import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Stethoscope, Smile, Baby, Heart, Eye, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import generalMedicineImg from '@/assets/general-medicine.jpg';
import dentalCareImg from '@/assets/dental-care.jpg';
import pediatricCareImg from '@/assets/pediatric-care.jpg';

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: Stethoscope,
      title: 'General Medicine',
      image: generalMedicineImg,
      description: 'Comprehensive primary care for adults and families',
      subtopics: ['Annual Check-ups', 'Chronic Disease Management', 'Preventive Care', 'Health Screenings']
    },
    {
      icon: Smile,
      title: 'Dental Care',
      image: dentalCareImg,
      description: 'Complete dental health services for all ages',
      subtopics: ['Routine Cleanings', 'Cavity Treatment', 'Cosmetic Dentistry', 'Emergency Dental Care']
    },
    {
      icon: Baby,
      title: 'Pediatric Care',
      image: pediatricCareImg,
      description: 'Specialized medical care for children and adolescents',
      subtopics: ['Well-Child Visits', 'Immunizations', 'Growth Monitoring', 'Developmental Assessments']
    },
    {
      icon: Heart,
      title: 'Cardiology',
      image: generalMedicineImg,
      description: 'Heart health evaluation and treatment',
      subtopics: ['EKG Testing', 'Blood Pressure Monitoring', 'Cholesterol Management', 'Heart Disease Prevention']
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      image: dentalCareImg,
      description: 'Complete eye care and vision services',
      subtopics: ['Eye Exams', 'Vision Testing', 'Glaucoma Screening', 'Contact Lens Fittings']
    },
    {
      icon: Brain,
      title: 'Neurology',
      image: pediatricCareImg,
      description: 'Neurological disorders diagnosis and treatment',
      subtopics: ['Headache Treatment', 'Neurological Exams', 'Seizure Management', 'Memory Assessment']
    }
  ];


  // Scroll intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-primary">Medical Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs 
            with the highest standards of care and professionalism.
          </p>
        </div>

        {/* Horizontal Scroll Services */}
        <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Browse Our Services</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('left')}
                className="h-10 w-10 rounded-full hover:scale-110 transition-transform"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('right')}
                className="h-10 w-10 rounded-full hover:scale-110 transition-transform"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto horizontal-scroll pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="flex-none w-80 card-medical p-6 snap-center hover:scale-105 transition-all duration-300 group"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 transform transition-transform duration-300 group-hover:scale-110">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-2 text-gradient-primary group-hover:scale-105 transition-transform">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.subtopics.map((subtopic, subIndex) => (
                      <div 
                        key={subIndex} 
                        className="flex items-center gap-2 text-sm opacity-0 animate-slide-in-left"
                        style={{animationDelay: `${(subIndex + 1) * 0.1}s`, animationFillMode: 'forwards'}}
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce-gentle"></div>
                        <span className="text-muted-foreground">{subtopic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Photo Gallery Section with Masonry Effect */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center mb-12">
            Our <span className="text-gradient-primary">Modern Facilities</span>
          </h3>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[generalMedicineImg, dentalCareImg, pediatricCareImg, generalMedicineImg, dentalCareImg, pediatricCareImg, generalMedicineImg, dentalCareImg].map((image, index) => (
              <div
                key={index}
                className={`break-inside-avoid relative group overflow-hidden rounded-lg animate-scale-in hover:scale-105 transition-all duration-300 ${
                  index % 3 === 0 ? 'aspect-square' : index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[3/4]'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img
                  src={image}
                  alt={`Medical facility ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    View Gallery
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;