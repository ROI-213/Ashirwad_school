const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'documents');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const content = `Government of Karnataka
Department of Public Instruction
Office of the Deputy Director of Public Instruction, Yadagiri District

School Recognition Certificate
No. 93502 / 3064 Date: 13 February 2026

Subject: Grant of school recognition in accordance with the provisions
Of the Right of Children to Free and Compulsory Education
Act, 2009 and the Karnataka Education Act, 1983.

In connection with the application submitted by ASHIRWAD TRUST R 
OFFICE AT ASHIRVAD HOSPITAL HUNASAGI, the department has examined the 
documents submitted for renewal of recognition of ASHIRWAD GLOBAL HPS 
HUNASAGI_SHORAPUR ROAD, school DISE code 29330809132, for Standards 1 to 
10 in the English medium. Recognition is granted subject to the following conditions.

Conditions:
1. Recognition has been granted to the above standards under the Right of Children to 
Free and Compulsory Education Act, 2009 and the Karnataka Education Act, 
1983. Permission is not granted to operate higher standards or additional divisions 
beyond these standards.
2. The functioning of the school shall be governed by the Karnataka Education Act, 
1983 and the rules framed under the Right of Children to Free and Compulsory 
Education Act, 2009.
3. Under the Right of Children to Free and Compulsory Education Act, 2009 and its 
rules, at least 25% of seats shall be reserved for children from disadvantaged groups.

Deputy Director (Administration),
Department of Public Instruction,
Yadagiri (2933) District
Digitally signed by CHANNABASAPPA MUDHOL
Date: 2026.03.07 17:54:45 +05:30`;

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream(path.join(outputDir, 'recognition-certificate.pdf')));
doc.fontSize(12).text(content, 50, 50);
doc.end();

console.log('Recognition Certificate PDF generated successfully.');
