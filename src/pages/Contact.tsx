import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateContact = () => {
    const e: Record<string, string> = {};
    if (!contactForm.name.trim()) e.name = "Name is required";
    if (!contactForm.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) e.email = "Enter a valid email";
    if (!contactForm.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleContactSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validateContact()) return;
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: contactForm.name.trim(),
      email: contactForm.email.trim(),
      phone: contactForm.phone.trim() || null,
      subject: contactForm.subject.trim() || null,
      message: contactForm.message.trim(),
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Submission Failed", description: "Something went wrong. Please try again.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll get back to you soon." });
    setContactForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setErrors({});
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Ashirwad Global School and PU College\nIsampur Cross, Kembhavi Road\nHunasagi\nKarnataka – 585215",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 63626 94311\n+91 63613 67322",
    },
    {
      icon: Mail,
      title: "Email",
      content: "ashirwadglobalschool@gmail.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 8:00 AM - 4:00 PM\nSat: 8:00 AM - 12:00 PM\nSun: Closed",
    },
  ];

  const departments = [
    { name: "Principal's Office", phone: "+91 63626 94311", email: "ashirwadglobalschool@gmail.com" },
    { name: "Admissions Office", phone: "+91 63613 67322", email: "ashirwadglobalschool@gmail.com" },
    { name: "Academic Office", phone: "+91 63626 94311", email: "ashirwadglobalschool@gmail.com" },
    { name: "Accounts Department", phone: "+91 63613 67322", email: "ashirwadglobalschool@gmail.com" },
    { name: "Transport Department", phone: "+91 63626 94311", email: "ashirwadglobalschool@gmail.com" },
  ];

  const googleMapsUrl = "https://maps.app.goo.gl/3uQA1fjDNZzg6Cd17?g_st=awb";
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.8!2d76.8985!3d16.4505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6f8a9b7c5d6e7%3A0x1234567890abcdef!2sAshirwad%20Global%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-2xl animate-fade-in">Get in touch with us for any inquiries or assistance</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{info.title}</h3>
                  {info.title === "Phone" ? (
                    <div className="text-sm text-muted-foreground space-y-1">
                      <a href="tel:+916362694311" className="block hover:text-primary transition-smooth">+91 63626 94311</a>
                      <a href="tel:+916361367322" className="block hover:text-primary transition-smooth">+91 63613 67322</a>
                    </div>
                  ) : info.title === "Email" ? (
                    <a href="mailto:ashirwadglobalschool@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-smooth break-all">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-heading font-bold mb-8 text-primary">Send us a Message</h2>
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Name <span className="text-destructive">*</span></Label>
                        <Input id="name" placeholder="Enter your name" value={contactForm.name} onChange={(e) => { setContactForm(p => ({ ...p, name: e.target.value })); if (errors.name) setErrors(p => ({ ...p, name: "" })); }} />
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" value={contactForm.email} onChange={(e) => { setContactForm(p => ({ ...p, email: e.target.value })); if (errors.email) setErrors(p => ({ ...p, email: "" })); }} />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={contactForm.phone} onChange={(e) => setContactForm(p => ({ ...p, phone: e.target.value }))} />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" value={contactForm.subject} onChange={(e) => setContactForm(p => ({ ...p, subject: e.target.value }))} />
                    </div>
                    <div>
                      <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
                      <Textarea 
                        id="message" 
                        placeholder="Write your message here..." 
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => { setContactForm(p => ({ ...p, message: e.target.value })); if (errors.message) setErrors(p => ({ ...p, message: "" })); }}
                      />
                      {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={submitting}>
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-4xl font-heading font-bold mb-8 text-primary">Location</h2>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.247574590393!2d76.5325682!3d16.462996999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc80bfd2265ce49%3A0xbbba177c4ad968db!2sAshirwad%20Global%20School%2C%20Hunasagi!5e0!3m2!1sen!2sin!4v1766057060308!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ashirwad Global School Location"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold mb-2">Ashirwad Global School and PU College</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Isampur Cross, Kembhavi Road<br />
                      Hunasagi, Karnataka – 585215
                    </p>
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary text-center">Contact Directory</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-border last:border-0 gap-3">
                      <div>
                        <h3 className="font-heading font-semibold">{dept.name}</h3>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 text-sm">
                        <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                          <Phone className="w-4 h-4 text-accent" />
                          <span>{dept.phone}</span>
                        </a>
                        <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                          <Mail className="w-4 h-4 text-accent" />
                          <span className="break-all">{dept.email}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Connect With Us</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Follow us on social media for latest updates, photos, and announcements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Facebook
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Instagram
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Twitter
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              YouTube
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
