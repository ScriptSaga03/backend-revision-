import path from 'path';
import { fileURLToPath } from 'url';

// 1. Current File & Folder Paths Setup (ES Modules Standard)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("=========================================");
console.log("       PATH MODULE PRACTICAL DEMO        ");
console.log("=========================================");

console.log('Current File Path  :', __filename);
console.log('Current Folder Path:', __dirname);
console.log("-----------------------------------------\n");


// 2. PATH.JOIN (Safe path stitcher - OS independent)
const joinedPath = path.join(__dirname, "path.txt");
console.log('1. path.join Output:', joinedPath);


// 3. PATH.RESOLVE (Creates absolute path from root)
const resolvedPath = path.resolve(__dirname, "path.txt");
console.log('2. path.resolve Output:', resolvedPath);


// 4. PATH.PARSE (Deconstructs path into an object)
const parsedPath = path.parse(__filename);
console.log('3. path.parse Output:\n', parsedPath);
// Tip: properties can be accessed like: parsedPath.name, parsedPath.ext


// 5. PATH.EXTNAME (To check file formats/validations)
const extName = path.extname(__filename);
console.log('\n4. path.extname (Current File):', extName);

const sampleFile = "profile-pic.png";
console.log('   path.extname (Sample File) :', path.extname(sampleFile));


// 6. PATH.BASENAME (Extracts filename with or without extension)
const baseNameWithExt = path.basename(__filename);
const baseNameWithoutExt = path.basename(__filename, '.js');
console.log('\n5. path.basename (With Ext)   :', baseNameWithExt);
console.log('   path.basename (Without Ext):', baseNameWithoutExt);


// 7. DOUBLE DOTS (..) NAVIGATION PRACTICE
// controllers folder se nikal kar parallel config/db.js ka path banana
const targetDbPath = path.join(__dirname, "..", "config", "db.js");
console.log('\n6. Parallel Folder Path (..)  :', targetDbPath);
