import { Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Documents = () => {
  const documents = [
    { title: "Society Registration", href: "/documents/society-registration.pdf" },
    { title: "Recognition Certificate", href: "/documents/recognition-certificate.pdf" },
    { title: "Building Safety Certificate", href: "/documents/building-safety-certificate.pdf" },
    { title: "Fire Safety Certificate", href: "/documents/fire-safety.pdf" },
    { title: "Water Sanitation Certificate", href: "/documents/water-sanitation.pdf" },
    { title: "Water Test Report", href: "/documents/water-test.pdf" },
    { title: "PTA (Parent-Teacher Association)", href: "/documents/pta.pdf" },
    { title: "SMC (School Management Committee)", href: "/documents/school-managing-committee.pdf" },
    { title: "Fee Structure", href: "/documents/fee-structure.pdf" },
    { title: "Self Certificate", href: "/documents/self-certification-proforma.pdf" },
    { title: "Academic Calendar", href: "/documents/academic-calendar.pdf" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">Mandatory Documents</h1>
          <div className="w-24 h-1.5 bg-white mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-xl max-w-2xl mx-auto">Important mandatory public disclosures and school documents</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-card rounded-lg shadow-md border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-5 font-semibold w-24 border-b border-primary/20">Sl No</th>
                    <th className="px-6 py-5 font-semibold border-b border-primary/20">Document Name</th>
                    <th className="px-6 py-5 font-semibold text-right border-b border-primary/20">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-border last:border-0 even:bg-muted/40 hover:bg-muted/70 transition-colors"
                    >
                      <td className="px-6 py-4 font-bold text-muted-foreground">{index + 1}</td>
                      <td className="px-6 py-4 text-foreground/90 font-medium">{doc.title}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="gap-2" asChild>
                            <a href={doc.href} download title="Download PDF">
                              <Download className="w-4 h-4" /> <span className="hidden sm:inline">Download</span>
                            </a>
                          </Button>
                          <Button variant="default" size="sm" className="gap-2" asChild>
                            <a href={doc.href} target="_blank" rel="noopener noreferrer">
                              <Eye className="w-4 h-4" /> View
                            </a>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;
