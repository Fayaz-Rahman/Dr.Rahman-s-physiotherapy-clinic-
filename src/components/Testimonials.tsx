import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const colRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  const testimonials = [
    { name: "Sarah Johnson", role: "Mother of Two", content: "Dr. Johnson and her team have been taking care of our family for over 5 years. The level of care and attention we receive is exceptional.", rating: 5, image: "👩‍💼" },
    { name: "Michael Chen", role: "Business Professional", content: "The clinic is modern, clean, and the staff is incredibly professional. I never have to wait long for appointments.", rating: 5, image: "👨‍💼" },
    { name: "Emily Rodriguez", role: "Senior Patient", content: "As someone who requires regular medical care, I appreciate the comprehensive approach at MediCare Clinic.", rating: 5, image: "👵" },
    { name: "David Thompson", role: "Young Professional", content: "The preventive care program helped me identify health issues early. Doctors take time to explain everything.", rating: 5, image: "👨‍💻" },
    { name: "Lisa Park", role: "Healthcare Worker", content: "Even as a healthcare professional myself, I trust MediCare with my family's health. Their attention to detail is outstanding.", rating: 5, image: "👩‍⚕️" },
    { name: "Robert Wilson", role: "Retired Teacher", content: "The staff always remembers my preferences and medical history. It feels like being cared for by family members.", rating: 5, image: "👨‍🏫" },
    { name: "Sarah Johnson", role: "Mother of Two", content: "Dr. Johnson and her team have been taking care of our family for over 5 years. The level of care and attention we receive is exceptional.", rating: 5, image: "👩‍💼" },
    { name: "Michael Chen", role: "Business Professional", content: "The clinic is modern, clean, and the staff is incredibly professional. I never have to wait long for appointments.", rating: 5, image: "👨‍💼" },
    { name: "Emily Rodriguez", role: "Senior Patient", content: "As someone who requires regular medical care, I appreciate the comprehensive approach at MediCare Clinic.", rating: 5, image: "👵" },
    { name: "David Thompson", role: "Young Professional", content: "The preventive care program helped me identify health issues early. Doctors take time to explain everything.", rating: 5, image: "👨‍💻" },
    { name: "Lisa Park", role: "Healthcare Worker", content: "Even as a healthcare professional myself, I trust MediCare with my family's health. Their attention to detail is outstanding.", rating: 5, image: "👩‍⚕️" },
    { name: "Robert Wilson", role: "Retired Teacher", content: "The staff always remembers my preferences and medical history. It feels like being cared for by family members.", rating: 5, image: "👨‍🏫" },
    { name: "Sarah Johnson", role: "Mother of Two", content: "Dr. Johnson and her team have been taking care of our family for over 5 years. The level of care and attention we receive is exceptional.", rating: 5, image: "👩‍💼" },
    { name: "Michael Chen", role: "Business Professional", content: "The clinic is modern, clean, and the staff is incredibly professional. I never have to wait long for appointments.", rating: 5, image: "👨‍💼" },
    { name: "Emily Rodriguez", role: "Senior Patient", content: "As someone who requires regular medical care, I appreciate the comprehensive approach at MediCare Clinic.", rating: 5, image: "👵" },
    { name: "David Thompson", role: "Young Professional", content: "The preventive care program helped me identify health issues early. Doctors take time to explain everything.", rating: 5, image: "👨‍💻" },
    { name: "Lisa Park", role: "Healthcare Worker", content: "Even as a healthcare professional myself, I trust MediCare with my family's health. Their attention to detail is outstanding.", rating: 5, image: "👩‍⚕️" },
    { name: "Robert Wilson", role: "Retired Teacher", content: "The staff always remembers my preferences and medical history. It feels like being cared for by family members.", rating: 5, image: "👨‍🏫" },
    { name: "Sarah Johnson", role: "Mother of Two", content: "Dr. Johnson and her team have been taking care of our family for over 5 years. The level of care and attention we receive is exceptional.", rating: 5, image: "👩‍💼" },
    { name: "Michael Chen", role: "Business Professional", content: "The clinic is modern, clean, and the staff is incredibly professional. I never have to wait long for appointments.", rating: 5, image: "👨‍💼" },
    { name: "Emily Rodriguez", role: "Senior Patient", content: "As someone who requires regular medical care, I appreciate the comprehensive approach at MediCare Clinic.", rating: 5, image: "👵" },
    { name: "David Thompson", role: "Young Professional", content: "The preventive care program helped me identify health issues early. Doctors take time to explain everything.", rating: 5, image: "👨‍💻" },
    { name: "Lisa Park", role: "Healthcare Worker", content: "Even as a healthcare professional myself, I trust MediCare with my family's health. Their attention to detail is outstanding.", rating: 5, image: "👩‍⚕️" },
    { name: "Robert Wilson", role: "Retired Teacher", content: "The staff always remembers my preferences and medical history. It feels like being cared for by family members.", rating: 5, image: "👨‍🏫" },
  ];

  // Split into 3 columns evenly
  const columns = [
    testimonials.filter((_, i) => i % 3 === 0),
    testimonials.filter((_, i) => i % 3 === 1),
    testimonials.filter((_, i) => i % 3 === 2),
  ];

  // Duplicate for seamless loop
  const doubledColumns = columns.map((col) => [...col, ...col]);

  useEffect(() => {
    const animations: number[] = [];

    colRefs.forEach((ref, idx) => {
      const container = ref.current;
      if (!container) return;

      let y = 0;
      const speed = 0.2 + idx * 0.08; // different speeds per column

      const animate = () => {
        y -= speed;
        const height = container.scrollHeight / 2;
        if (Math.abs(y) >= height) {
          y = 0; // reset to top
        }
        container.style.transform = `translateY(${y}px)`;
        animations[idx] = requestAnimationFrame(animate);
      };

      animations[idx] = requestAnimationFrame(animate);
    });

    return () => {
      animations.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="text-gradient-primary">Patients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real patients who have experienced our exceptional care
          </p>
        </div>

        {/* 3 Scrolling Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[500px]">
          {doubledColumns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="overflow-hidden relative"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div
                ref={colRefs[colIndex]}
                className="flex flex-col gap-6 will-change-transform"
              >
                {col.map((t, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-card p-6 rounded-2xl shadow-md relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 text-accent opacity-20">
                      <Quote className="w-6 h-6" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground mb-4 italic">"{t.content}"</p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{t.image}</div>
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
