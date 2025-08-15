import { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import logo from "../assets/logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[hsl(var(--background)/0.95)] backdrop-blur-md border-b border-[hsl(var(--border)/0.5)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-2 group"
          >
            <div 
              className="p-2 rounded-lg bg-gradient-primary text-[hsl(var(--primary-foreground))] group-hover:shadow-[var(--shadow-hero)] transition-all duration-300"
            >
              <img 
                src={logo} 
                style={{ height: '40px', width: '40px', borderRadius:'50px' }} 
                alt="Dr. Rahman's Clinic Logo" 
              />
            </div>
            <span className="text-xl font-bold text-gradient-primary">
              Dr. Rahman's Clinic
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-3 py-2 text-sm font-medium transition-all duration-300 text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--primary))]"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-hero text-sm"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary)/0.5)] transition-all duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[hsl(var(--background))] border-t border-[hsl(var(--border)/0.5)]">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary)/0.3)]"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="block mx-3 mt-4 btn-hero text-center text-sm w-[calc(100%-24px)]"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;