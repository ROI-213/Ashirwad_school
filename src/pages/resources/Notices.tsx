import { Card, CardContent } from "@/components/ui/card";
import { Bell, Calendar, FileText } from "lucide-react";

const Notices = () => {
  const notices = [
    {
      date: "2026-03-25",
      title: "Summer Vacation Notice",
      category: "Important",
      description: "School will remain closed for summer vacation from April 15 to June 10, 2026. Reopening date will be notified."
    },
    {
      date: "2026-03-20",
      title: "Annual Examination Schedule",
      category: "Exam",
      description: "Final examination for classes 1st to 9th and 11th will commence from March 28, 2026. Time table has been distributed."
    },
    {
      date: "2026-03-15",
      title: "Parent-Teacher Meeting",
      category: "Meeting",
      description: "Mandatory parent-teacher meeting scheduled for March 30, 2026 at 10:00 AM to discuss academic progress."
    },
    {
      date: "2026-03-10",
      title: "Sports Day Celebration",
      category: "Event",
      description: "Annual Sports Day will be held on April 5, 2026. All students are required to participate."
    },
    {
      date: "2026-03-05",
      title: "Fee Payment Reminder",
      category: "Fee",
      description: "Parents are requested to clear pending fees for the current academic year by March 31, 2026."
    }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Important": return "text-red-600 bg-red-50";
      case "Exam": return "text-primary bg-primary/10";
      case "Meeting": return "text-accent bg-accent/10";
      case "Event": return "text-blue-600 bg-blue-50";
      case "Fee": return "text-orange-600 bg-orange-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Notices & Circulars</h1>
          <p className="text-xl max-w-2xl">Stay updated with latest announcements</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {notices.map((notice, index) => (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Bell className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getCategoryColor(notice.category)}`}>
                            {notice.category}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(notice.date).toLocaleDateString('en-IN', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-2 text-primary">{notice.title}</h3>
                        <p className="text-muted-foreground">{notice.description}</p>
                      </div>
                      <FileText className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    </div>
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

export default Notices;
