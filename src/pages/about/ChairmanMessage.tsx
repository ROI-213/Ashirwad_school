import { Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import chairman from "@/assets/chairman-new.jpg";

const ChairmanMessage = () => {
  const [expanded, setExpanded] = useState(false);

  const chairmanMessage = "It is matter of pride and honour for me to declare that Ashirwad Group of Institutes has succeeded in establishing excellent standards of education and meeting the expectations of parents.\n\nWhen we started the Ashirwad Group of Institutes, we made a promise to the people of the region that the children will henceforth receive an education that will enable them to fully realize their potential, and they will not be left disadvantaged anymore on account of being geographically far from major cities and the centres of economic development.\n\nAshirwad Group of Institutes has brought best practices in education that include advanced curriculum, state of the art infrastructure and exposure to the world through a diverse set of activities. In an effort to create an environment for constant personal growth and intellectual development, we have set high standards of performance and discipline. We have encouraged the practice of constant involvement with the children to ensure their intellectual, personal and emotional development.\n\nTeachers at Ashirwad Group of Institutes demonstrate ongoing professional growth in order to increase the quality of instruction. They continually work to inspire students and fire their imaginations through innovative ways.\n\nWe have tried and created an institution that will address educational needs of the children and prepare them for the rigors of higher education and the 21st-century industry.\n\nWe thank you for your support and promise that we will leave no stone unturned to ensure a bright future for your child.";

  const preview = chairmanMessage.split('\n\n').slice(0, 2).join('\n\n');

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">Chairman's Message</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">Inspiring words from our visionary founder guiding our institution towards excellence</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">Founder & Chairman</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
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
                  <div className="mt-6 text-center lg:text-left">
                    <h3 className="text-xl font-heading font-bold text-foreground">Dr. Veerabhadra Gouda</h3>
                    <p className="text-primary font-medium">Founder & Chairman</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="relative bg-muted/30 rounded-2xl p-6 md:p-8 lg:p-10">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />
                  <div className="relative">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-base md:text-lg pl-0 md:pl-4 pt-8">
                      {expanded ? chairmanMessage : preview}
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

export default ChairmanMessage;
