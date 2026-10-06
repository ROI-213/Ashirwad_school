import { FileText, Download, BookOpen, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const notices = [
    { date: "2025-03-15", title: "Summer Vacation Notice", category: "Important" },
    { date: "2025-03-10", title: "Parent-Teacher Meeting Schedule", category: "Event" },
    { date: "2025-03-05", title: "Annual Examination Timetable", category: "Academic" },
    { date: "2025-03-01", title: "Fee Payment Reminder", category: "Administrative" },
  ];

  const studyMaterials = [
    { subject: "English", class: "10th Standard", description: "Grammar notes and sample papers" },
    { subject: "Mathematics", class: "10th Standard", description: "Important formulas and practice questions" },
    { subject: "Science", class: "10th Standard", description: "Chapter-wise notes and diagrams" },
    { subject: "Social Science", class: "10th Standard", description: "Important dates and concepts" },
  ];

  const questionPapers = [
    { title: "SSLC Mathematics 2024", description: "Previous year question paper with solutions" },
    { title: "SSLC Science 2024", description: "Previous year question paper with solutions" },
    { title: "2nd PUC Physics 2024", description: "Previous year question paper with solutions" },
    { title: "2nd PUC Chemistry 2024", description: "Previous year question paper with solutions" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in">Resources</h1>
          <p className="text-xl max-w-2xl animate-fade-in">Access study materials, circulars, and library resources</p>
        </div>
      </section>

      {/* Notices & Circulars */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Bell className="w-8 h-8 text-accent" />
              <h2 className="text-4xl font-heading font-bold text-primary">Notices & Circulars</h2>
            </div>
            <div className="space-y-4">
              {notices.map((notice, index) => (
                <Card key={index} className="hover:shadow-md transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4 flex-1">
                        <div className="text-center flex-shrink-0">
                          <div className="text-2xl font-bold text-primary">{new Date(notice.date).getDate()}</div>
                          <div className="text-xs text-muted-foreground uppercase">{new Date(notice.date).toLocaleString('default', { month: 'short' })}</div>
                        </div>
                        <div className="flex-1">
                          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{notice.category}</span>
                          <h3 className="font-semibold mt-2">{notice.title}</h3>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Study Materials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-accent" />
              <h2 className="text-4xl font-heading font-bold text-primary">Study Materials</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {studyMaterials.map((material, index) => (
                <Card key={index} className="hover:shadow-md transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-1">{material.subject}</h3>
                    <p className="text-sm text-accent mb-2">{material.class}</p>
                    <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                    <Button size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Material
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Question Papers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-accent" />
              <h2 className="text-4xl font-heading font-bold text-primary">Previous Question Papers</h2>
            </div>
            <div className="space-y-4">
              {questionPapers.map((paper, index) => (
                <Card key={index} className="hover:shadow-md transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-heading font-semibold mb-1">{paper.title}</h3>
                        <p className="text-sm text-muted-foreground">{paper.description}</p>
                      </div>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Library</h2>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">School Library</h3>
                <p className="text-muted-foreground mb-6">
                  Our well-stocked library provides a wide range of books, reference materials, magazines, and digital resources to support student learning and research.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Collection</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 5,000+ Books</li>
                      <li>• Reference Materials</li>
                      <li>• Magazines & Journals</li>
                      <li>• Digital Resources</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Timings</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Monday - Friday: 8:00 AM - 4:00 PM</li>
                      <li>• Saturday: 8:00 AM - 12:00 PM</li>
                      <li>• Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
                <Button>Access Online Catalog</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;