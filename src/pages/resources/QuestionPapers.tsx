import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuestionPapers = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Question Papers</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Access previous years' question papers and sample papers to help with exam preparation 
          and practice.
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">School Section (Classes 1-10)</h2>
            
            <div className="space-y-4">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Class 10 - SSLC Board Exam Papers</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-between">
                    <span>Mathematics (2023)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Science (2023)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>English (2023)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Social Science (2023)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Classes 6-9 - Sample Papers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Practice papers for mid-term and final examinations
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-between">
                    <span>Class 9 - All Subjects</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Class 8 - All Subjects</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Class 7 - All Subjects</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Class 6 - All Subjects</span>
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">PU College (Classes 11-12)</h2>
            
            <div className="space-y-4">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Science Stream - Board Papers</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-between">
                    <span>Physics (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Chemistry (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Mathematics (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Biology (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Commerce Stream - Board Papers</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-between">
                    <span>Accountancy (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Business Studies (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Economics (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Statistics (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Arts Stream - Board Papers</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-between">
                    <span>History (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Political Science (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Economics (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="justify-between">
                    <span>Psychology (2023-24)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Important Notes</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• All papers are in PDF format and can be downloaded for offline use</li>
                  <li>• Previous years' papers help in understanding exam patterns</li>
                  <li>• Practice regularly with these papers for better preparation</li>
                  <li>• Model answers and marking schemes are included where available</li>
                  <li>• For any issues with downloads, contact the school office</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPapers;
