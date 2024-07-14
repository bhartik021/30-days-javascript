/*
2/4 Function Expressions

Explanation: A function expression defines a function as part of an expression. Function expressions can be anonymous (without a name) and are not hoisted, meaning they cannot be called before they are defined.

Syntax:
const functionName = function(parameters) {
  // code to be executed
};
*/

const greet = function(name) {
    return `Hello, ${name}!`
}
console.log(greet('Bob'));