import { Card, CardContent } from "@/components/ui/card";
import { Beaker, Calculator, BookOpen, Award } from "lucide-react";

const PUStreams = () => {
  const streams = [
    {
      icon: Beaker,
      title: "Science Stream",
      description: "Physics, Chemistry, Mathematics/Biology",
      subjects: ["Physics", "Chemistry", "Mathematics/Biology", "English", "Kannada/Hindi"],
      careers: ["Engineering", "Medicine", "Research", "Technology", "Pharmacy"]
    },
    {
      icon: Calculator,
      title: "Commerce Stream",
      description: "Business, Accounts, Economics",
      subjects: ["Accountancy", "Business Studies", "Economics", "English", "Optional: Computer Science"],
      careers: ["CA", "MBA", "Banking", "Finance", "Business"]
    },
    {
      icon: BookOpen,
      title: "Arts/Humanities Stream",
      description: "History, Political Science, Psychology",
      subjects: ["History", "Political Science", "Economics/Psychology", "English", "Kannada/Hindi"],
      careers: ["Civil Services", "Law", "Journalism", "Social Work", "Teaching"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">PU College Streams</h1>
          <p className="text-xl max-w-2xl">Choose your path to success - 11th & 12th Grade</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4 text-primary">Available Streams</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Select from our diverse range of academic streams, each designed to prepare you for your chosen career path
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {streams.map((stream, index) => (
                <Card key={index} className="hover:shadow-xl transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <stream.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2 text-center text-primary">{stream.title}</h3>
                    <p className="text-center text-muted-foreground mb-6">{stream.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-primary">Subjects:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {stream.subjects.map((subject, idx) => (
                          <li key={idx}>• {subject}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Career Options:</h4>
                      <div className="flex flex-wrap gap-2">
                        {stream.careers.map((career, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Award className="w-12 h-12 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-3 text-primary">Why Choose Our PU College?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Experienced and qualified faculty</li>
                      <li>• Regular tests and assessments</li>
                      <li>• Competitive exam preparation (CET, JEE, NEET)</li>
                      <li>• Career counseling and guidance</li>
                      <li>• Modern infrastructure and facilities</li>
                      <li>• Strong track record of board exam results</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PUStreams;
