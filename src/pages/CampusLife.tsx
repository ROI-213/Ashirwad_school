import { Trophy, Music, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import infra1 from "@/assets/infra1.jpg";
import infra2 from "@/assets/infra2.jpg";
import infra3 from "@/assets/infra3.jpg";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import sports1 from "@/assets/sports1.jpg";
import sportsGallery2 from "@/assets/sports-gallery-2.jpg";
import sports3 from "@/assets/sports3.jpg";
import lab1 from "@/assets/lab1.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import academicsLab from "@/assets/academics-lab.jpg";

const CampusLife = () => {
  const activities = [
    { icon: Trophy, title: "Sports", description: "Football, Cricket, Basketball, Athletics, and more" },
    { icon: Music, title: "Cultural", description: "Music, Dance, Drama, Art, and Cultural festivals" },
    { icon: Users, title: "Clubs", description: "Science Club, Literary Club, Eco Club, Tech Club" },
    { icon: Calendar, title: "Events", description: "Annual Day, Sports Day, Cultural Fest, Competitions" },
  ];

  const upcomingEvents = [
    { date: "Mar 20, 2025", title: "Annual Sports Day", description: "Inter-house sports competitions and athletic events" },
    { date: "Apr 5, 2025", title: "Cultural Festival", description: "Music, dance, and drama performances by students" },
    { date: "Apr 15, 2025", title: "Science Exhibition", description: "Student projects and innovative ideas showcase" },
    { date: "May 10, 2025", title: "Annual Day Celebration", description: "Year-end celebrations and award ceremonies" },
  ];

  const galleryImages = [
    infra1, event1, sports1, infra2, event2, sportsGallery2,
    infra3, event3, sports3, lab1, scienceLab, academicsLab,
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in">Campus Life</h1>
          <p className="text-xl max-w-2xl animate-fade-in">Vibrant campus with sports, cultural activities, clubs, and memorable events</p>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">Activities & Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Committees */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Clubs & Committees</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-3">Student Clubs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Science & Innovation Club</li>
                      <li>• Literary & Debating Society</li>
                      <li>• Eco & Environment Club</li>
                      <li>• Technology & Robotics Club</li>
                      <li>• Art & Craft Club</li>
                      <li>• Music & Dance Club</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-3">Student Committees</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Student Council</li>
                      <li>• Discipline Committee</li>
                      <li>• Sports Committee</li>
                      <li>• Cultural Committee</li>
                      <li>• Magazine Editorial Board</li>
                      <li>• Social Service Committee</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Celebrations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">Events & Celebrations</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-md transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-xs text-accent mb-1">{event.date}</p>
                        <h3 className="font-heading font-semibold mb-1">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">Gallery</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md">
                  <img src={src} alt={`Campus life ${index + 1}`} className="w-full h-48 object-cover hover:scale-110 transition-smooth" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/campus-life/gallery">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
