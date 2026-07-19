/*
🌎 Node.js global Object: The Deep Dive
Jaise browser ke paas HTML elements aur page ko handle karne ke liye window hota hai, 
waise hi Node.js (jo ki computer ke operating system par run hota hai) ke paas pure environment ko sambhalne ke liye global (ya modern JS mein globalThis) hota hai.
Hum isko char bade parts mein break karke samajhte hain:

1. The Big Global Properties (Jo hum daily use karte hain)
Aapko lagta hoga ki console ya setTimeout hawa se aate hain, par yeh sab global ke bacche hain:

global.console: Input/Output terminal par dikhane ke liye.

global.setTimeout / global.setInterval: Timing control karne ke liye.

global.clearTimeout / global.clearInterval: Timers ko destroy karne ke liye.

*/

// dono ka matlab 100% ek hi hai : 
setTimeout(() => console.log('Hi'), 1000);
globalThis.setTimeout(() =>  globalThis.console.log("Hi"), 1000);





/*

2. Global Variables vs File-Level Variables (Sabse Badi Galti)
Is concept par acche-acche developers phas jaate hain. Node.js mein har file (.js) ek module hoti hai.

*/


var user = 'Mehtab';
var age = 25;

console.log(globalThis.user);
console.log(globalThis.age);



/*
Agar sach mein koi cheez global banani ho toh?
Zabardasti global banane ke liye aapko use explicitly global ke andar property ki tarah attach karna padeg
*/


globalThis.userName = "Mehtab";
globalThis.userRole = "Back-End Developer";

console.log(globalThis.userName);
console.log(globalThis.userRole);

// Ek raw buffer memory banana
const buf = Buffer.from('Mehtab', 'utf-8');
console.log(buf); // Output: <Buffer 4d 65 68 74 61 62> (Hexadecimal values of characters)
console.log(buf.toString()); // Output: Mehtab
