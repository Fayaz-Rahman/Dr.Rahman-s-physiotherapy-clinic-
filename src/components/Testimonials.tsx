import { useRef, useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mother of Two',
      content: 'Dr. Johnson and her team have been taking care of our family for over 5 years. The level of care and attention we receive is exceptional. They truly care about their patients.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Business Professional',
      content: 'The clinic is modern, clean, and the staff is incredibly professional. I never have to wait long for appointments, and the online booking system is very convenient.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior Patient',
      content: 'As someone who requires regular medical care, I appreciate the comprehensive approach at MediCare Clinic. They coordinate all my treatments seamlessly.',
      rating: 5,
      image: '👵'
    },
    {
      name: 'David Thompson',
      role: 'Young Professional',
      content: 'The preventive care program helped me identify health issues early. The doctors take time to explain everything and make me feel comfortable during visits.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Lisa Park',
      role: 'Healthcare Worker',
      content: 'Even as a healthcare professional myself, I trust MediCare with my family\'s health. Their attention to detail and patient care is outstanding.',
      rating: 5,
      image: '👩‍⚕️'
    },
    {
      name: 'Robert Wilson',
      role: 'Retired Teacher',
      content: 'The staff always remembers my preferences and medical history. It feels like being cared for by family members who happen to be medical experts.',
      rating: 5,
      image: '👨‍🏫'
    }
  ];

  // Duplicate testimonials for infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Group testimonials into rows of three
  const testimonialRows = [];
  for (let i = 0; i < infiniteTestimonials.length; i += 3) {
    testimonialRows.push(infiniteTestimonials.slice(i, i + 3));
  }

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--background))] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(var(--accent)/0.05)] rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[hsl(var(--accent)/0.05)] rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[hsl(var(--accent)/0.05)] rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 reveal-on-scroll ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient-primary">Patients Say</span>
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Real stories from real patients who have experienced our exceptional care
          </p>
        </div>

        {/* Vertical Infinite Scroll Testimonials (Three Columns) */}
        <div className="mb-12 overflow-hidden max-w-7xl mx-auto h-[800px]">
          <div 
            ref={scrollRef}
            className="flex flex-col gap-8 infinite-scroll"
            style={{ height: 'calc(200% + 32px)' }}
          >
            {testimonialRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-3 gap-6">
                {row.map((testimonial, index) => (
                  <div key={`${rowIndex}-${index}`} className="card-medical p-6 text-center relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent)/0.05)] via-transparent to-[hsl(var(--primary)/0.05)] opacity-50"></div>
                    
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-8 h-8 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center animate-bounce-gentle">
                        <Quote className="h-4 w-4 text-[hsl(var(--primary-foreground))]" />
                      </div>
                    </div>

                    {/* Stars with stagger animation */}
                    <div className="flex justify-center gap-1 mb-6 stagger-animation">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 fill-[hsl(var(--accent))] text-[hsl(var(--accent))] animate-zoom-in hover:scale-125 transition-transform" 
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-base text-[hsl(var(--muted-foreground))] mb-6 italic relative z-10 animate-fade-in">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4 relative z-10">
                      <div className="text-4xl animate-bounce-gentle">{testimonial.image}</div>
                      <div className="text-left">
                        <div className="font-semibold text-[hsl(var(--foreground))] animate-slide-in-left">{testimonial.name}</div>
                        <div className="text-sm text-[hsl(var(--muted-foreground))] animate-slide-in-left" style={{animationDelay: '0.2s'}}>{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Fill empty columns if row has fewer than 3 testimonials */}
                {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, index) => (
                  <div key={`empty-${rowIndex}-${index}`} className="card-medical p-6 opacity-0"></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Stats with counter animation */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-[hsl(var(--border))] transition-all duration-700 delay-500 reveal-on-scroll ${isVisible ? 'revealed' : ''}`}>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gradient-primary group-hover:scale-110 transition-transform">98%</div>
            <div className="text-[hsl(var(--muted-foreground))] text-sm">Patient Satisfaction</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gradient-primary group-hover:scale-110 transition-transform">5000+</div>
            <div className="text-[hsl(var(--muted-foreground))] text-sm">Happy Patients</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gradient-primary group-hover:scale-110 transition-transform">15+</div>
            <div className="text-[hsl(var(--muted-foreground))] text-sm">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gradient-primary group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-[hsl(var(--muted-foreground))] text-sm">Emergency Care</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;