import { Card, CardContent } from "@/components/ui/card";
import { Library, Monitor, School, FlaskConical, Award } from "lucide-react";
import library from "@/assets/library.jpg";
import computerLab from "@/assets/computer-lab2.jpg";
import sportsGround from "@/assets/sports2.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import smartClassroom from "@/assets/smartclass2.jpg";

const Infrastructure = () => {
  const facilities = [
    { icon: Library, title: "Modern Library", description: "Well-stocked with thousands of books, journals, and digital resources for comprehensive learning", image: library },
    { icon: Monitor, title: "Computer Labs", description: "State-of-the-art technology infrastructure with latest hardware and software", image: computerLab },
    { icon: School, title: "Sports Ground", description: "Extensive facilities for cricket, football, athletics, and other outdoor activities", image: sportsGround },
    { icon: FlaskConical, title: "Science Labs", description: "Fully equipped physics, chemistry, and biology labs with modern instruments", image: scienceLab },
    { icon: Award, title: "Smart Classrooms", description: "Interactive digital learning environments with projectors and smart boards", image: smartClassroom },
  ];

  const additionalFacilities = [
    "Spacious and well-ventilated classrooms",
    "Transportation facility covering major routes",
    "CCTV surveillance for safety and security",
    "Clean drinking water and hygienic cafeteria",
    "Medical room with first-aid facilities",
    "Indoor sports and recreation room",
    "Audio-visual room for multimedia learning",
    "Well-maintained playground and gardens",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Infrastructure & Facilities</h1>
          <p className="text-xl max-w-2xl">State-of-the-art infrastructure for holistic development</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {facilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-smooth group">
                  <div className="h-64 overflow-hidden">
                    <img src={facility.image} alt={facility.title} className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <facility.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-primary">{facility.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Additional Facilities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalFacilities.map((facility, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
