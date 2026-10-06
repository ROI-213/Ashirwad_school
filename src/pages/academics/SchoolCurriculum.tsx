import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap } from "lucide-react";
import academicsImage from "@/assets/academics-lab.jpg";

const SchoolCurriculum = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">School Curriculum</h1>
          <p className="text-xl max-w-2xl">Classes 1st to 10th - KSEEB Affiliated</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6 text-primary">Our Approach</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We follow the Karnataka Secondary Education Examination Board (KSEEB) curriculum, ensuring comprehensive coverage of all subjects with emphasis on conceptual understanding.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our teaching methodology combines traditional values with modern pedagogical techniques, making learning engaging and effective.
                </p>
              </div>
              <div>
                <img src={academicsImage} alt="School Curriculum" className="rounded-2xl shadow-lg w-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Pre-Primary</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Nursery</li>
                    <li>• LKG (Lower Kindergarten)</li>
                    <li>• UKG (Upper Kindergarten)</li>
                    <li>• Play-based Learning</li>
                    <li>• Motor Skills Development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Primary (1st - 5th)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• English, Kannada, Hindi</li>
                    <li>• Mathematics</li>
                    <li>• Environmental Studies</li>
                    <li>• Art & Craft</li>
                    <li>• Physical Education</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Middle (6th - 8th)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Languages (3)</li>
                    <li>• Mathematics</li>
                    <li>• Science</li>
                    <li>• Social Studies</li>
                    <li>• Computer Science</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-primary">High (9th - 10th)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Languages (3)</li>
                    <li>• Mathematics</li>
                    <li>• Science</li>
                    <li>• Social Science</li>
                    <li>• Elective Subjects</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolCurriculum;
