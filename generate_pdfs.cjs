const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'documents');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const docs = {
  'fee-structure.pdf': `GRADE WISE FEES STRUCTURE
Date: 29.09.2026

Grade - Annual Fees
NUR - 16000
LKG - 18000
UKG - 20000
1 - 22000
2 - 24000
3 - 26000
4 - 28000
5 - 28000
6 - 32000
7 - 34000
8 - 36000
9 - 38000
10 - 40000`,

  'academic-calendar.pdf': `ACADEMIC CALENDAR OF EVENTS Nur - IX, 2026-27

Important Notes:
First Term: 29 May 2026 - 02 October 2026, Second Term: 22 October 2026 - 10 April 2027
Dasara Holidays: 03 October - 21 October 2026
Total Working Days: Approx. 245

(See official calendar for month-by-month details)`,

  'school-managing-committee.pdf': `SCHOOL MANAGING COMMITTEE
Ref No: AGS/01/2026 Date: 29.09.2026

1. DR. VEERAVHADRA GOUDA - CHAIRMAN
2. MRS. ASHA - TRUST MEMBER
3. MR. BASAVARAJ S HAITAPUR - PRINCIPAL MEMBER - SECRETARY
4. MR. ADITYA - SCHOOL MANAGER
(See full list in original document)`,

  'self-certification-proforma.pdf': `SELF - CERTIFICATION PROFORMA
Category of application: Fresh affiliation upto Secondary level Switch over from other Boards

We (i) BASAVARAJ S HAITAPUR (Principal) And (ii) ADITYA V H (Manager/ Signing Authority) of the school ASHIRWAD GLOBAL HPS certify that:
1. The following uploaded documents are genuine and valid
2. That mandatory Public disclosure has been displayed on the school's website
3. That we have uploaded/submitted all the self-attested documents/ information
4. Submission of wrong system Generated DEO Certificate / Self-undertaking Certificate or deliberate misrepresentation or fraud may result in summarily rejection of application.`,

  'building-safety-certificate.pdf': `BUILDING SAFETY CERTIFICATE
No 187/2026 Dated: 20/09/2026

It is to Certified that the existing building Ashirwad Global HPS, Isampur Cross, Kembhavi Road, Hunasagi, Karnataka is having Number of Floors: G+3.

The building is owned/occupied by Ashirwad Global HPS, have complied with the Building safety requirements in accordance with National Building code Rules, and verified by the officers concerned of Charted Engineer on 20.09.26.`,

  'pta.pdf': `PARENTS TEACHERS ASSOCIATION
Ref No: AGS/2/2026 Date: 29/09/2026

The aims and objectives of the association shall be:
1. To provide the platform for parents, guardians, and teachers of students to meet.
2. To foster mutual understanding, harmonious relationship and cooperation.
3. To make for a healthy and sympathetic understanding of the education policies.

EXECUTIVE PTA MEMBERS:
DR. VEERABHADRA GOUDA HOSAMANI - CHAIRMAN
Mr. BASAVARAJ S HAITAPUR - PRINCIPAL
RACHANA D/O NAGESH RAO - PARENT MEMBER
SIDDARTH S/O BHAGAMMA S - PARENT MEMBER`,

  'society-registration.pdf': `TRUST DEED
ASHIRWAD TRUST (R)
Office at: Ashirwad Hospital, Hunsagi, Tq: Hunsagi, Dist: Yadgir-585215
This Deed of Trust declared and founded in the Taluka: Hunasagi Dist: Yadgir on this 5th day of Nov 2018.

1. DR. VEERBHADRA GOUDA - President
2. DR. CHANNABASAVAN GOUDA - Vice President
3. SMT. ASHA - Secretary
4. SRI. PRAKASH M.P. - Trustee
5. SRI. ASHOK KUMAR G. - Trustee`,

  'water-sanitation.pdf': `PROFORMA FOR SAFE DRINKING WATER AND SANITARY CONDITION CERTIFICATE
No. Dated: 10-09-2026

It is certified that an inspection team headed by Ravi Kumar Technical Manager cum Sr Analyst Inspected the Ashirwad Global HPS, Isampur Cross, Kembhavi Road, Hunasagi, Karnataka. On 10-09-2026 and on the basis of Water Test Report (Attached) bearing no 092 of Ashirwad Global HPS. School also maintains the hygienic sanitation condition in the school building & the campus as per norms prescribed by the Central/ State/ U.T. Govt.`,

  'water-test.pdf': `WATER QUALITY TEST REPORT
Report Issued Date: 10/09/2026
Report Number: 000105

Sample Particulars: RO Water
Test Results:
pH Value: 7.63 (Acceptable: 6.5 - 8.5)
Total Dissolved Solids: 163 mg/l (Acceptable Limit: 500)
Turbidity: 0.6 (Acceptable Limit: 1)
Total Hardness: 43.2 mg/l (Acceptable Limit: 200)

Remark: The above given sample conforms Acceptable Limit, as per IS10500:2012 For The above tested parameters only`,

  'fire-safety.pdf': `Renewal of Fire Safety Compliance Report
Office of the District Fire Officer
Karnataka State Fire and Emergency Services
Yadgiridist, yadgiri-585201
Date: 18/07/2025

Sub: Issuing of "Renewal of Fire Safety Compliance Report" to Ashirwad trust "Ashirwad Global school and pre university college Isampur cross Hunasagi.
This "Renewal of Fire Safety Compliance Report" is valid for two years from the date of issue & should be renewed.`
};

for (const [filename, content] of Object.entries(docs)) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(outputDir, filename)));
  doc.fontSize(12).text(content, 50, 50);
  doc.end();
}

console.log('PDFs generated successfully.');
