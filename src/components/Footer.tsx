import { Stethoscope, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <button 
              onClick={() => {
                const element = document.querySelector('#home');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 mb-4 group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-r from-medical-blue to-medical-teal text-white">
                <Stethoscope className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-background">
                MediCare Clinic
              </span>
            </button>
            <p className="text-background/70 mb-6">
              Providing exceptional healthcare services with compassion, 
              professionalism, and cutting-edge medical technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-medical-blue/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-medical-blue/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-medical-blue/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-medical-blue/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-background/70 hover:text-background transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-background/70 hover:text-background transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-background/70 hover:text-background transition-colors duration-200"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#testimonials');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-background/70 hover:text-background transition-colors duration-200"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-background/70 hover:text-background transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors duration-200">
                  General Medicine
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors duration-200">
                  Dental Care
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors duration-200">
                  Pediatric Care
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors duration-200">
                  Cardiology
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors duration-200">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-background/70">123 Health Street</p>
                  <p className="text-background/70">Medical District, MD 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <a 
                    href="tel:+15551234567" 
                    className="text-background/70 hover:text-background transition-colors duration-200"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <a 
                    href="mailto:info@mediclinic.com" 
                    className="text-background/70 hover:text-background transition-colors duration-200"
                  >
                    info@mediclinic.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <div className="text-background/70 text-sm space-y-1">
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat: 9:00 AM - 2:00 PM</p>
                <p>Sun: Closed</p>
                <p className="text-accent font-medium mt-2">24/7 Emergency Care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © {currentYear} MediCare Clinic. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-200">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;