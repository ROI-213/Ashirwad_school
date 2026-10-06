import { Users, Lightbulb, Leaf, Heart, Music, Palette } from "lucide-react";

const ClubsCommittees = () => {
  const clubs = [
    {
      icon: Lightbulb,
      name: "Science Club",
      description: "Exploring scientific concepts through experiments, projects, and science exhibitions.",
      activities: ["Science Fair", "Lab Experiments", "Innovation Projects"]
    },
    {
      icon: Palette,
      name: "Art & Craft Club",
      description: "Developing creativity through painting, drawing, and various craft activities.",
      activities: ["Art Exhibitions", "Craft Workshops", "Design Competitions"]
    },
    {
      icon: Music,
      name: "Music & Dance Club",
      description: "Learning various forms of music and dance, performing at school events.",
      activities: ["Annual Concerts", "Dance Performances", "Music Competitions"]
    },
    {
      icon: Leaf,
      name: "Eco Club",
      description: "Promoting environmental awareness and sustainable practices among students.",
      activities: ["Tree Plantation", "Cleanliness Drives", "Environmental Campaigns"]
    },
    {
      icon: Heart,
      name: "Community Service Club",
      description: "Engaging in social service activities and contributing to society.",
      activities: ["Blood Donation Camps", "Charity Events", "Village Outreach"]
    },
    {
      icon: Users,
      name: "Literary Club",
      description: "Fostering reading habits, creative writing, and literary discussions.",
      activities: ["Book Reviews", "Poetry Writing", "Debate Competitions"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Clubs & Committees</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our diverse clubs and committees provide students with opportunities to explore their 
          interests, develop new skills, and contribute to the school community.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {clubs.map((club) => (
            <div key={club.name} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <club.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{club.name}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{club.description}</p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Key Activities:</h4>
                <ul className="space-y-1">
                  {club.activities.map((activity) => (
                    <li key={activity} className="text-xs text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Student Committees</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">School Cabinet</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Student representatives elected to maintain discipline and organize school activities.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Head Boy & Head Girl</li>
                <li>• House Captains</li>
                <li>• Prefects & Class Monitors</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Editorial Board</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Responsible for school magazine, newsletter, and maintaining notice boards.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Magazine Editor</li>
                <li>• Content Writers</li>
                <li>• Design Team</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Sports Committee</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Organizing sports events, tournaments, and promoting physical fitness.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Sports Captain</li>
                <li>• Event Coordinators</li>
                <li>• Equipment Managers</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Cultural Committee</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Planning and executing cultural programs, festivals, and celebrations.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Cultural Secretary</li>
                <li>• Event Managers</li>
                <li>• Performance Teams</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Benefits of Club Participation</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span>Develop leadership and teamwork skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span>Explore interests beyond academics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span>Build confidence and communication skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span>Make lasting friendships</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span>Contribute to school community</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span>Enhance college applications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubsCommittees;
