import { Trophy, TrendingUp, Award, Star } from "lucide-react";

const PUResults = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">PU Results & Achievements</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our students consistently excel in board examinations and competitive tests, making us proud 
          with their outstanding performance year after year.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-2xl border-2 border-dashed border-primary/30 text-center mb-12">
            <Trophy className="w-20 h-20 text-primary mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary">First Batch - 2024-25</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our inaugural PU batch is preparing for their board examinations. Results and achievements will be updated here after the first academic year.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Stay Tuned for Updates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted rounded-lg">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Exam Preparation</h3>
                <p className="text-sm text-muted-foreground">Our students are undergoing rigorous training</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Education</h3>
                <p className="text-sm text-muted-foreground">Focused on excellence and holistic development</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Future Ready</h3>
                <p className="text-sm text-muted-foreground">Preparing for successful academic careers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PUResults;
