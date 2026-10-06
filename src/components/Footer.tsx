import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">Ashirwad Global School & PU College</h3>
            <p className="text-sm text-muted-foreground mb-4">
              The Future Begins Here! Bringing unlimited educational opportunities to the community.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=100063558329279" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-smooth">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/_ashirwad_group_of_institutes?igsh=bDVuazh3OWhhdm4w" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-smooth">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@ashirwadgroupofinstitutes" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-smooth">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about/overview" className="text-sm text-muted-foreground hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/academics" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Academics</Link></li>
              <li><Link to="/admissions" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Admissions</Link></li>
              <li><Link to="/campus-life" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Campus Life</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/achievements" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Achievements</Link></li>
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Resources</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Results</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Parent Login</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Student Login</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-primary">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>Isampura Cross, Kembhavi Road, Hunasagi, Yadgir Dist, Karnataka - 585215</span>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>+91 6361367322 / +91 6362694311</span>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>ashirwadglobalschool@gmail.com</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              <strong>Office Hours:</strong><br />
              Mon - Fri: 8:00 AM - 4:00 PM<br />
              Sat: 8:00 AM - 12:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ashirwad Global School & PU College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
