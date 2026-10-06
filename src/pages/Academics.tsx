import { BookOpen, Beaker, Calculator, Globe, Music, Palette, Users as UsersIcon, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import academicsImage from "@/assets/academics-lab.jpg";

const Academics = () => {
  const departments = [
    { icon: BookOpen, name: "English", description: "Language, literature, and communication skills" },
    { icon: Calculator, name: "Mathematics", description: "Analytical thinking and problem-solving" },
    { icon: Beaker, name: "Science", description: "Physics, Chemistry, Biology, and Environmental Studies" },
    { icon: Globe, name: "Social Studies", description: "History, Geography, Civics, and Economics" },
    { icon: Palette, name: "Arts", description: "Visual arts, crafts, and creative expression" },
    { icon: Music, name: "Music", description: "Vocal and instrumental music education" },
    { icon: UsersIcon, name: "Physical Education", description: "Sports, fitness, and wellness" },
    { icon: Laptop, name: "ICT", description: "Computer science and digital literacy" },
  ];

  const calendar = [
    { month: "April", events: "New Session Begins, Orientation Week" },
    { month: "May", events: "Mid-term Assessment, Parent-Teacher Meeting" },
    { month: "June", events: "Annual Sports Day, Summer Camp" },
    { month: "July", events: "First Term Exams, Cultural Week" },
    { month: "August", events: "Independence Day Celebrations, Science Fair" },
    { month: "September", events: "Second Term Begins, Workshop Week" },
    { month: "October", events: "Mid-term Assessment, Diwali Break" },
    { month: "November", events: "Annual Function, Art Exhibition" },
    { month: "December", events: "Second Term Exams, Winter Break" },
    { month: "January", events: "Final Term Begins, Republic Day" },
    { month: "February", events: "Board Exam Preparation, Career Counseling" },
    { month: "March", events: "Final Examinations, Results Declaration" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in">Academics</h1>
          <p className="text-xl max-w-2xl animate-fade-in">School & PU College - Excellence in Education</p>
        </div>
      </section>

      {/* Academic Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-primary">School & PU College</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Ashirwad offers comprehensive education from primary to pre-university levels, following Karnataka State Board curriculum for school and Department of Pre-University Education syllabus for PU College.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our experienced faculty, modern infrastructure, and focus on both academics and co-curricular activities ensure holistic development of every student.
              </p>
              <p className="text-lg text-muted-foreground">
                We prepare students for SSLC, 2nd PUC examinations and competitive entrance exams through systematic teaching and regular assessments.
              </p>
            </div>
            <div>
              <img src={academicsImage} alt="Science Laboratory" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum by Level */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">Curriculum</h2>
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="school" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="school">School (1st to 10th)</TabsTrigger>
                <TabsTrigger value="pucollege">PU College (11th & 12th)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="primary">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-semibold mb-4">Primary School (Classes 1-5)</h3>
                    <p className="text-muted-foreground mb-6">
                      The primary years focus on building strong foundations in literacy, numeracy, and life skills through engaging, activity-based learning.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Core Subjects</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>English Language & Literature</li>
                          <li>Hindi / Regional Language</li>
                          <li>Mathematics</li>
                          <li>Environmental Studies (EVS)</li>
                          <li>General Knowledge</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Co-Curricular Activities</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Art & Craft</li>
                          <li>Music & Dance</li>
                          <li>Physical Education</li>
                          <li>Computer Basics</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="middle">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-semibold mb-4">Middle School (Classes 6-8)</h3>
                    <p className="text-muted-foreground mb-6">
                      Middle school introduces specialized subjects and prepares students for advanced learning with emphasis on analytical and critical thinking.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Core Subjects</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>English Language & Literature</li>
                          <li>Hindi / Regional Language / Sanskrit</li>
                          <li>Mathematics</li>
                          <li>Science (Physics, Chemistry, Biology)</li>
                          <li>Social Studies (History, Geography, Civics)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Additional Subjects</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Computer Science / ICT</li>
                          <li>Art Education</li>
                          <li>Physical & Health Education</li>
                          <li>Work Experience / Skill Development</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="high">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-semibold mb-4">High School (Classes 9-12)</h3>
                    <p className="text-muted-foreground mb-6">
                      Senior secondary education offers stream specialization (Science, Commerce, Humanities) preparing students for higher education and competitive exams.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Classes 9-10 (Secondary)</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>English, Hindi/Regional Language</li>
                          <li>Mathematics, Science (Physics, Chemistry, Biology)</li>
                          <li>Social Science</li>
                          <li>Computer Applications / AI</li>
                          <li>Skill Subject (choice)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Classes 11-12 Streams</h4>
                        <div className="grid md:grid-cols-3 gap-4 mt-3">
                          <div className="p-4 bg-muted rounded-lg">
                            <h5 className="font-semibold mb-2">Science</h5>
                            <p className="text-sm text-muted-foreground">PCM / PCB with English</p>
                          </div>
                          <div className="p-4 bg-muted rounded-lg">
                            <h5 className="font-semibold mb-2">Commerce</h5>
                            <p className="text-sm text-muted-foreground">Accounts, Economics, Business Studies</p>
                          </div>
                          <div className="p-4 bg-muted rounded-lg">
                            <h5 className="font-semibold mb-2">Humanities</h5>
                            <p className="text-sm text-muted-foreground">History, Political Science, Psychology</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">Academic Departments</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <dept.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">Academic Calendar</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {calendar.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-smooth">
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                        <div className="text-center">
                          <div className="text-xs uppercase">{item.month}</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.events}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Reports */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Assessment & Reports</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-3">Continuous & Comprehensive Evaluation (CCE)</h3>
                    <p className="text-muted-foreground">
                      We follow CBSE's CCE pattern, assessing students through formative and summative assessments, projects, practical work, and co-curricular activities. This holistic approach evaluates academic progress as well as personal and social development.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-3">Report Cards</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Mid-term progress reports issued twice a year</li>
                      <li>Final term report cards with detailed subject-wise analysis</li>
                      <li>Parent-teacher meetings scheduled after each assessment</li>
                      <li>Online portal access for real-time progress tracking</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
