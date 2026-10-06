import { Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import chairman from "@/assets/chairman-new.jpg";
import principal from "@/assets/principal-message.jpg";

const Management = () => {
  const [expandedChairman, setExpandedChairman] = useState(false);
  const [expandedPrincipal, setExpandedPrincipal] = useState(false);

  const chairmanMessage = "It is matter of pride and honour for me to declare that Ashirwad Group of Institutes has succeeded in establishing excellent standards of education and meeting the expectations of parents.\n\nWhen we started the Ashirwad Group of Institutes, we made a promise to the people of the region that the children will henceforth receive an education that will enable them to fully realize their potential, and they will not be left disadvantaged anymore on account of being geographically far from major cities and the centres of economic development.\n\nAshirwad Group of Institutes has brought best practices in education that include advanced curriculum, state of the art infrastructure and exposure to the world through a diverse set of activities. In an effort to create an environment for constant personal growth and intellectual development, we have set high standards of performance and discipline. We have encouraged the practice of constant involvement with the children to ensure their intellectual, personal and emotional development.\n\nTeachers at Ashirwad Group of Institutes demonstrate ongoing professional growth in order to increase the quality of instruction. They continually work to inspire students and fire their imaginations through innovative ways.\n\nWe have tried and created an institution that will address educational needs of the children and prepare them for the rigors of higher education and the 21st-century industry.\n\nWe thank you for your support and promise that we will leave no stone unturned to ensure a bright future for your child.";

  const principalMessage = "Greetings from the Principal's Desk,\n\nAs we stand on the threshold of a new academic session, I extend a hearty and warm welcome to all my students, staff and parents. Each academic year is a new height scaled, another dream realized with new targets set for the future. Each member of this institution is devoted to turning dreams & aspirations into reality through sincerity & perseverance.\n\nWe at ASHIRWAD GROUP OF INSTITUTES always try to maintain the highest quality in academic standards and provide the most conducive environment for our student's holistic growth and development. We also strive to instil the core values of Respect, Integrity, Compassion and Excellence in our students so they can meet the ever-changing global challenges. Our dedicated and highly qualified staff stand as exemplary role models for our students thereby keeping the ethos of our school shining bright.\n\nNelson Mandela rightly said, \"Education is the most powerful weapon you can use to change the world.\" If there is one thing that can change the world, it is education and ASHIRWAD GROUP OF INSTITUTES is the pillar of formal education. Along with providing academics, we aspire to instil values, life skills and habits that make our students stand out and make a difference in society. We provide our students with ample opportunities to develop 21st-century skills such as collaboration, teamwork, critical thinking, emotional balance, time management and much more.\n\n\"Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.\" We wish to thank all the parents for their faith in ASHIRWAD GROUP OF INSTITUTES. Let's partner together, so that we can see children being successful in whatever path they choose to tread.";

  const chairmanPreview = chairmanMessage.split('\n\n').slice(0, 2).join('\n\n');
  const principalPreview = principalMessage.split('\n\n').slice(0, 2).join('\n\n');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">Leadership Messages</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">Inspiring words from our visionary leaders guiding our institution towards excellence</p>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">Chairman's Message</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              {/* Image Column */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-3 bg-primary/10 rounded-2xl -z-10"></div>
                  <div className="overflow-hidden rounded-xl shadow-xl">
                    <img 
                      src={chairman} 
                      alt="Dr. Veerabhadra Gouda - Founder & Chairman" 
                      className="w-full aspect-[4/5] object-cover object-top"
                    />
                  </div>
                  {/* Name Badge */}
                  <div className="mt-6 text-center lg:text-left">
                    <h3 className="text-xl font-heading font-bold text-foreground">Dr. Veerabhadra Gouda</h3>
                    <p className="text-primary font-medium">Founder & Chairman</p>
                  </div>
                </div>
              </div>
              
              {/* Message Column */}
              <div className="lg:col-span-3">
                <div className="relative bg-muted/30 rounded-2xl p-6 md:p-8 lg:p-10">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />
                  <div className="relative">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-base md:text-lg pl-0 md:pl-4 pt-8">
                      {expandedChairman ? chairmanMessage : chairmanPreview}
                    </div>
                    <Button 
                      onClick={() => setExpandedChairman(!expandedChairman)}
                      variant="link"
                      className="mt-6 text-primary hover:text-accent p-0 h-auto font-semibold text-base"
                    >
                      {expandedChairman ? "← Read Less" : "Read Full Message →"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </div>

      {/* Principal's Message Section */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-10 lg:text-right">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">Principal's Message</h2>
              <div className="w-20 h-1 bg-accent rounded-full lg:ml-auto"></div>
            </div>
            
            {/* Two Column Layout - Reversed */}
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              {/* Message Column */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="relative bg-background rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/10 transform rotate-180" />
                  <div className="relative">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-base md:text-lg pr-0 md:pr-4 pt-8">
                      {expandedPrincipal ? principalMessage : principalPreview}
                    </div>
                    <Button 
                      onClick={() => setExpandedPrincipal(!expandedPrincipal)}
                      variant="link"
                      className="mt-6 text-accent hover:text-primary p-0 h-auto font-semibold text-base"
                    >
                      {expandedPrincipal ? "← Read Less" : "Read Full Message →"}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Image Column */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-3 bg-accent/10 rounded-2xl -z-10"></div>
                  <div className="overflow-hidden rounded-xl shadow-xl">
                    <img 
                      src={principal} 
                      alt="Mr. Soudagar Pawar - Principal" 
                      className="w-full aspect-[4/5] object-cover object-top"
                    />
                  </div>
                  {/* Name Badge */}
                  <div className="mt-6 text-center lg:text-right">
                    <h3 className="text-xl font-heading font-bold text-foreground">Mr. Soudagar Pawar</h3>
                    <p className="text-accent font-medium">Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
