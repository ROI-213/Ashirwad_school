import { CheckCircle2, AlertCircle } from "lucide-react";

const EligibilityCriteria = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Eligibility Criteria</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Please review the eligibility requirements for admission to different classes at 
          Ashirwad Global School & PU College.
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              School Admissions (Classes 1-10)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Class 1 (Primary)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Minimum age: 6 years as on June 1st of the academic year</li>
                  <li>• No entrance test required</li>
                  <li>• Birth certificate mandatory</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Classes 2-5 (Primary)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Age appropriate as per class requirement</li>
                  <li>• Transfer certificate from previous school</li>
                  <li>• Progress report/Mark sheets of previous class</li>
                  <li>• Simple assessment test may be conducted</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Classes 6-8 (Middle School)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Passed previous class from recognized school</li>
                  <li>• Transfer certificate and mark sheets required</li>
                  <li>• Written assessment test in core subjects</li>
                  <li>• Interview with parents</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Classes 9-10 (High School)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Minimum 60% marks in previous class</li>
                  <li>• Transfer certificate mandatory</li>
                  <li>• Entrance test in Mathematics, Science, and English</li>
                  <li>• Good conduct certificate from previous school</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              PU College Admissions (Classes 11-12)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Science Stream (PCMB/PCMC)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Minimum 70% in 10th standard/SSLC examination</li>
                  <li>• At least 60% marks in Mathematics and Science</li>
                  <li>• SSLC mark sheet and passing certificate</li>
                  <li>• Entrance test and personal interview</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Commerce Stream</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Minimum 60% in 10th standard/SSLC examination</li>
                  <li>• Good knowledge of Mathematics recommended</li>
                  <li>• SSLC mark sheet and transfer certificate</li>
                  <li>• Aptitude test may be conducted</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Arts Stream</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Passed 10th standard/SSLC from recognized board</li>
                  <li>• No minimum percentage requirement</li>
                  <li>• Basic documentation required</li>
                  <li>• Counseling session with faculty</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Important Notes</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• All certificates must be original and attested</li>
                  <li>• Age proof is mandatory for all admissions</li>
                  <li>• Seats are limited and filled on first-come, first-served basis</li>
                  <li>• Management reserves the right to accept or reject any application</li>
                  <li>• Medical fitness certificate may be required</li>
                  <li>• Migration certificate required for out-of-state students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
