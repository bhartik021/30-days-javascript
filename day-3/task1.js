// 1/3 Conditional Statements (if, else, else if, switch)

// Explanation: Conditional statements are used to perform different actions based on different conditions.

// - if Statement: Executes a block of code if a specified condition is true.
// - else Statement: Executes a block of code if the same condition is false.
// - else if Statement: Specifies a new condition to test, if the first condition is false.
// - switch Statement: Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

// if statement
var age = 18;
if(age >= 18) {
    console.log("You are an adult.");
}

// else statement
var age = 15;
if(age >= 18) {
    console.log("You are an adult.");
}else {
    console.log("You are a minor.");
}

// else if statement
let score = 85;
if(score >= 90) {
    console.log("Grade: A");
}else if(score >= 80) {
    console.log("Grade: B");
}else {
    console.log("Grade: C");
}

// switch statement
let fruit = "apple"
switch (fruit) {
    case "banana" :
        console.log("Bananas are great!");
        break;
    case "apple" :
        console.log("I love apples!");
        break;  
    default:
        console.log("Unknown fruit!");  
}