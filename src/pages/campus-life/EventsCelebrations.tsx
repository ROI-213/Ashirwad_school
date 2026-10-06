import { Calendar, PartyPopper, Award, Heart } from "lucide-react";

const EventsCelebrations = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Events & Celebrations</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Throughout the year, we celebrate various festivals, organize events, and commemorate 
          important occasions that enrich student life and create lasting memories.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">National Celebrations</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Independence Day (15th August)</strong>
                    <p className="text-sm">Flag hoisting, cultural programs, patriotic songs</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Republic Day (26th January)</strong>
                    <p className="text-sm">Parade, speech competitions, national anthem</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Gandhi Jayanti (2nd October)</strong>
                    <p className="text-sm">Peace rallies, cleanliness drives, speeches</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <PartyPopper className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Cultural Festivals</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Annual Day</strong>
                    <p className="text-sm">Grand cultural show with performances and awards</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Sports Day</strong>
                    <p className="text-sm">Athletic meets, competitions, prize distribution</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Kannada Rajyotsava</strong>
                    <p className="text-sm">Celebrating Karnataka's culture and heritage</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Academic Events</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Science Exhibition</strong>
                    <p className="text-sm">Student projects, innovations, and experiments</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Quiz Competitions</strong>
                    <p className="text-sm">Inter-house and inter-school quiz contests</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Book Fair</strong>
                    <p className="text-sm">Reading promotion and book exhibitions</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Special Observances</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Teacher's Day</strong>
                    <p className="text-sm">Honoring teachers with cultural programs</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Children's Day</strong>
                    <p className="text-sm">Fun activities, games, and celebrations</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <div>
                    <strong>Environment Day</strong>
                    <p className="text-sm">Tree plantation and eco-awareness programs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-accent/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Monthly Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">June - September</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Orientation Day</li>
                  <li>• Independence Day</li>
                  <li>• Teacher's Day</li>
                  <li>• Hindi Diwas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">October - December</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Gandhi Jayanti</li>
                  <li>• Diwali Celebration</li>
                  <li>• Kannada Rajyotsava</li>
                  <li>• Christmas Celebration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">January - March</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Republic Day</li>
                  <li>• Annual Day</li>
                  <li>• Sports Day</li>
                  <li>• Farewell Ceremony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCelebrations;
