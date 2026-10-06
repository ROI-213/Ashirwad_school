import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Music, Palette, Users } from "lucide-react";
import sportsDay from "@/assets/sports-new.jpg";
import culturalEvent from "@/assets/cultural-event-new.jpg";
import activityCultural1 from "@/assets/activity-cultural-1.jpg";
import activityCultural2 from "@/assets/activity-cultural-2.jpg";
import activityFestival1 from "@/assets/activity-festival-1.jpg";
import activityRedDay from "@/assets/activity-redday.jpg";
import activitySchoolEvent1 from "@/assets/activity-school-event-1.jpg";
import activityTraditional from "@/assets/activity-traditional.jpg";
import activitySchoolVisit from "@/assets/activity-school-visit.jpg";
import activityFieldTrip1 from "@/assets/activity-field-trip-1.jpg";
import activityFieldTrip2 from "@/assets/activity-field-trip-2.jpg";
import activityFestival2 from "@/assets/activity-festival-2.jpg";

const Activities = () => {
  const sports = [
    "Cricket", "Football", "Volleyball", "Basketball", "Badminton",
    "Athletics", "Table Tennis", "Chess", "Kabaddi", "Kho-Kho"
  ];

  const cultural = [
    "Music (Vocal & Instrumental)", "Classical & Contemporary Dance",
    "Drama & Theatre", "Drawing & Painting", "Rangoli & Mehendi",
    "Public Speaking & Debate", "Quiz Competitions", "Literary Activities"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Sports & Cultural Activities</h1>
          <p className="text-xl max-w-2xl">Nurturing talents beyond academics</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img src={sportsDay} alt="Sports Activities" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary">Sports Activities</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We encourage students to participate in various sports activities to promote physical fitness, teamwork, and competitive spirit.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sports.map((sport, index) => (
                      <span key={index} className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {sport}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img src={culturalEvent} alt="Cultural Activities" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary">Cultural Activities</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our cultural programs help students explore their artistic talents and celebrate India's rich cultural heritage.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cultural.map((activity, index) => (
                      <span key={index} className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent">
                        {activity}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-heading font-bold text-primary">Art & Craft</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Regular workshops in drawing, painting, clay modeling, and other creative arts to enhance artistic expression and creativity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-accent" />
                    <h3 className="text-xl font-heading font-bold text-primary">Team Building</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Group activities and team sports that develop leadership skills, cooperation, and social bonding among students.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-heading font-bold text-center text-primary mb-4">
                Activity Gallery
              </h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Glimpses of our vibrant sports, cultural events, and educational activities
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { src: activityCultural1, alt: "Traditional dance performance" },
                  { src: activityCultural2, alt: "Cultural drama presentation" },
                  { src: activityTraditional, alt: "Students in traditional attire" },
                  { src: activityFestival1, alt: "Festival celebration activities" },
                  { src: activityFestival2, alt: "Cultural festival event" },
                  { src: activityRedDay, alt: "Red Day celebration" },
                  { src: activitySchoolEvent1, alt: "School event ceremony" },
                  { src: activitySchoolVisit, alt: "Educational visit" },
                  { src: activityFieldTrip1, alt: "Field trip to heritage site" },
                  { src: activityFieldTrip2, alt: "Educational tour to historical temple" }
                ].map((image, index) => (
                  <Card key={index} className="overflow-hidden group cursor-pointer hover-scale">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
