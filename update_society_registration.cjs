const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'documents');
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream(path.join(outputDir, 'society-registration.pdf')));

doc.fontSize(18).text('TRUST DEED', { align: 'center', underline: true }).moveDown();
doc.fontSize(16).text('ASHIRWAD TRUST (R)', { align: 'center' }).moveDown();

doc.fontSize(12).text('Office at: Ashirwad Hospital, Hunsagi, Tq: Hunsagi, Dist: Yadgir-585215', { align: 'center' }).moveDown();

doc.text('This Deed of Trust declared and founded in the Taluka: Hunasagi Dist: Yadgir on this 5th day of Nov 2018.').moveDown();

doc.fontSize(14).text('BOARD OF TRUSTEES:').moveDown(0.5);
doc.fontSize(12).text('1. DR. VEERBHADRA GOUDA S/O AYYAN GOUDA HOSMANI - President');
doc.text('2. DR. CHANNABASAVAN GOUDA S/O SOMASHEKHAR GOUDA - Vice President');
doc.text('3. SMT. ASHA @ BASAMMA W/O VEERBHADRA GOUDA HOSMANI - Secretary');
doc.text('4. SRI. PRAKASH M.P. S/O PALAKSHA GOUDA - Trustee');
doc.text('5. SRI. ASHOK KUMAR G. S/O G. MALLIKARJUN GOUDA - Trustee').moveDown();

doc.fontSize(14).text('AIMS AND OBJECTIVES OF THE TRUST:-').moveDown(0.5);
doc.fontSize(12).text("1. To open and run Computer Training Institute, Mobile Repair Training Center, to impart Multi skills in order to improve human skills comprehensively, Anganwadi training College, Teacher's training college...");
doc.text('2. To provide educational facilities to the needy uncared backward class women and children in the form of technical education and to open for Angawadis, Balwadis Balak Mandirs...');
doc.text('3. To protect the constitutional values to make awareness among the citizens of this country...');
doc.text('4. To establish solidarity, fraternity within every caste, religion and sex.').moveDown();

doc.fontSize(14).text('POWER AND FUNCTIONS OF THE BOARD OF TRUSTEES:').moveDown(0.5);
doc.fontSize(12).text('The board of trustees shall have the full power and authority to administrate the trust property, the investment and:');
doc.text('1) To receive, collect and enforce recovery of all monies, dues payable to the trust and grant necessary receipts and discharge thereof.');
doc.text('2) To appoint, terminate, suspend and otherwise deal with the employees.').moveDown();

doc.addPage();
doc.fontSize(16).text('SUPPLEMENTARY TRUST DEED', { align: 'center', underline: true }).moveDown();
doc.fontSize(12).text('This Supplementary Trust Deed is made and executed on this the 28th day of June, 2019 at Hunasagi, Tq Hunasagi, Dist. Yadgir.').moveDown();
doc.fontSize(14).text('AMENDMENTS:').moveDown(0.5);
doc.fontSize(12).text('(1) To raise the funds by subscriptions, donations, loans or other amount for carrying out the object set out herein.');
doc.text('To borrow loans from Nationalized Banks, Private Banks, Corporate Sector Agencies and from Govt Institutions like NABARD etc. towards development of trust and also repay in easy installment.');

doc.end();

console.log('Updated Society Registration PDF generated successfully.');
