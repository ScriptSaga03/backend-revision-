import path from 'path';
import findLoggerPath, {
  productPath,
  getLoggerPath,
  loggerPath,
  profilePicPath,
  createDBPath
} from './src/controller/userController.js';

console.log("==================================================");
console.log("          IMPORTED CUSTOM PATHS TEST              ");
console.log("==================================================");

console.log("Product Path (Named Export)       : ", productPath);
console.log("Logger Path (Function Export)     : ", getLoggerPath);
console.log("Logger Path (No __dirname Join)   : ", findLoggerPath);
console.log("Logger Path (Variable Export)     : ", loggerPath);
console.log("Profile Pic Path (Cross-Folder)   : ", profilePicPath);
console.log("Database Config Path (Modified)   : ", createDBPath);

console.log("\n==================================================");
console.log("         FILE UPLOAD & PARSING OPERATIONS         ");
console.log("==================================================");

// Dummy user file input path
const userUploadedFile = "./upload/users/mehtab_resume.pdf";

// 1. File Extension Validation Check
const fileExtension = path.extname(userUploadedFile);
console.log(`Checking File Extension           : "${fileExtension}"`);

if (fileExtension !== '.pdf') {
  console.log("❌ Error: Only PDF files are allowed to upload!");
} else {
  console.log("✅ Success: File is valid and ready to upload!");
}

// 2. Extracting Basename (With and Without Extension)
const fileNameOnly = path.basename(userUploadedFile);
const nameWithoutExtension = path.basename(userUploadedFile, ".pdf");

console.log("Extracting Clean Filename         :", fileNameOnly);
console.log("Extracting Name Without Extension :", nameWithoutExtension);

// 3. Complete Path Breakdown using path.parse()
const pathDetails = path.parse(userUploadedFile);
console.log("\nFull Path Analysis (parsed object):");
console.dir(pathDetails);

console.log("├── Folder Directory (dir)        :", pathDetails.dir);
console.log("└── File Base Name (name)         :", pathDetails.name);
console.log("==================================================");
