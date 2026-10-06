import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, CheckCircle } from "lucide-react";

const Accreditation = () => {
  const affiliations = [
    {
      title: "Karnataka Secondary Education Examination Board (KSEEB)",
      description: "Official affiliation for classes 1st to 10th standard",
      year: "Since Establishment"
    },
    {
      title: "Department of Pre-University Education, Karnataka",
      description: "Affiliation for PU College (11th and 12th grades)",
      year: "Since Establishment"
    },
    {
      title: "Government of Karnataka",
      description: "Recognized educational institution",
      year: "Since Establishment"
    }
  ];

  const recognitions = [
    "Best Educational Institution in the Region",
    "Excellence in Academic Results",
    "Outstanding Infrastructure Development",
    "Best Sports & Cultural Activities Program",
    "Community Service & Social Responsibility Award",
    "Innovation in Teaching Methodology"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Accreditation & Affiliations</h1>
          <p className="text-xl max-w-2xl">Recognized excellence in education</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-20 h-20 mx-auto mb-4 text-primary" />
              <h2 className="text-4xl font-heading font-bold mb-4 text-primary">Official Affiliations</h2>
              <p className="text-lg text-muted-foreground">
                Ashirwad Group of Institutes is officially affiliated with leading educational boards
              </p>
            </div>

            <div className="space-y-6 mb-16">
              {affiliations.map((affiliation, index) => (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold mb-2 text-primary">{affiliation.title}</h3>
                        <p className="text-muted-foreground mb-1">{affiliation.description}</p>
                        <p className="text-sm text-accent font-semibold">{affiliation.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary text-center">Recognition & Awards</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {recognitions.map((recognition, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{recognition}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accreditation;
