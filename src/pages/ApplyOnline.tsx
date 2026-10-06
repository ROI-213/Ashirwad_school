import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const admissionOptions = [
  "Nursery", "LKG", "UKG",
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  "1st PUC Science", "1st PUC Commerce", "2nd PUC Science",
];

const ApplyOnline = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    parentName: "",
    contact: "",
    email: "",
    admissionFor: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.parentName.trim()) newErrors.parentName = "Parent name is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact number is required";
    else if (!/^\d{10}$/.test(formData.contact)) newErrors.contact = "Enter a valid 10-digit number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.admissionFor) newErrors.admissionFor = "Please select admission class";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const { error } = await supabase.from("apply_online_submissions").insert({
      name: formData.name.trim(),
      dob: formData.dob || null,
      parent_name: formData.parentName.trim(),
      contact: formData.contact.trim(),
      email: formData.email.trim(),
      admission_for: formData.admissionFor,
      message: formData.message.trim() || null,
    });

    setSubmitting(false);

    if (error) {
      toast({ title: "Submission Failed", description: "Something went wrong. Please try again.", variant: "destructive" });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "We have received your application. Our team will contact you shortly.",
    });
    setFormData({ name: "", dob: "", parentName: "", contact: "", email: "", admissionFor: "", message: "" });
    setErrors({});
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Apply Online</h1>
          <p className="text-xl max-w-2xl">Fill out the application form below to begin your admission journey</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-xl shadow-lg border border-border p-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Application Form</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Enter student's full name" />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="dob">Date of Birth <span className="text-destructive">*</span></Label>
                <Input id="dob" type="date" max={today} value={formData.dob} onChange={(e) => handleChange("dob", e.target.value)} />
                {errors.dob && <p className="text-sm text-destructive mt-1">{errors.dob}</p>}
              </div>

              <div>
                <Label htmlFor="parentName">Parent / Guardian Name <span className="text-destructive">*</span></Label>
                <Input id="parentName" value={formData.parentName} onChange={(e) => handleChange("parentName", e.target.value)} placeholder="Enter parent's full name" />
                {errors.parentName && <p className="text-sm text-destructive mt-1">{errors.parentName}</p>}
              </div>

              <div>
                <Label htmlFor="contact">Contact Number <span className="text-destructive">*</span></Label>
                <Input id="contact" type="tel" value={formData.contact} onChange={(e) => handleChange("contact", e.target.value)} placeholder="Enter 10-digit mobile number" maxLength={10} />
                {errors.contact && <p className="text-sm text-destructive mt-1">{errors.contact}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email ID <span className="text-destructive">*</span></Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Enter email address" />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label>Admission For <span className="text-destructive">*</span></Label>
                <Select value={formData.admissionFor} onValueChange={(v) => handleChange("admissionFor", v)}>
                  <SelectTrigger><SelectValue placeholder="Select class / stream" /></SelectTrigger>
                  <SelectContent>
                    {admissionOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.admissionFor && <p className="text-sm text-destructive mt-1">{errors.admissionFor}</p>}
              </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Any additional information..." rows={4} />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyOnline;
