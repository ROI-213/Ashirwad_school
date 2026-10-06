import { Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import principal from "@/assets/principal-AGI.jpg";

const PrincipalMessage = () => {
  const [expanded, setExpanded] = useState(false);

  const principalMessage = "Greetings from the Principal's Desk,\n\nAs we stand on the threshold of a new academic session, I extend a hearty and warm welcome to all my students, staff and parents. Each academic year is a new height scaled, another dream realized with new targets set for the future. Each member of this institution is devoted to turning dreams & aspirations into reality through sincerity & perseverance.\n\nWe at ASHIRWAD GROUP OF INSTITUTES always try to maintain the highest quality in academic standards and provide the most conducive environment for our student's holistic growth and development. We also strive to instil the core values of Respect, Integrity, Compassion and Excellence in our students so they can meet the ever-changing global challenges. Our dedicated and highly qualified staff stand as exemplary role models for our students thereby keeping the ethos of our school shining bright.\n\nNelson Mandela rightly said, \"Education is the most powerful weapon you can use to change the world.\" If there is one thing that can change the world, it is education and ASHIRWAD GROUP OF INSTITUTES is the pillar of formal education. Along with providing academics, we aspire to instil values, life skills and habits that make our students stand out and make a difference in society. We provide our students with ample opportunities to develop 21st-century skills such as collaboration, teamwork, critical thinking, emotional balance, time management and much more.\n\n\"Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.\" We wish to thank all the parents for their faith in ASHIRWAD GROUP OF INSTITUTES. Let's partner together, so that we can see children being successful in whatever path they choose to tread.";

  const preview = principalMessage.split('\n\n').slice(0, 2).join('\n\n');

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">Principal's Message</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">Guiding our students towards academic excellence and holistic development</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">Principal</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-3 bg-primary/10 rounded-2xl -z-10"></div>
                  <div className="overflow-hidden rounded-xl shadow-xl">
                    <img 
                      src={principal} 
                      alt="Basavaraj S Haitapur - Principal" 
                      className="w-full aspect-[4/5] object-cover object-top"
                    />
                  </div>
                  <div className="mt-6 text-center lg:text-left">
                    <h3 className="text-xl font-heading font-bold text-foreground">Basavaraj S Haitapur</h3>
                    <p className="text-primary font-medium">Principal</p>
                    <p className="text-sm text-muted-foreground mt-1">M.Sc., B.Ed., Research Scholar (PhD)</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="relative bg-muted/30 rounded-2xl p-6 md:p-8 lg:p-10">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />
                  <div className="relative">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-base md:text-lg pl-0 md:pl-4 pt-8">
                      {expanded ? principalMessage : preview}
                    </div>
                    <Button 
                      onClick={() => setExpanded(!expanded)}
                      variant="link"
                      className="mt-6 text-primary hover:text-accent p-0 h-auto font-semibold text-base"
                    >
                      {expanded ? "← Read Less" : "Read Full Message →"}
                    </Button>
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

export default PrincipalMessage;
