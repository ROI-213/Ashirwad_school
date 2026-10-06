import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, FileText, CreditCard, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdmissionProcess = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Step 1: Enquiry",
      description: "Visit the school or contact us via phone/email to inquire about admissions and availability of seats"
    },
    {
      icon: FileText,
      title: "Step 2: Application",
      description: "Fill out the admission form with all required details and submit necessary documents"
    },
    {
      icon: CreditCard,
      title: "Step 3: Fee Payment",
      description: "Pay the admission fee and receive the fee receipt along with enrollment confirmation"
    },
    {
      icon: CheckCircle,
      title: "Step 4: Enrollment",
      description: "Complete the enrollment process and receive the student ID card and welcome kit"
    }
  ];

  const documents = [
    "Birth Certificate (original and photocopy)",
    "Transfer Certificate from previous school",
    "Previous year's mark sheets/report cards",
    "Aadhar Card (student and parents)",
    "Passport size photographs (4 copies)",
    "Caste Certificate (if applicable)",
    "Income Certificate (if applicable)",
    "Medical fitness certificate"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Admission Process</h1>
          <p className="text-xl max-w-2xl">Simple steps to join Ashirwad Group of Institutes</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 mb-16">
              {steps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold mb-2 text-primary">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Admissions Office
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcess;
