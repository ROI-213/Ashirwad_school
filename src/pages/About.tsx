import { Award, Target, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import principalImage from "@/assets/principal.jpg";

const About = () => {
  const values = [
    { icon: Award, title: "Excellence", description: "Striving for the highest standards in education and character building" },
    { icon: Target, title: "Innovation", description: "Embracing modern teaching methodologies and technology" },
    { icon: Heart, title: "Compassion", description: "Fostering empathy, kindness, and social responsibility" },
    { icon: Users, title: "Inclusivity", description: "Creating a welcoming environment for all students" },
  ];

  const awards = [
    "CBSE Best School Award 2024",
    "National Excellence in Science Education",
    "Green School Certification",
    "Outstanding Sports Achievements",
    "Best Infrastructure Award",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in">About Ashirwad Global</h1>
          <p className="text-xl max-w-2xl animate-fade-in">School & PU College - The Future Begins Here!</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6 text-primary">Our Story</h2>
            <div className="prose max-w-none text-muted-foreground">
              <p className="mb-4 text-lg">
                Ashirwad Group of Institutes has succeeded in establishing excellent standards of education in Hunasagi and surrounding regions. We bring unlimited educational opportunities to the local community, making future generations capable of original thought, creation, leadership and accomplishment.
              </p>
              <p className="mb-4 text-lg">
                Our institution features state-of-the-art infrastructure, advanced curriculum, and exposure to the world through diverse activities. We have created an environment for constant personal growth and intellectual development with high standards of performance and discipline.
              </p>
              <p className="text-lg">
                Our teachers demonstrate ongoing professional growth and inspire students through innovative teaching methods, preparing them for the rigors of higher education and the 21st century industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Chairman's Message</h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 p-6 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <img src={principalImage} alt="Chairman" className="rounded-lg w-full max-w-xs" />
                  </div>
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-heading font-semibold mb-2">Dr. Veerabhadra Gouda</h3>
                    <p className="text-accent mb-4">Founder & Chairman</p>
                    <div className="text-muted-foreground space-y-3">
                      <p>
                        It is matter of pride and honour for me to declare that Ashirwad Group of Institutes has succeeded in establishing excellent standards of education and meeting the expectations of parents.
                      </p>
                      <p>
                        When we started the Ashirwad Group of Institutes, we made a promise to the people of the region that the children will henceforth receive an education that will enable them to fully realize their potential, and they will not be left disadvantaged anymore on account of being geographically far from major cities.
                      </p>
                      <p>
                        We have brought best practices in education that include advanced curriculum, state-of-the-art infrastructure and exposure to the world through diverse activities.
                      </p>
                      <p>
                        We thank you for your support and promise that we will leave no stone unturned to ensure a bright future for your child.
                      </p>
                      <p className="font-semibold">Dr. Veerabhadra Gouda<br />Founder & Chairman</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Values & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Our Vision & Mission</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-center">Vision</h3>
                <p className="text-lg text-muted-foreground text-center italic">
                  "To bring unlimited educational opportunities to the local community and make the future generations capable of original thought, creation, leadership and accomplishment even in face of adversity"
                </p>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Accreditation & Awards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Accreditation & Awards</h2>
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-heading font-semibold mb-3">Accreditation & Affiliations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Affiliated to Karnataka Secondary Education Examination Board (KSEEB)</li>
                    <li>• Affiliated to Department of Pre-University Education, Karnataka</li>
                    <li>• Recognized by Government of Karnataka</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3">Infrastructure & Facilities</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Modern Classrooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Science & Computer Labs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Library with Digital Resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Sports Facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Transportation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Safety & Security</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Management</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground text-center mb-6">
                  Ashirwad Group of Institutes is managed by a dedicated team committed to providing quality education and creating future leaders.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold">Dr. Veerabhadra Gouda</h3>
                    <p className="text-sm text-muted-foreground">Founder & Chairman</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold">Principal</h3>
                    <p className="text-sm text-muted-foreground">Academic Head</p>
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

export default About;
