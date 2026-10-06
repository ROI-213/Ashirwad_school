import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudyMaterials = () => {
  const materials = [
    {
      class: "10th Standard",
      subjects: [
        { name: "Mathematics", files: ["Chapter-wise Notes", "Practice Problems", "Formula Sheet"] },
        { name: "Science", files: ["Physics Notes", "Chemistry Notes", "Biology Notes"] },
        { name: "Social Science", files: ["History Notes", "Geography Notes", "Civics Notes"] }
      ]
    },
    {
      class: "12th Standard (PUC)",
      subjects: [
        { name: "Physics", files: ["Theory Notes", "Numerical Problems", "Practical Guide"] },
        { name: "Chemistry", files: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"] },
        { name: "Mathematics", files: ["Calculus", "Algebra", "Coordinate Geometry"] }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Study Materials</h1>
          <p className="text-xl max-w-2xl">Access comprehensive study resources</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {materials.map((material, index) => (
                <Card key={index}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-heading font-bold text-primary">{material.class}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {material.subjects.map((subject, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-4">
                          <h3 className="font-heading font-semibold mb-3 text-primary">{subject.name}</h3>
                          <ul className="space-y-2">
                            {subject.files.map((file, fileIdx) => (
                              <li key={fileIdx} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-muted-foreground">{file}</span>
                                </div>
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">
                  More study materials will be added soon. Students can also request specific materials through their class teachers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyMaterials;
