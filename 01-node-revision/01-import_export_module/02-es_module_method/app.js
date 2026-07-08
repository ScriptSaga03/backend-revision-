
// Named exports ke liye { } chahiye, Default ke liye bina { } ke koi bhi naam rakh sakte hain
import greetingFnc, { multiply, division } from "./helper.js";

console.log("=== ES Modules (import/export) Practice ===");

// Default export ko chalaya
console.log(greetingFnc("Mehtab")); // Output: Welcome back, Mehtab! Ready to code?

// Named exports ko chalaya
console.log("Multiply:", multiply(4, 5)); // Output: 20


console.log("Division:", division(20, 4)); // Output: 5
