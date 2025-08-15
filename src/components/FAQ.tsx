import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by calling our office at (555) 123-4567, using our online booking system on this website, or visiting us in person. We offer same-day appointments for urgent care needs.'
    },
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealth, and Medicare. Please call our office to verify your specific plan coverage before your visit.'
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records, and a form of payment for your copay. Arrive 15 minutes early to complete paperwork.'
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Yes, we provide 24/7 emergency care for our patients. For life-threatening emergencies, please call 911. For urgent but non-life-threatening issues, call our emergency line at (555) 123-4567.'
    },
    {
      question: 'How often should I schedule check-ups?',
      answer: 'We recommend annual check-ups for healthy adults. However, if you have chronic conditions or risk factors, more frequent visits may be necessary. Your doctor will create a personalized schedule based on your health needs.'
    },
    {
      question: 'Do you provide telehealth services?',
      answer: 'Yes, we offer telehealth consultations for many routine appointments, follow-ups, and minor health concerns. This convenient option allows you to consult with our doctors from the comfort of your home.'
    },
    {
      question: 'What are your office hours?',
      answer: 'Our regular hours are Monday-Friday 8:00 AM to 6:00 PM, and Saturday 9:00 AM to 2:00 PM. We are closed on Sundays and major holidays, but emergency care is available 24/7.'
    },
    {
      question: 'Do you treat children?',
      answer: 'Yes, our pediatric care services cater to children from newborns to 18 years old. We provide comprehensive care including well-child visits, immunizations, and treatment for common childhood illnesses.'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, appointments, and policies
          </p>
        </div>

        {/* FAQ Accordion in 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-scale-in">
          {faqs.map((faq, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value={`item-${index}`} className="card-medical border-none">
                <AccordionTrigger className="text-left hover:no-underline px-6 py-4 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card-medical p-8">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our friendly staff is here to help answer any additional questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="btn-hero inline-flex items-center justify-center gap-2"
              >
                Call Us: (555) 123-4567
              </a>
              <a
                href="mailto:info@mediclinic.com"
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
