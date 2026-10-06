import { Trophy, Award, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Achievements = () => {
  const academicAchievements = [
    { year: "2024", title: "100% Pass Rate in SSLC", description: "All students successfully passed board examinations" },
    { year: "2024", title: "State Rank Holders", description: "3 students secured ranks in top 100 in PU examinations" },
    { year: "2023", title: "Science Olympiad Winners", description: "Gold medals in National Science Olympiad" },
    { year: "2023", title: "Mathematics Excellence", description: "District level mathematics competition winners" },
  ];

  const coCurricularAchievements = [
    { category: "Sports", title: "State Level Basketball Champions", description: "Won Karnataka State Basketball Tournament 2024" },
    { category: "Sports", title: "District Athletics Meet", description: "Multiple gold medals in athletics events" },
    { category: "Cultural", title: "Inter-School Drama Competition", description: "First prize in district level drama competition" },
    { category: "Cultural", title: "Classical Dance Performance", description: "Outstanding performance award at state level cultural fest" },
  ];

  const alumniStories = [
    {
      name: "Dr. Priya Sharma",
      batch: "Batch of 2015",
      achievement: "Currently working as Medical Officer at District Hospital",
      description: "Completed MBBS from prestigious medical college and serving the community"
    },
    {
      name: "Rajesh Kumar",
      batch: "Batch of 2016",
      achievement: "Software Engineer at leading IT company",
      description: "Working with multinational company in Bangalore after completing B.Tech"
    },
    {
      name: "Anjali Desai",
      batch: "Batch of 2017",
      achievement: "Civil Services Officer",
      description: "Cleared UPSC examination and currently serving as Assistant Commissioner"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in">Achievements</h1>
          <p className="text-xl max-w-2xl animate-fade-in">Celebrating excellence in academics, sports, and cultural activities</p>
        </div>
      </section>

      {/* Achievement Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="academic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="cocurricular">Co-Curricular</TabsTrigger>
                <TabsTrigger value="alumni">Alumni Success</TabsTrigger>
              </TabsList>
              
              {/* Academic Achievements */}
              <TabsContent value="academic">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Trophy className="w-16 h-16 mx-auto mb-4 text-accent" />
                    <h2 className="text-3xl font-heading font-bold text-primary">Academic Achievements</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {academicAchievements.map((achievement, index) => (
                      <Card key={index} className="hover:shadow-lg transition-smooth">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                              <Award className="w-8 h-8" />
                            </div>
                            <div>
                              <p className="text-xs text-accent mb-1">{achievement.year}</p>
                              <h3 className="font-heading font-semibold mb-1">{achievement.title}</h3>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Co-Curricular Achievements */}
              <TabsContent value="cocurricular">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Star className="w-16 h-16 mx-auto mb-4 text-accent" />
                    <h2 className="text-3xl font-heading font-bold text-primary">Co-Curricular Achievements</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {coCurricularAchievements.map((achievement, index) => (
                      <Card key={index} className="hover:shadow-lg transition-smooth">
                        <CardContent className="p-6">
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs mb-3">
                            {achievement.category}
                          </span>
                          <h3 className="font-heading font-semibold mb-2">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Alumni Success Stories */}
              <TabsContent value="alumni">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Users className="w-16 h-16 mx-auto mb-4 text-accent" />
                    <h2 className="text-3xl font-heading font-bold text-primary">Alumni Success Stories</h2>
                  </div>
                  <div className="space-y-6">
                    {alumniStories.map((alumni, index) => (
                      <Card key={index} className="hover:shadow-lg transition-smooth">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-6">
                            <div className="w-20 h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                              {alumni.name.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-heading font-semibold mb-1">{alumni.name}</h3>
                              <p className="text-sm text-accent mb-2">{alumni.batch}</p>
                              <h4 className="font-semibold text-lg mb-2">{alumni.achievement}</h4>
                              <p className="text-muted-foreground">{alumni.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Pass Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-accent mb-2">25+</div>
              <p className="text-muted-foreground">State Ranks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">Sports Awards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-accent mb-2">100+</div>
              <p className="text-muted-foreground">Cultural Prizes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;