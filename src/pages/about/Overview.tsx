import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, Users } from "lucide-react";
import schoolBuilding from "@/assets/building-front-new.jpg";

const Overview = () => {
  const values = [
    { icon: Award, title: "Excellence", description: "Striving for the highest standards in education" },
    { icon: Target, title: "Innovation", description: "Embracing modern teaching methodologies" },
    { icon: Heart, title: "Compassion", description: "Fostering empathy and social responsibility" },
    { icon: Users, title: "Inclusivity", description: "Creating a welcoming environment for all" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Overview</h1>
          <p className="text-xl max-w-2xl">Ashirwad Group of Institutes - Excellence in Education</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Ashirwad Group of Institutes was established with a vision to provide world-class education to students in Hunasagi and surrounding areas. Founded by Dr. Veerabhadra Gouda, our institution has grown from a small school to a comprehensive educational campus.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We have succeeded in establishing excellent standards of education and meeting the expectations of parents. Our institution features state-of-the-art infrastructure, advanced curriculum, and exposure to the world through diverse activities.
              </p>
              <p className="text-lg text-muted-foreground">
                Our teachers demonstrate ongoing professional growth and inspire students through innovative teaching methods, preparing them for the rigors of higher education and the 21st century industry.
              </p>
            </div>
            <div>
              <img src={schoolBuilding} alt="School Building" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
