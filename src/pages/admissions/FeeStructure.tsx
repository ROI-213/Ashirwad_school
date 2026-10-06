import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, BookOpen, GraduationCap, Bus } from "lucide-react";

const FeeStructure = () => {
  const schoolFees = [
    { class: "Nursery", tuition: "[To be updated]", total: "[To be updated]" },
    { class: "LKG", tuition: "[To be updated]", total: "[To be updated]" },
    { class: "UKG", tuition: "[To be updated]", total: "[To be updated]" },
    { class: "1st to 5th", tuition: "[To be updated]", total: "[To be updated]" },
    { class: "6th to 8th", tuition: "[To be updated]", total: "[To be updated]" },
    { class: "9th to 10th", tuition: "[To be updated]", total: "[To be updated]" }
  ];

  const puFees = [
    { stream: "Science (PCM/PCB)", tuition: "[To be updated]", total: "[To be updated]" },
    { stream: "Commerce", tuition: "[To be updated]", total: "[To be updated]" },
    { stream: "Arts", tuition: "[To be updated]", total: "[To be updated]" }
  ];

  const additionalFees = [
    { item: "Admission Fee", amount: "[To be updated] (One-time)", icon: BookOpen },
    { item: "Annual Charges", amount: "[To be updated]", icon: GraduationCap },
    { item: "Transport Fee", amount: "[To be updated] (Optional)", icon: Bus },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Fee Structure</h1>
          <p className="text-xl max-w-2xl">Affordable quality education for all</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary flex items-center gap-3">
                  <IndianRupee className="w-8 h-8" />
                  School Fee Structure (Annual)
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-primary/20">
                        <th className="text-left py-3 px-4 font-semibold text-primary">Class</th>
                        <th className="text-left py-3 px-4 font-semibold text-primary">Tuition Fee</th>
                        <th className="text-left py-3 px-4 font-semibold text-primary">Total (Approx.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schoolFees.map((fee, index) => (
                        <tr key={index} className="border-b border-border">
                          <td className="py-3 px-4 text-muted-foreground">{fee.class}</td>
                          <td className="py-3 px-4 text-muted-foreground">{fee.tuition}</td>
                          <td className="py-3 px-4 text-muted-foreground font-semibold">{fee.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary flex items-center gap-3">
                  <IndianRupee className="w-8 h-8" />
                  PU College Fee Structure (Annual)
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-primary/20">
                        <th className="text-left py-3 px-4 font-semibold text-primary">Stream</th>
                        <th className="text-left py-3 px-4 font-semibold text-primary">Tuition Fee</th>
                        <th className="text-left py-3 px-4 font-semibold text-primary">Total (Approx.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {puFees.map((fee, index) => (
                        <tr key={index} className="border-b border-border">
                          <td className="py-3 px-4 text-muted-foreground">{fee.stream}</td>
                          <td className="py-3 px-4 text-muted-foreground">{fee.tuition}</td>
                          <td className="py-3 px-4 text-muted-foreground font-semibold">{fee.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Additional Fees</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {additionalFees.map((fee, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <fee.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-primary">{fee.item}</h3>
                        <p className="text-sm text-muted-foreground">{fee.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Fees are subject to change. Please contact the admissions office for current fee structure and available scholarships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeeStructure;
