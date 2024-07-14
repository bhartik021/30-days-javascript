// 3/3 Basic Operators (Arithmetic, Comparison, Logical)

// Explanation: Operators perform operations on variables and values.

// - Arithmetic Operators: 
// + (Addition)
// - (Subtraction)
// * (Multiplication)
// / (Division)
// % (Modulus)

// - Comparison Operators: 
// == (Equal to)
// === (Strictly equal to)
// != (Not equal to)
// !== (Strictly not equal to)
// > (Greater than)
// < (Less than)
// >= (Greater than or equal to)
// <= (Less than or equal to)

// - Logical Operators: 
// && (Logical AND)
// || (Logical OR)
// ! (Logical NOT)

let a = 10;
let b = 10;

// arithmatic operators
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Comparison Operators:
console.log(a==b);
console.log(a===b);
console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);
console.log(a!==b);
let isEqual = (a == b); // false

// Logical Operators
console.log(a && b);
console.log(a || b);
let isBothTrue = (a < b && b > 0); // true
