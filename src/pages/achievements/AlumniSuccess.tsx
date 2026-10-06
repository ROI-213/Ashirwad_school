import { GraduationCap, Star, TrendingUp, Users } from "lucide-react";

const AlumniSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Alumni Success Stories</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our alumni have gone on to achieve remarkable success in various fields, making us proud 
          with their accomplishments and contributions to society.
        </p>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
            <p className="text-muted-foreground">Alumni Network</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground">Higher Education Abroad</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
            <p className="text-muted-foreground">Professional Achievers</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">95%</h3>
            <p className="text-muted-foreground">Career Success Rate</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">Notable Alumni Achievements</h2>
          
          <div className="space-y-6">
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Engineering & Technology</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Software Engineers at top IT companies (Microsoft, Google, Amazon)</li>
                <li>• Successful entrepreneurs in tech startups</li>
                <li>• Research scholars at IITs and NITs</li>
                <li>• Patent holders and innovators</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Medical & Healthcare</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Doctors serving in reputed hospitals across India</li>
                <li>• Specialists in various medical fields</li>
                <li>• Medical researchers and academicians</li>
                <li>• Healthcare entrepreneurs</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Civil Services & Administration</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• IAS and IPS officers serving the nation</li>
                <li>• Administrative service professionals</li>
                <li>• Police department officers</li>
                <li>• Public service contributors</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Business & Finance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Chartered Accountants and financial consultants</li>
                <li>• Business owners and entrepreneurs</li>
                <li>• Banking sector professionals</li>
                <li>• Investment advisors and analysts</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Arts, Media & Sports</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Journalists and media professionals</li>
                <li>• State and national level athletes</li>
                <li>• Artists and creative professionals</li>
                <li>• Social activists and NGO founders</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Alumni Testimonials</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">
                  "Ashirwad School provided me with a strong foundation that helped me excel in 
                  my engineering career. The values and discipline I learned here continue to guide me."
                </p>
                <p className="text-sm font-semibold">- Batch of 2018, Software Engineer</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">
                  "The quality education and supportive teachers at Ashirwad shaped my medical career. 
                  I'm grateful for the opportunities and guidance I received."
                </p>
                <p className="text-sm font-semibold">- Batch of 2017, Medical Doctor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniSuccess;
