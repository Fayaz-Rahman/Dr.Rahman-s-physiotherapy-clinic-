import { Award, Heart, Target, Users } from 'lucide-react';
import doctorImage from '@/assets/doctor-portrait.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Doctor Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src={doctorImage}
                alt="Dr. Sarah Johnson - Lead Physician"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-medical-blue to-medical-teal rounded-full flex items-center justify-center shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div> */}
            </div>
          </div>

          {/* Doctor Info */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm border border-accent/20">
                👨‍⚕️ Meet Our Lead Physician
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-primary">Dr. Rahman's Clinic</span>
              <br />
              <span className="text-foreground">MD, Board Certified</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              With over years of experience in family medicine, Dr. Johnson is dedicated 
              to providing comprehensive, compassionate care to patients of all ages. He 
              believes in building lasting relationships with her patients and their families.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Board Certified in Family Medicine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">MD from Harvard Medical School</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Residency at Johns Hopkins Hospital</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2500+</div>
                <div className="text-sm text-muted-foreground">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-primary">Core Values</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These fundamental principles guide everything we do at MediCare Clinic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="card-medical p-8 text-center animate-scale-in">
            <div className="w-16 h-16 bg-gradient-to-r from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-gradient-primary">Our Vision</h4>
            <p className="text-muted-foreground">
              To be the leading healthcare provider in our community, known for exceptional 
              patient care, innovative treatments, and compassionate service.
            </p>
          </div>

          {/* Mission */}
          <div className="card-medical p-8 text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-gradient-primary">Our Mission</h4>
            <p className="text-muted-foreground">
              We are committed to improving the health and well-being of our patients through 
              personalized care, preventive medicine, and state-of-the-art treatments.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="card-medical p-8 text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-gradient-primary">Why Choose Us</h4>
            <p className="text-muted-foreground">
              We combine modern medical technology with a patient-first approach, ensuring 
              you receive the highest quality care in a comfortable, welcoming environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;