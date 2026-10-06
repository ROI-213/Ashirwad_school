import { BookOpen, Download, FileText, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const PUSyllabus = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">PU Syllabus & Resources</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-12">
            Access comprehensive syllabus details, study materials, and helpful resources for PU College students.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Complete Syllabus</h3>
              <p className="text-sm text-muted-foreground">Detailed curriculum for all streams</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Study Materials</h3>
              <p className="text-sm text-muted-foreground">Notes, guides & reference books</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <Download className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Question Papers</h3>
              <p className="text-sm text-muted-foreground">Previous years & sample papers</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Stream-wise Syllabus</h2>

          <div className="space-y-6">
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Science Stream (PCMB/PCMC)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">First Year PUC</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Physics - 12 Chapters</li>
                    <li>• Chemistry - 14 Chapters</li>
                    <li>• Mathematics - 10 Chapters</li>
                    <li>• Biology/Computer Science</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Second Year PUC</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Physics - 13 Chapters</li>
                    <li>• Chemistry - 12 Chapters</li>
                    <li>• Mathematics - 11 Chapters</li>
                    <li>• Biology/Computer Science</li>
                  </ul>
                </div>
              </div>
              <Button className="mt-4 bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download Science Syllabus
              </Button>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Commerce Stream</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Core Subjects</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Accountancy</li>
                    <li>• Business Studies</li>
                    <li>• Economics</li>
                    <li>• Computer Science/Statistics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Optional Subjects</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Entrepreneurship</li>
                    <li>• Marketing</li>
                    <li>• Financial Management</li>
                  </ul>
                </div>
              </div>
              <Button className="mt-4 bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download Commerce Syllabus
              </Button>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Arts Stream</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Humanities</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• History</li>
                    <li>• Political Science</li>
                    <li>• Economics</li>
                    <li>• Psychology/Sociology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• English</li>
                    <li>• Kannada</li>
                    <li>• Hindi/Sanskrit</li>
                  </ul>
                </div>
              </div>
              <Button className="mt-4 bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download Arts Syllabus
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <LinkIcon className="w-6 h-6 text-primary" />
              Useful Links & Resources
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Karnataka PU Board Official Website</li>
              <li>• E-Learning Portal</li>
              <li>• Online Study Materials</li>
              <li>• Model Question Papers</li>
              <li>• Syllabus Updates & Notifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PUSyllabus;
