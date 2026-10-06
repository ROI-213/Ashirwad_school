import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Compass } from "lucide-react";

const VisionMission = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Vision & Mission</h1>
          <p className="text-xl max-w-2xl">Guiding principles that shape our educational excellence</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary to-accent p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold">Our Vision</h2>
                  </div>
                  <blockquote className="text-xl leading-relaxed italic">
                    "To bring unlimited educational opportunities to the local community and make the future generations capable of original thought, creation, leadership and accomplishment even in face of adversity"
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-primary">Our Mission</h2>
                </div>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Compass className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span>To provide quality education that enables students to realize their full potential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Compass className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span>To bring best practices in education including advanced curriculum and state-of-the-art infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Compass className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span>To create an environment for constant personal growth and intellectual development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Compass className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span>To ensure continuous involvement with students for their intellectual, personal and emotional development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Compass className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span>To prepare students for the rigors of higher education and 21st-century industry</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
