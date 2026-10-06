import { Calendar, Clock, Bell, BookOpen } from "lucide-react";

const TimetableCalendar = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Timetable & Academic Calendar</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">School Timings</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Morning Session:</strong> 8:30 AM - 1:30 PM</p>
                <p><strong>Break Time:</strong> 11:00 AM - 11:30 AM</p>
                <p><strong>Assembly:</strong> 8:30 AM - 9:00 AM</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <Bell className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Period Structure</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Periods per Day:</strong> 6 Periods</p>
                <p><strong>Period Duration:</strong> 40 Minutes</p>
                <p><strong>Working Days:</strong> Monday - Saturday</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              Academic Calendar 2026-27
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-semibold">Academic Session Begins</span>
                <span className="text-muted-foreground">June 2026</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-semibold">First Term Exam</span>
                <span className="text-muted-foreground">September 2026</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-semibold">Diwali Break</span>
                <span className="text-muted-foreground">October 2026</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-semibold">Second Term Exam</span>
                <span className="text-muted-foreground">December 2026</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-semibold">Winter Break</span>
                <span className="text-muted-foreground">January 2027</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-semibold">Annual Exam</span>
                <span className="text-muted-foreground">March 2027</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Summer Vacation</span>
                <span className="text-muted-foreground">April - May 2027</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <BookOpen className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Detailed timetables are shared with parents at the beginning of each term</li>
              <li>• Special activity periods are scheduled on Fridays</li>
              <li>• Parent-teacher meetings are held twice per term</li>
              <li>• Academic calendar may be updated as per government guidelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableCalendar;
