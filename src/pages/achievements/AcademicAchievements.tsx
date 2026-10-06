import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Trophy } from "lucide-react";

const AcademicAchievements = () => {
  // Template: Add results after board exams are completed
  const results = [
    // { year: "2025", class: "10th Standard (SSLC)", appeared: "100", passed: "95", passPercentage: "95%", distinction: "45%" },
    // { year: "2025", class: "12th Standard (2nd PUC)", appeared: "80", passed: "76", passPercentage: "95%", distinction: "40%" },
  ];

  // Template: Add toppers after board exams results
  const toppers = [
    // { name: "Student Name", class: "10th Standard", marks: "590/600", percentage: "98.3%", year: "2025" },
    // { name: "Student Name", class: "12th Science", marks: "595/600", percentage: "99.2%", year: "2025" },
    // { name: "Student Name", class: "12th Commerce", marks: "580/600", percentage: "96.7%", year: "2025" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Academic Achievements</h1>
          <p className="text-xl max-w-2xl">Excellence in board examinations and competitive exams</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-10 h-10 text-primary" />
                  <h2 className="text-3xl font-heading font-bold text-primary">Board Exam Results</h2>
                </div>
                
                {results.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-primary/20">
                          <th className="text-left py-3 px-4 font-semibold text-primary">Year</th>
                          <th className="text-left py-3 px-4 font-semibold text-primary">Class</th>
                          <th className="text-left py-3 px-4 font-semibold text-primary">Appeared</th>
                          <th className="text-left py-3 px-4 font-semibold text-primary">Passed</th>
                          <th className="text-left py-3 px-4 font-semibold text-primary">Pass %</th>
                          <th className="text-left py-3 px-4 font-semibold text-primary">Distinction %</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.map((result, index) => (
                          <tr key={index} className="border-b border-border">
                            <td className="py-3 px-4 text-muted-foreground">{result.year}</td>
                            <td className="py-3 px-4 text-muted-foreground">{result.class}</td>
                            <td className="py-3 px-4 text-muted-foreground">{result.appeared}</td>
                            <td className="py-3 px-4 text-muted-foreground">{result.passed}</td>
                            <td className="py-3 px-4 text-accent font-semibold">{result.passPercentage}</td>
                            <td className="py-3 px-4 text-primary font-semibold">{result.distinction}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-muted rounded-lg">
                    <Trophy className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-muted-foreground">First Batch Preparing</h3>
                    <p className="text-muted-foreground">
                      Our first batch is currently preparing for board examinations.<br />
                      Results will be updated here after the exams are completed.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {toppers.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-6">
                {toppers.map((topper, index) => (
                  <Card key={index} className="hover:shadow-lg transition-smooth">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-2 text-primary">{topper.name}</h3>
                      <p className="text-muted-foreground mb-1">{topper.class}</p>
                      <p className="text-sm text-muted-foreground mb-2">Marks: {topper.marks}</p>
                      <p className="text-2xl font-bold text-accent">{topper.percentage}</p>
                      <p className="text-sm text-muted-foreground mt-2">Year: {topper.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Award className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-muted-foreground">Toppers List</h3>
                  <p className="text-muted-foreground">
                    Our star performers will be showcased here after the board exam results are announced.
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="mt-12">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-10 h-10 text-accent" />
                  <h2 className="text-2xl font-heading font-bold text-primary">Competitive Exam Success</h2>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Multiple students selected for JEE Advanced and NEET</li>
                  <li>• Strong performance in CET (Common Entrance Test)</li>
                  <li>• Students admitted to premier engineering and medical colleges</li>
                  <li>• Excellent results in scholarship examinations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicAchievements;
