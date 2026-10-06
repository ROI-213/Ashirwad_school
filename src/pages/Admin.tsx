import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAdmin } from "@/hooks/useAdmin";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Search, Download, Trash2, Eye, LogOut, ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";
import { format } from "date-fns";

type ApplySubmission = {
  id: string;
  name: string;
  dob: string | null;
  parent_name: string;
  contact: string;
  email: string;
  admission_for: string;
  message: string | null;
  created_at: string;
};

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  created_at: string;
};

const PAGE_SIZE = 10;

const Admin = () => {
  const navigate = useNavigate();
  const { isAdmin, loading: authLoading, signOut } = useAdmin();
  const { toast } = useToast();

  const [applyData, setApplyData] = useState<ApplySubmission[]>([]);
  const [contactData, setContactData] = useState<ContactSubmission[]>([]);
  const [search, setSearch] = useState("");
  const [applyPage, setApplyPage] = useState(1);
  const [contactPage, setContactPage] = useState(1);
  const [sortField, setSortField] = useState<string>("created_at");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [viewItem, setViewItem] = useState<any>(null);
  const [viewType, setViewType] = useState<"apply" | "contact">("apply");
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !isAdmin) navigate("/admin/login");
  }, [authLoading, isAdmin, navigate]);

  const fetchData = async () => {
    setDataLoading(true);
    const [applyRes, contactRes] = await Promise.all([
      supabase.from("apply_online_submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }),
    ]);
    if (applyRes.data) setApplyData(applyRes.data);
    if (contactRes.data) setContactData(contactRes.data);
    setDataLoading(false);
  };

  useEffect(() => {
    if (isAdmin) fetchData();
  }, [isAdmin]);

  const handleDelete = async (table: "apply_online_submissions" | "contact_submissions", id: string) => {
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: "Failed to delete.", variant: "destructive" });
    } else {
      toast({ title: "Deleted", description: "Entry removed successfully." });
      fetchData();
    }
  };

  const filterAndSort = <T extends Record<string, any>>(data: T[]) => {
    let filtered = data;
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = data.filter((row) =>
        Object.values(row).some((v) => v && String(v).toLowerCase().includes(q))
      );
    }
    filtered.sort((a, b) => {
      const aVal = a[sortField] ?? "";
      const bVal = b[sortField] ?? "";
      return sortDir === "asc" ? String(aVal).localeCompare(String(bVal)) : String(bVal).localeCompare(String(aVal));
    });
    return filtered;
  };

  const exportCSV = (data: Record<string, any>[], filename: string) => {
    if (!data.length) return;
    const headers = Object.keys(data[0]);
    const csv = [headers.join(","), ...data.map((row) => headers.map((h) => `"${String(row[h] ?? "").replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleSort = (field: string) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("desc"); }
  };

  const filteredApply = useMemo(() => filterAndSort(applyData), [applyData, search, sortField, sortDir]);
  const filteredContact = useMemo(() => filterAndSort(contactData), [contactData, search, sortField, sortDir]);

  const paginate = <T,>(data: T[], page: number) => ({
    items: data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    total: Math.ceil(data.length / PAGE_SIZE),
  });

  const applyPaged = paginate(filteredApply, applyPage);
  const contactPaged = paginate(filteredContact, contactPage);

  if (authLoading || (!isAdmin && !authLoading)) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>;
  }

  const SortButton = ({ field, label }: { field: string; label: string }) => (
    <button onClick={() => toggleSort(field)} className="flex items-center gap-1 hover:text-primary transition-colors">
      {label} <ArrowUpDown className="w-3 h-3" />
    </button>
  );

  const PaginationControls = ({ page, total, setPage }: { page: number; total: number; setPage: (p: number) => void }) => (
    total > 1 ? (
      <div className="flex items-center justify-center gap-2 mt-4">
        <Button variant="outline" size="sm" onClick={() => setPage(page - 1)} disabled={page <= 1}><ChevronLeft className="w-4 h-4" /></Button>
        <span className="text-sm text-muted-foreground">Page {page} of {total}</span>
        <Button variant="outline" size="sm" onClick={() => setPage(page + 1)} disabled={page >= total}><ChevronRight className="w-4 h-4" /></Button>
      </div>
    ) : null
  );

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-heading font-bold text-primary">Admin Dashboard</h1>
        <Button variant="outline" onClick={() => { signOut(); navigate("/admin/login"); }}>
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </Button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by name, email, mobile..." value={search} onChange={(e) => { setSearch(e.target.value); setApplyPage(1); setContactPage(1); }} className="pl-10" />
          </div>
        </div>

        <Tabs defaultValue="apply">
          <TabsList className="mb-6">
            <TabsTrigger value="apply">Apply Online ({filteredApply.length})</TabsTrigger>
            <TabsTrigger value="contact">Contact ({filteredContact.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="apply">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Apply Online Submissions</CardTitle>
                <Button variant="outline" size="sm" onClick={() => exportCSV(filteredApply, "apply-online-submissions")}>
                  <Download className="w-4 h-4 mr-2" /> Export CSV
                </Button>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                {dataLoading ? <p className="text-muted-foreground py-8 text-center">Loading...</p> : applyPaged.items.length === 0 ? <p className="text-muted-foreground py-8 text-center">No submissions found.</p> : (
                  <>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead><SortButton field="created_at" label="Date" /></TableHead>
                          <TableHead><SortButton field="name" label="Name" /></TableHead>
                          <TableHead><SortButton field="email" label="Email" /></TableHead>
                          <TableHead>Mobile</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {applyPaged.items.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell className="whitespace-nowrap">{format(new Date(row.created_at), "dd MMM yyyy, hh:mm a")}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.contact}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => { setViewItem(row); setViewType("apply"); }}>
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>Delete Submission?</AlertDialogTitle>
                                      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                                      <AlertDialogAction onClick={() => handleDelete("apply_online_submissions", row.id)}>Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <PaginationControls page={applyPage} total={applyPaged.total} setPage={setApplyPage} />
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contact Form Submissions</CardTitle>
                <Button variant="outline" size="sm" onClick={() => exportCSV(filteredContact, "contact-submissions")}>
                  <Download className="w-4 h-4 mr-2" /> Export CSV
                </Button>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                {dataLoading ? <p className="text-muted-foreground py-8 text-center">Loading...</p> : contactPaged.items.length === 0 ? <p className="text-muted-foreground py-8 text-center">No submissions found.</p> : (
                  <>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead><SortButton field="created_at" label="Date" /></TableHead>
                          <TableHead><SortButton field="name" label="Name" /></TableHead>
                          <TableHead><SortButton field="email" label="Email" /></TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contactPaged.items.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell className="whitespace-nowrap">{format(new Date(row.created_at), "dd MMM yyyy, hh:mm a")}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phone || "—"}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => { setViewItem(row); setViewType("contact"); }}>
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>Delete Submission?</AlertDialogTitle>
                                      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                                      <AlertDialogAction onClick={() => handleDelete("contact_submissions", row.id)}>Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <PaginationControls page={contactPage} total={contactPaged.total} setPage={setContactPage} />
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* View Details Modal */}
      <Dialog open={!!viewItem} onOpenChange={() => setViewItem(null)}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{viewType === "apply" ? "Application Details" : "Contact Details"}</DialogTitle>
          </DialogHeader>
          {viewItem && (
            <div className="space-y-3">
              {viewType === "apply" ? (
                <>
                  <DetailRow label="Name" value={viewItem.name} />
                  <DetailRow label="Date of Birth" value={viewItem.dob ? format(new Date(viewItem.dob), "dd MMM yyyy") : "—"} />
                  <DetailRow label="Parent/Guardian" value={viewItem.parent_name} />
                  <DetailRow label="Contact" value={viewItem.contact} />
                  <DetailRow label="Email" value={viewItem.email} />
                  <DetailRow label="Admission For" value={viewItem.admission_for} />
                  <DetailRow label="Message" value={viewItem.message || "—"} />
                  <DetailRow label="Submitted On" value={format(new Date(viewItem.created_at), "dd MMM yyyy, hh:mm a")} />
                </>
              ) : (
                <>
                  <DetailRow label="Name" value={viewItem.name} />
                  <DetailRow label="Email" value={viewItem.email} />
                  <DetailRow label="Phone" value={viewItem.phone || "—"} />
                  <DetailRow label="Subject" value={viewItem.subject || "—"} />
                  <DetailRow label="Message" value={viewItem.message} />
                  <DetailRow label="Submitted On" value={format(new Date(viewItem.created_at), "dd MMM yyyy, hh:mm a")} />
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="border-b border-border pb-2">
    <p className="text-xs text-muted-foreground font-medium">{label}</p>
    <p className="text-sm mt-0.5 whitespace-pre-wrap">{value}</p>
  </div>
);

export default Admin;
