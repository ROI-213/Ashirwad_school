import { BookOpen, Beaker, Globe, Calculator, Languages, Palette } from "lucide-react";

const SubjectsOffered = () => {
  const subjects = [
    {
      icon: Languages,
      category: "Languages",
      subjects: ["English", "Kannada", "Hindi"]
    },
    {
      icon: Calculator,
      category: "Mathematics",
      subjects: ["Mathematics", "Applied Mathematics", "Vedic Mathematics"]
    },
    {
      icon: Beaker,
      category: "Sciences",
      subjects: ["Physics", "Chemistry", "Biology", "General Science"]
    },
    {
      icon: Globe,
      category: "Social Sciences",
      subjects: ["History", "Geography", "Civics", "Economics"]
    },
    {
      icon: BookOpen,
      category: "Computer Science",
      subjects: ["Computer Applications", "Information Technology", "Coding"]
    },
    {
      icon: Palette,
      category: "Arts & Others",
      subjects: ["Drawing", "Music", "Physical Education", "Moral Science"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Subjects Offered</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our comprehensive curriculum offers a wide range of subjects to ensure holistic development 
          and prepare students for future academic pursuits.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {subjects.map((item) => (
            <div key={item.category} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">{item.category}</h3>
              <ul className="space-y-2">
                {item.subjects.map((subject) => (
                  <li key={subject} className="text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectsOffered;
