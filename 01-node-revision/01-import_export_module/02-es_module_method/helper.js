
// Named export 
export const user = 'Mehtab';
export const role = "Developer";

// multiply 
export const multiply = (a, b) =>  a * b;

// division
export const division = (a, b) =>  a / b;



// 2. Default Export: Poori file se ek main cheez (Sirf ek hi default ho sakta hai)
export default function greeting(name) {
  return `Welcome back, ${name}! Ready to code?`;
}
