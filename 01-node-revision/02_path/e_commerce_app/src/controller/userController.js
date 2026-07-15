

import path from 'path';
import { fileURLToPath } from 'url';


// create current file path
const __filename = fileURLToPath(import.meta.url);
// create current folder path
const __dirname = path.dirname(__filename);




/*

Apne Questions Aur Logic Lagao:
Q1: Same folder ke andar jana
Aap userController.js (File A) ke andar hain aur 
aapko usi controllers folder ke andar ek naye controller productController.js ka path banana hai.
Aapka Target: src/controllers/productController.js
Pucho khud se: Mujhe __dirname se aage kidhar jana hai?



Q2: Kisi dusre parallel folder mein jana
Aap userController.js (File A) mein hain aur aapko utils folder ke andar baithe logger.js (File B) ko access karna hai.

Aapka Target: src/utils/logger.js

Pucho khud se: Mujhe pehle controllers se bahar (..) nikalna padega, phir kis folder ke andar jana padega?

Q3: Deep Nesting se bahar nikal kar doosre core folder mein jana
Aap userController.js (File A) mein hain aur ab aapko public/uploads/profile.png (File C) ka address chahiye (Maan lo jab user apni profile pic delete karega).

Aapka Target: public/uploads/profile.png

Pucho khud se: Main src/controllers mein hoon. Mujhe my-ecommerce-app tak pahunchne ke liye kitne baar .. (back) jana padega? Phir wahan se public aur uploads mein kaise ghusna hai?

Q4: Folder ke andar ke folder mein jana
Aap userController.js (File A) mein hain aur aapko config folder ke andar db.json (File D) ka path banana hai.

Aapka Target: src/config/db.json

Hint: Pehle controllers se ek step back aao (src folder mein), phir config ke andar jao.

*/


// Q1 
export const productPath  = path.join(__dirname,"productController.js");
console.log('product controller path :', productPath);




// // Q2: Parallel folder (utils/logger.js)
// controllers se ek step back (..) gaye, fir utils folder ke andar ghuse
export const getLoggerPath = path.resolve("..","utils", "logger.js");
export const loggerPath = path.join(__dirname,"..","utils", "logger.js");
// default export 
const findLoggerPath = path.join("..","utils", "logger.js");
export default findLoggerPath;


// Q3
export const profilePicPath = path.join(__dirname,"..", "..","public", "uploads", "profile.png")


// Q$
export const createDBPath = path.join(__dirname,"..","config","db.json");


