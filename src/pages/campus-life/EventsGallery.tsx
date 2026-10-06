import { Card, CardContent } from "@/components/ui/card";
import festival from "@/assets/festival.jpg";
import culturalEvent from "@/assets/cultural-event.jpg";
import sportsDay from "@/assets/sports-day.jpg";

const EventsGallery = () => {
  const events = [
    {
      title: "Annual Cultural Festival",
      description: "Celebrating diversity and talent through music, dance, and drama",
      image: festival,
      date: "December 2024"
    },
    {
      title: "Annual Day Celebration",
      description: "A grand celebration showcasing student achievements and performances",
      image: culturalEvent,
      date: "January 2025"
    },
    {
      title: "Sports Day",
      description: "Athletic competitions and sports events for all age groups",
      image: sportsDay,
      date: "February 2025"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Events & Gallery</h1>
          <p className="text-xl max-w-2xl">Memorable moments from our campus life</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-12 text-primary text-center">Recent Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-smooth group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-accent font-semibold mb-2">{event.date}</p>
                    <h3 className="text-xl font-heading font-bold mb-2 text-primary">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsGallery;
