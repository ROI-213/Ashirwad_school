import { Link } from "react-router-dom";
import { Download, Calendar, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Admissions = () => {
  const steps = [
    { step: 1, title: "Registration", description: "Fill out the online application form or download the PDF form" },
    { step: 2, title: "Submit Documents", description: "Submit required documents including birth certificate and previous academic records" },
    { step: 3, title: "Entrance Assessment", description: "Students will take an age-appropriate entrance assessment" },
    { step: 4, title: "Interview", description: "Parent-student interview with the admissions committee" },
    { step: 5, title: "Admission Confirmation", description: "Receive admission decision and complete fee payment" },
  ];

  const requirements = [
    "Birth Certificate",
    "Previous School Transfer Certificate",
    "Academic Records (Previous 2 years)",
    "Recent Passport Size Photographs (4 copies)",
    "Address Proof",
    "Parent ID Proof (Aadhaar Card / Passport)",
  ];


  const faqs = [
    {
      question: "What is the minimum age for admission to Nursery?",
      answer: "The child should be 3 years old as on 31st March of the academic year.",
    },
    {
      question: "Is there a sibling quota?",
      answer: "Yes, siblings of current students receive priority in admissions, subject to meeting eligibility criteria.",
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, we offer merit-based and need-based scholarships. Financial aid applications are reviewed on a case-by-case basis.",
    },
    {
      question: "When does the admission process start?",
      answer: "Admissions typically open in November for the following academic year starting in April.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Admission fees are non-refundable. Annual fees are refundable as per school policy if withdrawal happens before the session starts.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in">Admissions</h1>
          <p className="text-xl max-w-2xl animate-fade-in">Join our vibrant learning community and embark on a journey of excellence</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-6 text-primary">Admission Overview</h2>
            <p className="text-lg text-muted-foreground">
              We welcome students from diverse backgrounds who are eager to learn and grow. Our admission process is designed to identify students who will thrive in our academic environment and contribute to our school community.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">How to Apply</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {steps.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-smooth">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                        {item.step}
                      </div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Entry Requirements</h2>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-semibold mb-4">Required Documents</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Forms */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary">Application Forms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <Download className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-heading font-semibold mb-2">Download PDF Form</h3>
                  <p className="text-muted-foreground mb-4">Download the admission form and submit at the school office</p>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" /> Download Form
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-heading font-semibold mb-2">Apply Online</h3>
                  <p className="text-muted-foreground mb-4">Fill out our convenient online application form</p>
                  <Link to="/apply-online">
                    <Button className="bg-accent hover:bg-accent/90">
                      Apply Online
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Important Dates</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-medium">Admission Registration Opens</span>
                    </div>
                    <span className="text-muted-foreground">November 1, 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-medium">Last Date for Submission</span>
                    </div>
                    <span className="text-muted-foreground">January 31, 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-medium">Entrance Assessments</span>
                    </div>
                    <span className="text-muted-foreground">February 15-28, 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-medium">Admission Results</span>
                    </div>
                    <span className="text-muted-foreground">March 15, 2026</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-7">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Admissions Office */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Need Help with Admissions?</h2>
          <p className="mb-8 text-lg">Our admissions team is here to assist you</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Contact Admissions Office
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
