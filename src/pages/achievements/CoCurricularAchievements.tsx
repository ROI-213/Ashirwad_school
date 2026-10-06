import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award, Star } from "lucide-react";

const CoCurricularAchievements = () => {
  const achievements = [
    {
      icon: Trophy,
      category: "Sports",
      items: [
        "State Level Cricket Championship - Winners (2024)",
        "District Football Tournament - Runners Up (2024)",
        "Inter-School Athletics Meet - Multiple Medals (2023-24)",
        "Regional Kabaddi Competition - Third Place (2024)"
      ]
    },
    {
      icon: Medal,
      category: "Cultural",
      items: [
        "State Level Dance Competition - First Prize (2024)",
        "Inter-School Drama Festival - Best Performance (2024)",
        "Classical Music Competition - Multiple Winners (2023)",
        "Regional Art Exhibition - Best School Award (2024)"
      ]
    },
    {
      icon: Award,
      category: "Quiz & Debate",
      items: [
        "State Level Science Quiz - First Position (2024)",
        "Inter-School Debate Championship - Winners (2024)",
        "General Knowledge Olympiad - National Level Qualifier (2024)",
        "Model United Nations - Best Delegate Awards (2023)"
      ]
    },
    {
      icon: Star,
      category: "Innovation",
      items: [
        "State Science Exhibition - Best Project Award (2024)",
        "Regional Innovation Challenge - Top 3 Finishers (2024)",
        "Environmental Awareness Campaign - Recognition Award (2023)",
        "Community Service Initiative - District Level Appreciation (2024)"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Co-Curricular Achievements</h1>
          <p className="text-xl max-w-2xl">Excellence beyond the classroom</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-primary">{achievement.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {achievement.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoCurricularAchievements;
