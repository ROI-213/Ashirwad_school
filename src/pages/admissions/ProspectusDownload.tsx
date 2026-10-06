import { Download, FileText, BookOpen, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProspectusDownload = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Download Prospectus</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Access our detailed prospectus to learn more about our institution, facilities, 
          curriculum, and admission procedures.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">School Prospectus</h3>
              <p className="text-muted-foreground mb-6">
                Complete information about Classes 1-10, curriculum, facilities, fee structure, 
                and admission process for school section.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download School Prospectus (PDF)
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">File size: 2.5 MB</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">PU College Prospectus</h3>
              <p className="text-muted-foreground mb-6">
                Detailed guide for Classes 11-12, stream options, subject combinations, 
                fee structure, and competitive exam preparation.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download PU Prospectus (PDF)
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">File size: 1.8 MB</p>
            </div>
          </div>

          <div className="bg-accent/10 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">What's Inside the Prospectus?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">School Prospectus Includes:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• About our institution and vision</li>
                  <li>• Academic curriculum details</li>
                  <li>• Infrastructure and facilities</li>
                  <li>• Co-curricular activities</li>
                  <li>• Fee structure and payment schedule</li>
                  <li>• Admission procedure and forms</li>
                  <li>• Rules and regulations</li>
                  <li>• Contact information</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">PU Prospectus Includes:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Stream-wise course details</li>
                  <li>• Subject combinations available</li>
                  <li>• Faculty profiles</li>
                  <li>• Lab and library facilities</li>
                  <li>• Previous year results</li>
                  <li>• Competitive exam coaching</li>
                  <li>• Fee structure breakdown</li>
                  <li>• Eligibility criteria</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Need More Information?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions or need clarification about our admission process, 
                  please feel free to contact our admission office or visit us in person.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline">Contact Admission Office</Button>
                  <Button variant="outline">Schedule a Visit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectusDownload;
