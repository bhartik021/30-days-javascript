/*
3/4 Arrow Functions

Explanation: Arrow functions provide a concise syntax for writing function expressions. They do not have their own this value, making them useful for non-method functions. Arrow functions are always anonymous.

Syntax:
const functionName = (parameters) => {
  // code to be executed
};

For single-expression functions, you can omit the curly braces and return keyword:
*/

// const greet = (name) => {
//     return `Hello, ${name}!`;
// }
// console.log(greet('Charlie'));

const greet = name => `Hello ${name}!`;
console.log(greet('David'));