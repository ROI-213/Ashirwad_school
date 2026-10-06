import { Book, FileText, Calendar, Users } from "lucide-react";

const Curriculum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">School Curriculum</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Our curriculum is designed to provide comprehensive education that balances academic excellence 
              with holistic development. We follow the state board syllabus with enhanced teaching methodologies.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border border-border">
                <Book className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Academic Framework</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• State Board Affiliated</li>
                  <li>• CBSE Pattern Integration</li>
                  <li>• Continuous Evaluation</li>
                  <li>• Activity-Based Learning</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <FileText className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Teaching Methods</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Smart Classroom Technology</li>
                  <li>• Project-Based Learning</li>
                  <li>• Practical Demonstrations</li>
                  <li>• Regular Assessments</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Grade-wise Structure</h2>
            
            <div className="space-y-6">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Classes 1st to 5th (Primary)</h3>
                <p className="text-muted-foreground">
                  Foundation stage focusing on basic literacy, numeracy, and life skills through interactive learning.
                </p>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Classes 6th to 8th (Middle School)</h3>
                <p className="text-muted-foreground">
                  Comprehensive curriculum introducing sciences, mathematics, languages, and social studies with practical applications.
                </p>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Classes 9th to 10th (High School)</h3>
                <p className="text-muted-foreground">
                  Board exam preparation with in-depth subject knowledge, regular tests, and career guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
