import { BookOpen, Clock, Users, Search } from "lucide-react";

const Library = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">School Library</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our well-stocked library provides a quiet and conducive environment for reading, 
          research, and knowledge exploration.
        </p>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">5000+</h3>
            <p className="text-muted-foreground">Books Collection</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">200+</h3>
            <p className="text-muted-foreground">Daily Visitors</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Search className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground">Magazines & Journals</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">8 Hours</h3>
            <p className="text-muted-foreground">Daily Access</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">Library Collections</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Subject Books</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reference books for all subjects</li>
                <li>• Textbooks and guidebooks</li>
                <li>• Previous years' question papers</li>
                <li>• Competitive exam preparation books</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">General Reading</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Fiction and non-fiction books</li>
                <li>• Children's literature</li>
                <li>• Biographies and autobiographies</li>
                <li>• General knowledge books</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Periodicals</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Educational magazines</li>
                <li>• Current affairs journals</li>
                <li>• Science and technology magazines</li>
                <li>• Local and national newspapers</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Digital Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• E-books and digital library access</li>
                <li>• Online educational resources</li>
                <li>• Research databases</li>
                <li>• Computer workstations</li>
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border mb-8">
            <h3 className="text-xl font-semibold mb-4">Library Timings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">School Section</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Monday to Friday: 9:00 AM - 4:00 PM</li>
                  <li>• Saturday: 9:00 AM - 1:00 PM</li>
                  <li>• Sunday: Closed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">PU College Section</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Monday to Friday: 8:30 AM - 4:30 PM</li>
                  <li>• Saturday: 8:30 AM - 2:00 PM</li>
                  <li>• Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Library Rules & Guidelines</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Maintain silence in the library premises</li>
              <li>• Books can be issued for 15 days and renewed if required</li>
              <li>• Maximum 2 books can be issued at a time</li>
              <li>• Lost or damaged books must be replaced or paid for</li>
              <li>• Return books on time to avoid late fees</li>
              <li>• Mobile phones and electronic devices should be kept in silent mode</li>
              <li>• Food and beverages are not allowed in the library</li>
              <li>• Library card is mandatory for issuing books</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
