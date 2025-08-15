import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-clinic-bg.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={heroImage}
          alt="Modern medical clinic interior"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/90 via-medical-blue/70 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-white/10 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-medical-teal/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-accent/5 rounded-full animate-bounce-gentle" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm border border-accent/20 animate-zoom-in">
                ✨ Your Health, Our Priority
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white animate-fade-in">Comprehensive</span>
              <br />
              <span className="text-gradient-accent animate-fade-in" style={{animationDelay: '0.2s'}}>Healthcare</span>
              <br />
              <span className="text-white animate-fade-in" style={{animationDelay: '0.4s'}}>Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-in-up" style={{animationDelay: '0.6s'}}>
              Experience exceptional medical care with our team of dedicated professionals. 
              We provide personalized treatment plans tailored to your unique health needs.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up" style={{animationDelay: '0.8s'}}>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-hero inline-flex items-center justify-center gap-2 group"
              >
                <Calendar className="h-5 w-5 group-hover:animate-bounce-gentle" />
                Book Appointment
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="tel:+1234567890"
                className="btn-accent inline-flex items-center justify-center gap-2 group"
              >
                <Phone className="h-5 w-5 group-hover:animate-bounce-gentle" />
                Call Now
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 stagger-animation">
              <div className="text-center animate-zoom-in">
                <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center animate-zoom-in">
                <div className="text-2xl md:text-3xl font-bold text-accent">5000+</div>
                <div className="text-white/70 text-sm">Happy Patients</div>
              </div>
              <div className="text-center animate-zoom-in">
                <div className="text-2xl md:text-3xl font-bold text-accent">24/7</div>
                <div className="text-white/70 text-sm">Emergency Care</div>
              </div>
            </div>
          </div>
          
          {/* Right space for floating elements */}
          <div className="hidden lg:block relative">
            <div className="absolute top-20 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float"></div>
            <div className="absolute bottom-40 right-40 w-8 h-8 bg-white/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-40 right-10 w-12 h-12 bg-medical-teal/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;