import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award, Briefcase, BookOpen } from "lucide-react";
import teachingStaff01 from "@/assets/teaching-staff-01.jpg";
import teachingStaff02 from "@/assets/teaching-staff-02.jpg";
import teachingStaff03 from "@/assets/teaching-staff-03.jpg";
import teachingStaff04 from "@/assets/teaching-staff-04.jpg";
import teachingStaff05 from "@/assets/teaching-staff-05.png";
import teachingStaff06 from "@/assets/teaching-staff-06.png";
import teachingStaff07 from "@/assets/teaching-staff-07.jpeg";
import teachingStaff08 from "@/assets/teaching-staff-08.jpg";
import teachingStaff10 from "@/assets/teaching-staff-10.jpg";
import teachingStaff11 from "@/assets/teaching-staff-11.png";
import teachingStaff12 from "@/assets/teaching-staff-12.png";
import teachingStaff13 from "@/assets/teaching-staff-13.jpg";
import teachingStaff14 from "@/assets/teaching-staff-14.jpg";

import officeStaff1 from "@/assets/office-staff-1.png";
import officeStaff2 from "@/assets/office-staff-2.jpeg";
import officeStaff3 from "@/assets/office-staff-3.png";
import officeStaff4 from "@/assets/office-staff-4.jpg";
import officeStaff5 from "@/assets/office-staff-5.jpg";
import officeStaff6 from "@/assets/office-staff-6.jpg";
import officeStaff7 from "@/assets/office-staff-7.jpg";

const OurFaculties = () => {
  const teachingStaff = [
    {
      name: "SHARANAPPA",
      qualification: "M.Sc, B.Ed",
      subject: "Mathematics",
      image: teachingStaff01,
    },
    {
      name: "SNEHAL REVANKAR",
      qualification: "B.Sc, B.Ed",
      subject: "Science",
      image: teachingStaff02,
    },
    {
      name: "PRIYANKA SURPUR",
      qualification: "MA, B.Ed",
      subject: "Social Studies",
      image: teachingStaff03,
    },
    {
      name: "HIMA M.M",
      qualification: "MA, D.Ed",
      subject: "English",
      image: teachingStaff04,
    },
    {
      name: "VIJAYALAXMI S.G",
      qualification: "BA, B.Ed",
      subject: "EVS",
      image: teachingStaff05,
    },
    {
      name: "KALPANA",
      qualification: "B.Tech",
      subject: "Computer",
      image: teachingStaff06,
    },
    {
      name: "BHIMARAY",
      qualification: "BA, B.Ed",
      subject: "Kannada",
      image: teachingStaff07,
    },
    {
      name: "SHANKAR RATHOD",
      qualification: "BA, BP.Ed",
      subject: "PE Teacher",
      image: teachingStaff08,
    },
    {
      name: "YALLALINGA BIRADAR",
      qualification: "BA, B.Ed",
      subject: "Hindi",
      image: teachingStaff10,
    },
    {
      name: "SHAILA B",
      qualification: "BA, B.Ed",
      subject: "Kannada",
      image: teachingStaff11,
    },
    {
      name: "DHANASHREE",
      qualification: "MA, D.Ed",
      subject: "Pre-Primary",
      image: teachingStaff12,
    },
    {
      name: "SPOORTI GOKHALE",
      qualification: "B.Sc, B.Ed",
      subject: "Maths",
      image: teachingStaff13,
    },
    {
      name: "CHANGALARAY",
      qualification: "AMC",
      subject: "Art & Craft",
      image: teachingStaff14,
    },
  ];

  const officeStaff = [
    {
      name: "SAJI MATHEW",
      role: "IT Admin",
      image: officeStaff1,
    },
    {
      name: "Shivu Reddy",
      role: "FDC",
      image: officeStaff2,
    },
    {
      name: "KANCHANA PODDAR",
      role: "SDC",
      image: officeStaff3,
    },
    {
      name: "M Sunil J Reddy",
      role: "Accountant",
      image: officeStaff4,
    },
    {
      name: "S Shivappa Chowdary",
      role: "Marketing Team",
      image: officeStaff5,
    },
    {
      name: "Mahesh Reddy S H",
      role: "Hostel Warden",
      image: officeStaff6,
    },
    {
      name: "Shruti P",
      role: "Hostel Warden",
      image: officeStaff7,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Our Faculties</h1>
          <p className="text-xl max-w-2xl">
            Dedicated professionals committed to excellence in education
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Teaching Staff Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-primary mb-4">
                  Teaching Staff
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our experienced educators bring passion and expertise to create an
                  engaging learning environment for every student.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teachingStaff.map((staff, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-64 overflow-hidden bg-muted">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-sm font-bold text-primary mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                        {staff.name}
                      </h3>
                      <div className="space-y-1.5 text-sm">
                        <p className="text-muted-foreground flex items-center gap-2">
                          <BookOpen className="w-4 h-4 flex-shrink-0 text-accent" />
                          <span>{staff.subject}</span>
                        </p>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 flex-shrink-0 text-accent" />
                          <span>{staff.qualification}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Staff Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-primary mb-4">
                  Office Staff
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our dedicated administrative team ensures smooth operations and
                  provides excellent support to students, parents, and faculty.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {officeStaff.map((staff, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-64 overflow-hidden bg-muted">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5 text-center">
                      <h3 className="text-sm font-bold text-primary mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        {staff.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {staff.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Professional Development */}
            <Card className="mt-16">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  Professional Development & Training
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Regular training workshops and seminars
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Continuous professional development programs
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Participation in educational conferences
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Collaboration with educational experts
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Focus on modern teaching methodologies
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Regular performance assessments and feedback
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFaculties;
