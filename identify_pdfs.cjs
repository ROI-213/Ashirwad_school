const fs = require('fs');
const pdfParse = require('pdf-parse');
const path = require('path');

const uploadDir = 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\12aaa797-36d5-46dd-a793-10d5fc3aeead\\.user_uploaded';

const files = [
  'media_1791281804647.pdf',
  'media_1791281804654.pdf',
  'media_1791281804755.pdf',
  'media_1791281804877.pdf',
  'media_1791281805867.pdf'
];

async function identify() {
  for (const file of files) {
    const filePath = path.join(uploadDir, file);
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    console.log(`\n--- ${file} ---`);
    console.log(data.text.substring(0, 100).replace(/\n/g, ' '));
  }
}

identify();
